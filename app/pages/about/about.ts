import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MainHeaderNavbarComponent} from '../../components/headerNavbar/mainHeaderNavbar.component';
import {BasePage} from '../base/base.page';

@Component({
  templateUrl: 'build/pages/about/about.html',
  directives: [MainHeaderNavbarComponent]
})
export class AboutPage extends BasePage {
  constructor(public navCtrl: NavController) {
    super();
  }
}
