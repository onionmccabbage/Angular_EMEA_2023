import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  // a better solution would be to have a 'Detail' class
  @Input() detail = {'ticker':'', 'qty':0, 'price':0}
}
