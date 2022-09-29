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

  ngOnInit() {
    this.title = "Sahara Dune";
    this.description = "Great Holidays in the Sahara";
    this.createdDate = new Date();
    this.snaps = 4;
    this.imageUrl = "https://i.picsum.photos/id/261/200/200.jpg?hmac=4mNici_jSM7rVZzJL7M6G24f0axnDV3BZR-LBo5gMIg";
  }
}
