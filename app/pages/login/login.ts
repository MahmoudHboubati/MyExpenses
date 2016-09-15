import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import {Component, OnInit, Inject} from '@angular/core';
import { NavController, Page, ViewController, NavParams} from 'ionic-angular';

import { Validators } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {AuthService, IUserInfo} from '../../core/services/auth.service';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/login/login.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LoginPage {

  error: any
  af: any
  loginForm: FormGroup;
  userInfo: IUserInfo;

  constructor(public viewCtrl: ViewController,
    builder: FormBuilder,
    public _params: NavParams,
    private _authService: AuthService,
    private _navCtrl: NavController) {

    // // HAD TO HACK IN THE AngularFire object... :-(
    // this.af = _params.get("af");
    // console.log('login page');

    this.loginForm = builder.group({
      'email': [
        '', // default value
        [Validators.required, Validators.minLength(5)]
      ],
      'password': [
        '',
        [Validators.required, Validators.minLength(5)]
      ]
    });
    // console.log(this.af);
  }
  /**
   * this will dismiss the modal page
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
  /**
   * this create in the user using the form credentials.
   *
   * we are preventing the default behavor of submitting
   * the form
   *
   * @param _credentials {Object} the email and password from the form
   * @param _event {Object} the event information from the form submit
   */
  registerUser(_credentials, _event) {
    _event.preventDefault();

    this._authService.registerUser(_credentials, this.registerSucceded, this.registerError);
  }

  registerSucceded(userInfo: IUserInfo) {

  }

  registerError(error) {

  }

  /**
   * this logs in the user using the form credentials.
   *
   * if the user is a new user, then we need to create the user AFTER
   * we have successfully logged in
   *
   * @param _credentials {Object} the email and password from the form
   * @param _event {Object} the event information from the form submit
   */
  login(credentials, _event) {
    _event.preventDefault();

    // if this was called from the register user,  the check if we
    // need to create the user object or not
    let addUser = credentials.created;
    credentials.created = null;

    // console.log('hi')
    // console.log(credentials, addUser);

    this._authService.login(credentials, addUser, this.loggedInSucceeded, this.loginFailed);
  }

  loginFailed(error) {
    // this.notAbleToLogin = error.
  }

  loggedInSucceeded(userInfo: IUserInfo) {
    this.userInfo = userInfo;
    this._navCtrl.push(TabsPage);
  }
}
