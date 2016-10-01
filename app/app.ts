//import 'es6-shim';
import {Component, OnInit} from '@angular/core';
import {ionicBootstrap, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {
  FIREBASE_PROVIDERS, defaultFirebase,
  AngularFire, firebaseAuthConfig, AuthProviders,
  AuthMethods, FirebaseAuthState
} from 'angularfire2';

import {HomePage} from './pages/home/home';
import {AuthService} from './core/services/auth.service';
import {TabsPage} from './pages/tabs/tabs';
import {MainHeaderNavbarComponent} from './components/headerNavbar/mainHeaderNavbar.component';
import {LoginPage} from './pages/login/login';

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
  ]
})
export class MyApp implements OnInit {
  rootPage: any = TabsPage;

  constructor(platform: Platform, private _authService: AuthService,
    private af: AngularFire) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  ngOnInit() {
    //this will register to the auth Observable to reponds whenever changes (login/out)
    // this.rootPage = TabsPage;
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

// enableProdMode();

ionicBootstrap(MyApp, [], { menuType: 'push' });
