import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation, Coordinates} from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // tslint:disable-next-line:max-line-length
  constructor(private camera: Camera, private alertController: AlertController, private geolocation: Geolocation, private localNotifications: LocalNotifications) { }

  title: string;
  imgData: string;
  position: [Coordinates];
  Pos: Array<{latitude: number, longitude: number}> = [];
  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600
  };
  async fireAlert() {
    // Alert Create
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Petite Alert',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    alert.onDidDismiss().then(() => console.log('alerte masquée'));

    // Alert show
    await alert.present();
  }
takePic() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE };
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    console.log(imageData);
    this.imgData = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    // Handle error
  });
}
takePos() {
  this.geolocation.getCurrentPosition().then((resp) => {
    // this.position = resp.coords;
    this.Pos.push( {longitude: resp.coords.longitude, latitude: resp.coords.latitude} );
  }).catch((error) => {
    console.log('Error getting location', error);
  });
  let watch = this.geolocation.watchPosition();
  watch.subscribe((data) => {
    this.position.push(data.coords);
  });
}
Notif() {
  this.localNotifications.schedule({
    id: 1,
    text: 'Je crois que t\'as une notification ;)',
    sound: 'file://sound.mp3'
  });
}

}
