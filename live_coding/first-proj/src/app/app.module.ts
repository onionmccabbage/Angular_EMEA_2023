import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MyStocksComponent } from './my-stocks/my-stocks.component';
import { DetailComponent } from './detail/detail.component';
import { FootComponent } from './foot/foot.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MyStocksComponent,
    DetailComponent,
    FootComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
