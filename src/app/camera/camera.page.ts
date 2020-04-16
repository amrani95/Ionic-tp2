import {Component, OnDestroy, OnInit} from '@angular/core';
// tslint:disable-next-line:max-line-length
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit, OnDestroy{

  constructor(private cameraPreview: CameraPreview) { }

  ngOnInit() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 10,
      y: 60,
      width: 400,
      height: 400,
      camera: 'back',
    };
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        });
  }
  ngOnDestroy() {
    this.cameraPreview.stopCamera();
  }
}



