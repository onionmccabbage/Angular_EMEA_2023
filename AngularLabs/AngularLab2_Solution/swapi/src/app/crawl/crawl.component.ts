import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crawl',
  templateUrl: './crawl.component.html',
  styleUrls: ['./crawl.component.css']
})
export class CrawlComponent implements OnInit {

  @Input() crawlTitle = ''
  @Input() crawlEpisode = ''
  @Input() crawlText = ''

  constructor() { }

  ngOnInit() {
  }

}
