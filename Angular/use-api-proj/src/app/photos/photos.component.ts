import { Component } from '@angular/core';
import { TypicodeService } from '../typicode.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  // properties
  photos = []
  // methods
  constructor(private typicode:TypicodeService){}

  // every component has lifecycle events
  ngOnInit(){ // fires when the component is first rendered
    this.typicode.getAllPhotos()
      .subscribe( this.handlePhotos() )
  }
  handlePhotos(){
    return (received:any)=>{
      this.photos = received
    }
  }
}
