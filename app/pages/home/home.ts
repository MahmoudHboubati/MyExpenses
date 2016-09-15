import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {AngularFire, AuthProviders, AuthMethods, FirebaseAuthState, FirebaseListObservable} from 'angularfire2';
import {ExpensesService} from '../../core/services/expenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';
import {NewExpensesComponent} from '../../components/expenses/newExpenses.component';

import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [NewExpensesComponent],
  providers: [ExpensesService]
})
export class HomePage implements OnInit {
  expenses: any;
  authInfo: any
  displayName: any
  buttonTitle = "LOGIN"

  constructor(public navCtrl: NavController,
    private _expensesService: ExpensesService,
    private af: AngularFire,
    private modal: ModalController) {
    this.expenses = _expensesService.get();
  }

  ngOnInit() {

    //check the current status of authentication

    // subscribe to the auth object to check for the login status
    // of the user, if logged in, save some user information and
    // execute the firebase query...
    // .. otherwise
    // show the login modal page
    // this.af.auth.subscribe((data: FirebaseAuthState) => {
    //   console.log("in auth subscribe", data)
    //
    //   if (data && !data.anonymous) {
    //
    //     this.af.auth.unsubscribe()
    //
    //     this.buttonTitle = "LOGOUT"
    //
    //     // // if no user, then add it
    //     // this.addOrUpdateUser(data);
    //
    //     if (data.auth.providerData[0].providerId === "twitter.com") {
    //       this.authInfo = data.auth.providerData[0]
    //       this.displayName = data.auth.providerData[0].displayName
    //     } else if (data.github) {
    //       this.authInfo = data.github
    //       // this.authInfo.displayName = data.github.displayName;
    //     } else {
    //       this.authInfo = data.auth || {}
    //       this.displayName = data.auth.providerData[0].email
    //     }
    //     // this.textItems = this.af.database.list('/textItems')
    //
    //     //this.getMoreData()
    //
    //   } else {
    //     // this.buttonTitle = "LOGIN"
    //     // this.authInfo = null
    //     // this.displayLoginModal();
    //     this.navCtrl.setRoot(LoginPage, { af: this.af }, () => { console.log('done') });
    //   }
    // });

  }

  // addOrUpdateUser(_authData) {
  //   const itemObservable = this.af.database.object('/users/' + _authData.uid);
  //   itemObservable.set({
  //     "provider": _authData.auth.providerData[0].providerId,
  //     "avatar": _authData.auth.photoURL || "MISSING",
  //     "displayName": _authData.auth.providerData[0].displayName || _authData.auth.email,
  //   })
  // }

  /**
 * displays the login window
 */
  // displayLoginModal() {
  //
  //   // I NEEDED TO HACK THE ANGULAR FIRE OBJECT INTO THE ModalController
  //   // BECAUSE OF A BUG IN IONIC...
  //   //
  //   let loginPage = this.modal.create(LoginPage, { af: this.af });
  //
  //   console.log(loginPage)
  //
  //   loginPage.present();
  // }
}
