import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // properties
  // @Input() lets us inject proeprties from the parent component
  @Input() portfolio:any // its a good idea to give it a Typescript type
}
