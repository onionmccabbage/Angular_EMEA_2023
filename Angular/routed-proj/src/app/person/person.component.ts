import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  // we need some properties
  name:string = '' // this will be used by our routing
  age:number = 42
  // use the constructor to instantiate useful stuff
  constructor( private route:ActivatedRoute ){
    // inside the constructor we have access to the activated route and its params
    route.params.subscribe(
      (params)=>{
        // square-bracket syntax since we cannot know hte structure
        this.name = params['name']
        this.age = params['age']
      }
    )
  }

}
