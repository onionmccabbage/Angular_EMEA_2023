import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolio = [
    {'ticker':'AAPL', 'qty':10, 'price':100},
    {'ticker':'AMAZN', 'qty':20, 'price':200},
    {'ticker':'C', 'qty':30, 'price':300},
    {'ticker':'Citi', 'qty':30, 'price':300},
    {'ticker':'FB', 'qty':40, 'price':400},
    {'ticker':'TSLA', 'qty':50, 'price':500}
  ]
  // with thanks to Jaszon for code solution
  get portfolioKeys() {
    return Object.keys(this.portfolio[0]);
  } 
}

