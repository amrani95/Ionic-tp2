import {Component, OnDestroy, OnInit} from '@angular/core';
// tslint:disable-next-line:max-line-length
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions} from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit, OnDestroy {
  constructor(private cameraPreview: CameraPreview) { }

  ngOnInit() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 60,
      tapPhoto: true,
      previewDrag: true,
      alpha: 1,
      width: window.screen.width,
      height: window.screen.height / 2,
      camera: 'back',
    };
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        });
// picture options
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    };
// take a picture
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      console.log('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      console.log(err);
    });

  }
  ngOnDestroy() {
    this.cameraPreview.stopCamera();
  }

}



