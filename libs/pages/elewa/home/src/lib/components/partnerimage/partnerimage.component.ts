import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-partnerimage',
  templateUrl: './partnerimage.component.html',
  styleUrls: ['./partnerimage.component.scss'],
})
export class PartnerimageComponent {
  ImagePath: string;
  
  constructor() {
    //image location
    this.ImagePath = 'https://user-images.githubusercontent.com/3729474/216369781-7c5a5889-6787-4673-b836-39c6f0d91738.png'
  }
}
