# Doorbot Mobile

## Introduction
Doorbot Mobile is the client side of the doorbot project. It lets you view information like clips, time of person detection among other things. You are required to use Firebase as the database and serverless backend, Ionic for the frontend and AngularFire to bootstrap the entire project. 

## Getting Started
There are three modules in this application that require packages and some configuration information. You'll first need to have [NodeJS](nodejs.org) and [Ionic](ionicframework.com) installed globally.
```sh
$ npm install
```
 
## Run and Deploy
- To build and run the client side, `ionic serve -l` will do the trick. Visit [Ionic](ionicframework.com) for more information 
- To run the server side, `node index.js` will do the trick.
	- Sometimes you might want the program to run headlessly i.e without a terminal window open, `nohup node index.js & ` will give you that functionality. `nohup` keeps the terminal running even after logout and `&` just makes the job persistent in the background.
- To deploy the Firebase Cloud Functions, in the functions folder, run `firebase deploy --only functions`

## Features
- [ ] Detect motion and take 5 second video
- [ ] Enable/Disable Surveillance
- [ ] Enable/Disable Dark Hours (for lighting)

## Coming Soon
- [ ] Person Analytics
	- [ ] Frequency of room entry
	- [ ] Person last location  

## Contributors
Tobi Akerele [@tobidae](https://tobiak.com) (contact@tobiak.com)
 
