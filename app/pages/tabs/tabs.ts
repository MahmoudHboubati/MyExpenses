import {Component} from'@angular/core';
import {HomePage} from'../home/home';
import {AboutPage} from'../about/about';
import {ContactPage} from'../contact/contact';
import {ListPlannedExpensesPage} from'../plannedExpenses/listPlannedExpenses.page';
import {MainHeaderNavbarComponent} from'../../components/headerNavbar/mainHeaderNavbar.component';
import {PlanInitialize} from '../planInitialize/planInitialize';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
  directives: [MainHeaderNavbarComponent]
})
export class TabsPage {

  public homePage: any;
  public aboutPage: any;
  public contactPage: any;
  public plannedExpensesPage: any;
  public dashboardPage: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homePage = HomePage;
    this.aboutPage = AboutPage;
    this.contactPage = ContactPage;
    this.plannedExpensesPage = ListPlannedExpensesPage;
    this.dashboardPage = PlanInitialize;
  }
}
