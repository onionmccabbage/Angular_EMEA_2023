import { Component, OnInit } from '@angular/core';
import { TypicodeService } from './typicode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'use-api-proj';
  // we need to revisit the 'any'
  photos: Array<any> = []
  onePhoto = {} // typescript will infer the type as an object
  // we must instantiate our service in the constructor
  constructor(private typicode: TypicodeService) {}

  // this method ALWAYS runs when this component is instantiated
  ngOnInit() { // life-cycle events
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

  handleGetOnePhoto(e:Event){
    // check which ID the user asked for
    let whichID = 42
    // use that ID in our service call (subscribe as before)
      this.typicode.getOnePhoto(whichID).subscribe(
        (r:object) => {
          this.onePhoto = r
        } 
    )
  }

}
