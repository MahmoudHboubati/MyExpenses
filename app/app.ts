//import 'es6-shim';
import {Component} from '@angular/core';
import {ionicBootstrap, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {AuthService} from './core/services/auth.service';
import {TabsPage} from './pages/tabs/tabs';

import {
  FIREBASE_PROVIDERS, defaultFirebase,
  AngularFire, firebaseAuthConfig, AuthProviders,
  AuthMethods
} from 'angularfire2';

@Component({
  templateUrl: 'build/app.html',
  providers: [
    FIREBASE_PROVIDERS,
    // Initialize Firebase app
    defaultFirebase({
      apiKey: "AIzaSyC5VvURIFqzvPJt-35oUyQCPWgx2svvaNg",
      authDomain: "myanimationapp.firebaseapp.com",
      databaseURL: "https://myanimationapp.firebaseio.com",
      storageBucket: "firebase-myanimationapp.appspot.com",
    }),
    firebaseAuthConfig({
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
      remember: 'default',
      scope: ['email']
    }),
    AuthService
  ],
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [], { menuType: 'push' });
