import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  // properties
  imgUrl = 'https://placekitten.com/720/48'
  imgAlt = 'Company Kitten Logo'
  imgTitle = 'A wide banner showing a kitten'
}
