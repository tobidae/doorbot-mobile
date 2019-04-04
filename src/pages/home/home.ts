import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ActionProvider } from '../../providers/action/action';
import { LOCATION } from '../../shared/constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isSurveilling: boolean = false;
  surveillanceState: string;

  isDarkHours: boolean = false;
  hoursState: string;

  lastImage: string;
  lastTime: Date;
  lastImageData: any;

  constructor(public navCtrl: NavController, private actionProvider: ActionProvider,
    private toast: ToastController, private dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    this.actionProvider.getLogSetting(LOCATION)
      .on('value', snap => {
        this.isSurveilling = snap.val();
        this.surveillanceState = snap.val() ? "Disable" : "Enable";
      });
    this.actionProvider.getDarkHoursSetting(LOCATION)
      .on('value', snap => {
        this.isDarkHours = snap.val();
        this.hoursState = snap.val() ? "Disable" : "Enable";
      });
    this.dataProvider.lastImage(LOCATION)
      .on('child_added', snap => {
        this.lastImage = snap.val().imageUrl;
        this.lastTime = snap.val().timestamp;
      })
    this.dataProvider.lastImageTags(LOCATION)
      .on('child_added', snap => {
        this.lastImageData = snap.val();
      })
  }

  takeImage() {
    this.actionProvider.takeImage(LOCATION)
      .then(() => {
        this.toastMessage("Please wait while the pi captures image.")
      });
  }

  toggleSurveillance(event) {
    if (this.isSurveilling == event.value) return;
    this.actionProvider.setLogSetting(LOCATION, event.value)
      .then(() => {
        let message = event.value ? "Enabled" : "Disabled";
        message += "  surveillance on PI";
        this.toastMessage(message);
      });
  }

  toggleHours(event) {
    if (this.isDarkHours == event.value) return;
    this.actionProvider.setDarkHoursSetting(LOCATION, event.value)
      .then(() => {
        let message = event.value ? "Enabled" : "Disabled";
        message += "  dark hours (lighting)";
        this.toastMessage(message);
      });
  }

  toastMessage(message: string) {
    return this.toast.create({
      message: message,
      duration: 2000
    }).present();
  }
}
