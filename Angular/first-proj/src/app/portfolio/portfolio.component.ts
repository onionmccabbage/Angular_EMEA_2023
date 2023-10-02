import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // properties
  selectedItem={}
  // Grab data model from parent
  @Input() portfolio:any
  // Every @Output must be an EventEmitter
  @Output() item = new EventEmitter()
  // methods
  handleItemSelection(e:any){
    this.selectedItem = e
    // emit the event with some data
    this.item.emit(this.selectedItem)
  }
}
