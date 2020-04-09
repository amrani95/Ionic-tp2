import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;


  constructor(private alertController: AlertController) {}

  async fireAlert() {
    // Alert Create
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    alert.onDidDismiss().then(() => console.log('alerte masquée'))

    // Alert show
    await alert.present();
  }

}
