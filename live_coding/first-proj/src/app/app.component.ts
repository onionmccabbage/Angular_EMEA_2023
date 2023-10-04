import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties of this component
  title = 'Coffee Break';
  drink = 'Latte';
  i = 'https://placekitten.com/120/64';
  a = 'random kitten';
  t = 'now thats clever';
  catName = 'Mildred'
  


  // methods of this component
  handleStuff(e:any){ // typescript needs this
    // back-ticks let us interpolate JS values 
    console.log(`something happened ${e}`)
  }

  // there are several ways to write methods
  handleOtherStuff = function(){}
  anotherFn = ()=>{}
}
