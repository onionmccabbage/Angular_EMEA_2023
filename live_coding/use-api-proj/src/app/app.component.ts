import { Component } from '@angular/core';
import { TypicodeService } from './typicode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'use-api-proj';
  // we need to revisit the 'any'
  photos: Array<any> = []
  // we must instantiate our service in the constructor
  constructor(private typicode: TypicodeService) {

  }

  // this method ALWAYS runs when this component is instantiated
  ngOnInit() {
    // make a call for the data
    this.typicode.getAllPhotos().subscribe(
      this.handlePhotos()
    )
  }
  // todo: explain RxJS and Observables in Angular
  handlePhotos() {
    return (r:any)=>{
      this.photos = r
    }
  }

}
