import { Component } from '@angular/core';
import { StatusObj } from './models/statusObj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Choose a category and a number'
  statusObj: StatusObj = new StatusObj('waiting...')
  // set sensible defaults for form values
  category: string = 'people'
  num: number = 2

  // data model for the <select> drop-down
  dd = [
    { v: "people" },
    { v: "planets" },
    { v: "species" },
    { v: "vehicles" },
    { v: "starships" }
  ]

  // store an array of every pair of search  parameters
  searchHistory: Array<any> = []
  showHistory:boolean = false

  handleSwapiEvent(evt:any) {
    // set the status object based on received data from the child
    this.statusObj = evt
    // also store the paramters in our history array
    this.searchHistory.push({category:this.category, num:this.num, ts:this.statusObj.timestamp})
  }

}
