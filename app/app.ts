import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { FIREBASE_PROVIDERS, AuthProviders, defaultFirebase, AngularFire, firebaseAuthConfig, AuthMethods, FirebaseAuthState } from 'angularfire2';
import {LoginPage} from './pages/login/login';
import {AuthService} from './core/services/auth.service';

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
    }),
    AuthService, firebaseAuthConfig({
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
      remember: 'default',
      scope: ['email']
    })
  ]
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform, private _authService: AuthService, private af: AngularFire) {

    this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
    this._authService.isAuthenticated(
      (authState: FirebaseAuthState) => {
        this.rootPage = TabsPage;
      }, (authState: FirebaseAuthState) => {
        this.rootPage = LoginPage;
      });
  }
}

ionicBootstrap(MyApp);
