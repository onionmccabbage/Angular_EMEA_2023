import { Component } from '@angular/core';
import { TypicodeService } from '../typicode.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  // properties
  categories = ['users', 'posts', 'albums', 'photos', 'todos']
  category = this.categories[0]
  category_id = 1
  // we can make a TS Interface for our model
  dataModel = {'name':'', 'thumbnailUrl':''}
  // methods
  constructor(private typicode:TypicodeService){}

  // every component has lifecycle events
  ngOnInit(){ // fires when the component is first rendered
    this.handleForm()
  }
  
  handleForm(){
    this.typicode.getCatAndId(this.category, this.category_id)
    .subscribe( this.handleReturnedData() )
  }
  
  handleReturnedData(){
    return (received:any)=>{
      this.dataModel = received
    }
  }
}
