import { PipesModule } from './../pipes/pipes.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ActionProvider } from '../providers/action/action';
import { DataProvider } from '../providers/data/data';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { ImagesPageModule } from '../pages/images/images.module';
import { LogsPageModule } from '../pages/logs/logs.module';
import { LogsPage } from '../pages/logs/logs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    PipesModule,
    ImagesPageModule, 
    LogsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LogsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ActionProvider,
    DataProvider
  ]
})
export class AppModule { }
