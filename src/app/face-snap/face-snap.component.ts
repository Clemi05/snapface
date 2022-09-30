import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText! : string;
  snapped!: boolean;

  ngOnInit() {
    this.title = "Sahara Dune";
    this.description = "Great Holidays in the Sahara";
    this.createdDate = new Date();
    this.snaps = 4;
    this.imageUrl = "https://i.picsum.photos/id/261/200/200.jpg?hmac=4mNici_jSM7rVZzJL7M6G24f0axnDV3BZR-LBo5gMIg";
    this.buttonText = "Oh Snap!"
    this.snapped = false;
  }

  onSnap() {
    if (this.snapped === false) {
      this.snaps++;
      this.snapped = true;
      this.buttonText = "Oops Snap!"
    } else {
      this.snaps--;
      this.snapped = false;
      this.buttonText = "Oh Snap!"
    }
  }

}
