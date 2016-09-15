import { Component, OnInit } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { FIREBASE_PROVIDERS, AuthProviders, defaultFirebase, AngularFire, firebaseAuthConfig, AuthMethods, FirebaseAuthState } from 'angularfire2';
import {LoginPage} from './pages/login/login';
import {AuthService} from './core/services/auth.service';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/app.html',
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
    }),
    NavController]
})
export class MyApp implements OnInit {

  public rootPage: any;

  constructor(public navCtrl: NavController,
    private platform: Platform,
    private _authService: AuthService,
    private af: AngularFire) {

    // this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  ngOnInit() {
    //this will register to the auth Observable to reponds whenever changes (login/out)
    this._authService.isAuthenticated(false,
      (authState: FirebaseAuthState) => {
        this.rootPage = TabsPage;
      }, (authState: FirebaseAuthState) => {
        this.rootPage = LoginPage;
      });
  }

  /**
   * logs out the current user
   */
  logout() {
    this._authService.logout();
    // this.rootPage = LoginPage;
  }

}

ionicBootstrap(MyApp);
