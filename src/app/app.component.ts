import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      "Sahara Dune",
      "Great Holidays in the Sahara",
      new Date(),
      0,
      "https://i.picsum.photos/id/261/200/200.jpg?hmac=4mNici_jSM7rVZzJL7M6G24f0axnDV3BZR-LBo5gMIg"
    )

    this.myOtherSnap = new FaceSnap(
      "Montains",
      "Montains in the winter 2020",
      new Date(),
      0,
      "https://i.picsum.photos/id/79/200/300.jpg?hmac=uqOMZrx9qlolrYp0xS5t84xjCiD_BIjfxIugTa1xjho"
    )

    this.myLastSnap = new FaceSnap(
      "Blue Ocean",
      "Ocean - Holidays 2016",
      new Date(),
      0,
      "https://i.picsum.photos/id/147/200/200.jpg?hmac=Wk9sBW0wWCdCCp0HIczINX1TUZ_paAR_tCIKXcuYf2k"
    )
  }

}
