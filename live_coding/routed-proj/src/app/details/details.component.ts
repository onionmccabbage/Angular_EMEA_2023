import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  name = ''
  age = 0
  constructor(private route: ActivatedRoute) {
    // we need to subscribe to the URL parameters
    route.params.subscribe(
      (params:any) => {
        this.name = params['name']
        this.age  = params['age']
       }
    )
  }
}
