import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output() teatime = new EventEmitter()
person = {'fn':'Timnit', 'ln':'Gebru'}
  doAgree(){
    // we can choose to emit a custom event
    this.teatime.emit(this.person)
  }
}
