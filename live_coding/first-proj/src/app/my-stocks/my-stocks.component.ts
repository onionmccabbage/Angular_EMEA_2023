import { Component, Input } from "@angular/core"

@Component({
  selector: 'app-my-stocks',
  templateUrl: './my-stocks.component.html',
  styleUrls: ['./my-stocks.component.css']
})
export class MyStocksComponent {
  // properties of this component
  // @Input() stocks:string[] = [] // sensible default
  @Input() stocks:Array<string> = [] // sensible default
  @Input() whichCat = '' // Typescript infers this is a string
}
