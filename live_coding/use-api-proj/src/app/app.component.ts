import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'use-api-proj';
  // we need to revisit the 'any'
  photos:Array<any> = []
}
