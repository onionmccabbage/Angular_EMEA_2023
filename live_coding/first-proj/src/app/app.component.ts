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
  stocks = ['AAPL', 'AMAZN', 'C', 'FB', 'TSLA']
  portfolio = [
    {'ticker':'AAPL', 'qty':10, 'price':100},
    {'ticker':'AMAZN', 'qty':20, 'price':200},
    {'ticker':'C', 'qty':30, 'price':300},
    {'ticker':'FB', 'qty':40, 'price':400},
    {'ticker':'TSLA', 'qty':50, 'price':500}
  ]

  // methods of this component
  handleStuff(e:any){ // typescript needs this
    // back-ticks let us interpolate JS values 
    console.log(`something happened ${e}`)
  }

  // there are several ways to write methods
  handleOtherStuff = function(){}
  anotherFn = ()=>{}
}
