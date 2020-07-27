import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  reasonInput = document.querySelector('#input-reason');
  amountInput = document.querySelector('#input-amount');
  expensesList = document.querySelector('#expenses-list');

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  /*
  onClick(){
    const enteredReason = this.reasonInput.value;
    const enteredAmount = this.amountInput.value;

    if (
      enteredReason.trim().length <= 0 || 
      enteredAmount <= 0 ||
      enteredAmount.trim().length <= 0
    ){
      return;
    }
    console.log(enteredReason, enteredAmount);
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    this.expensesList.appendChild(newItem);
  }
  */
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
}
