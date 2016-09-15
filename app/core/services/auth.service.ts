import {AngularFire, FirebaseAuthState, AuthProviders, AuthMethods} from 'angularfire2';
import {Observable, Observer} from 'rxjs';
import { Inject } from '@angular/core';

export class AuthService {

  constructor( @Inject(AngularFire) private af: AngularFire) {
  }

  login(credentials, addUser) {
    // login usig the email/password auth provider
    this.af.auth.login(credentials, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((authData) => {
      console.log(authData)

      if (addUser) {
        const itemObservable = this.af.database.object('/users/' + authData.uid);
        itemObservable.set({
          "provider": authData.auth.providerData[0].providerId,
          "avatar": authData.auth.photoURL || "MISSING",
          "displayName": authData.auth.providerData[0].displayName || authData.auth.email,
        })
      } else {
        // this.dismiss()
      }
    }).then((value) => {
      // this.dismiss()
    }).catch((error) => {
      // this.error = error
      console.log(error);
    });
  }

  public isAuthenticated(authenticated: Function, notAuthenticated: Function) {
    this.af.auth.subscribe((data: FirebaseAuthState) => {
      console.log("in auth subscribe", data)

      if (data && !data.anonymous) {

        this.af.auth.unsubscribe()

        // this.buttonTitle = "LOGOUT"

        // // if no user, then add it
        // this.addOrUpdateUser(data);

        // if (data.auth.providerData[0].providerId === "twitter.com") {
        //   this.authInfo = data.auth.providerData[0]
        //   this.displayName = data.auth.providerData[0].displayName
        // } else if (data.github) {
        //   this.authInfo = data.github
        //   // this.authInfo.displayName = data.github.displayName;
        // } else {
        //   this.authInfo = data.auth || {}
        //   this.displayName = data.auth.providerData[0].email
        // }
        // this.textItems = this.af.database.list('/textItems')

        //this.getMoreData()

        if (authenticated) {
          authenticated(data);
        }

      } else {
        // this.buttonTitle = "LOGIN"
        // this.authInfo = null
        // this.displayLoginModal();
        // this.navCtrl.setRoot(LoginPage, { af: this.af }, () => { console.log('done') });
        if (notAuthenticated)
          notAuthenticated(data);
      }
    });
  }

  addOrUpdateUser(_authData) {
    const itemObservable = this.af.database.object('/users/' + _authData.uid);
    itemObservable.set({
      "provider": _authData.auth.providerData[0].providerId,
      "avatar": _authData.auth.photoURL || "MISSING",
      "displayName": _authData.auth.providerData[0].displayName || _authData.auth.email,
    })
  }
}
