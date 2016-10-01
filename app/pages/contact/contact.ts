import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MainHeaderNavbarComponent} from '../../components/headerNavbar/mainHeaderNavbar.component';
import {BasePage} from '../base/base.page';

@Component({
  templateUrl: 'build/pages/contact/contact.html',
  directives: [MainHeaderNavbarComponent]
})
export class ContactPage extends BasePage {
  // headerPageTitle: string = "Contact";
  constructor(public navCtrl: NavController) {
    super("Contact");
  }
}
