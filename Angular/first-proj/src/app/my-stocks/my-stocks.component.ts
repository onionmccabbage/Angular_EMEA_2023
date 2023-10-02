import { Component } from '@angular/core';

@Component({
  selector: 'app-my-stocks',
  templateUrl: './my-stocks.component.html',
  styleUrls: ['./my-stocks.component.css']
})
export class MyStocksComponent {
  // properties
  stocks = ['AAPL', 'AMAZN', 'C', 'FB', 'TSLA']
  selectedStock = 'C'
  qty=1
  price=1
  toggleFlag=false
  toggleCalc(){
    this.toggleFlag=!this.toggleFlag
  }
}
