import {AngularFire, FirebaseAuthState, AuthProviders, AuthMethods} from 'angularfire2';
import * as firebase from 'firebase';
import {Observable, Observer} from 'rxjs';
import { Inject } from '@angular/core';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor( @Inject(AngularFire) private af: AngularFire) {
  }

  authInfo: firebase.UserInfo;
  uid: string;

  getAuthInfo() {
    return this.authInfo;
  }

  getUserInfo() {
    return this.createUserInfo();
  }

  logout() {
    this.af.auth.logout();

    // console.log('isUnsubscribed: ' + this.af.auth.isUnsubscribed);
    //
    // if (this.authInfo && (this.authInfo.email || this.authInfo.providerId)) {
    //   this.af.auth.logout();
    //   console.log('logged out');
    //   this.authInfo = null;
    //   if (loggedOutsucceeded) {
    //     loggedOutsucceeded(this.authInfo);
    //   }
    //   // this.displayLoginModal()
    // } else {
    //   // console.log(this.authInfo)
    //   // this.displayLoginModal()
    // }
  }

  login(userEmail, password) {
    // login usig the email/password auth provider
    // console.log('isUnsubscribed: ' + this.af.auth.isUnsubscribed);

    return firebase.auth().signInWithEmailAndPassword(userEmail, password);

    /*return this.af.auth.login(credentials, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })*/

    /*.then((authData) => {

      this.setAuthInfo(authData);

      console.log(authData);

      if (setUserObject) {
        const itemObservable = this.af.database.object('/users/' + authData.uid);
        itemObservable.set({
          "provider": authData.auth.providerData[0].providerId,
          "avatar": authData.auth.photoURL || "MISSING",
          "displayName": authData.auth.providerData[0].displayName || authData.auth.email,
        });

      } else {
        // this.dismiss()
      }

      if (loggedInSucceeded) {
        console.log('calling loggedInSucceeded(userInfo);')
        var userInfo: IUserInfo = this.createUserInfo();
        console.log(userInfo)
        loggedInSucceeded(userInfo);
        console.log('done')
      }

    }).then((value) => {
      // this.dismiss()
    }).catch((error) => {
      // this.error = error
      // console.log(error);
      if (loginFailed)
        loginFailed(error);
    });*/
  }

  private createUserInfo(): IUserInfo {
    return { displayName: this.authInfo.displayName || this.authInfo.email, uid: this.authInfo.uid };
  }

  public setAuthInfo(authData: FirebaseAuthState) {
    this.authInfo = authData.auth.providerData[0];
  }

  public isAuthenticated() {

    var data = this.af.auth.getAuth();

    return data != null;

    //this.af.auth.subscribe((data: FirebaseAuthState) => {

    // console.log("checking authentication", data);

    // this.uid = data ? data.uid : '';
    //
    // if (data && !data.anonymous) {
    //
    //   if (unsubscribeIfSucceeded) {
    //     this.af.auth.unsubscribe();
    //     console.log('unsubscribed');
    //   }
    //
    //   this.setAuthInfo(data);

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

    //   if (authenticated) {
    //     authenticated(data);
    //   }
    //
    // } else {
    //   // this.buttonTitle = "LOGIN"
    //   // this.authInfo = null
    //   // this.displayLoginModal();
    //   // this.navCtrl.setRoot(LoginPage, { af: this.af }, () => { console.log('done') });
    //   if (notAuthenticated)
    //     notAuthenticated(data);
    // }
    //});
  }

  addOrUpdateUser(_authData) {
    const itemObservable = this.af.database.object('/users/' + _authData.uid);
    itemObservable.set({
      "provider": _authData.auth.providerData[0].providerId,
      "avatar": _authData.auth.photoURL || "MISSING",
      "displayName": _authData.auth.providerData[0].displayName || _authData.auth.email,
    })
  }

  registerUser(cridentilas, registerSucceeded, registerError) {
    this.af.auth.createUser(cridentilas)
      .then((user) => {
        console.log(`Create User Success:`, user);
        cridentilas.created = true;
        this.login(cridentilas, false);

        if (registerSucceeded) {
          var userInfo: IUserInfo = this.createUserInfo();
          registerSucceeded(userInfo);
        }
      })
      .catch((e) => {
        if (registerError)
          registerError(e);
        // console.error(`Create User Failure:`, e);
      });
  }
}

export interface IUserInfo {
  displayName: string;
  uid: string;
}
