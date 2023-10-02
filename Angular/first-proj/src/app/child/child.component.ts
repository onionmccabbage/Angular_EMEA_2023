import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // properties for this component
  person = {'fn':'Timnit', 'sn':'Gebru'}
  // all Outputs are ALWAYS EventEmitter instances
  @Output() evtAgree = new EventEmitter()
  // methods for this component (a method is simpky a function in a class)
  doAgree(){
    // we  are going to pass a custom event to the parent
    this.evtAgree.emit(this.person)
  }
}
