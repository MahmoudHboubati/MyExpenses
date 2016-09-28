import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {PlannedExpensesPage} from '../plannedExpenses/plannedExpenses.page';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public homePage: any;
  public aboutPage: any;
  public contactPage: any;
  public plannedExpensesPage: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homePage = HomePage;
    this.aboutPage = AboutPage;
    this.contactPage = ContactPage;
    this.plannedExpensesPage = PlannedExpensesPage;
  }
}
