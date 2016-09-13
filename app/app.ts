import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { FIREBASE_PROVIDERS, AuthProviders, defaultFirebase } from 'angularfire2';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
    FIREBASE_PROVIDERS,
    // disableDeprecatedForms(), provideForms(),
    defaultFirebase({
      apiKey: "AIzaSyC5VvURIFqzvPJt-35oUyQCPWgx2svvaNg",
      authDomain: "myanimationapp.firebaseapp.com",
      databaseURL: "https://myanimationapp.firebaseio.com",
      storageBucket: "firebase-myanimationapp.appspot.com",
    })
  ]
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
