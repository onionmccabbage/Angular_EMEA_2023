import { Component } from '@angular/core';

@Component({
  selector: 'app-my-stocks',
  templateUrl: './my-stocks.component.html',
  styleUrls: ['./my-stocks.component.css']
})
export class MyStocksComponent {
  // properties of this component
  stocks = ['AAPL', 'AMAZN', 'C', 'FB', 'TSLA']
}
