import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// FormsModule gives us NgModel [(ngModel)]
import { FormsModule } from '@angular/forms';
// HttpClientmodule gives us HttpClient (httpClient)
import { HttpClientModule } from '@angular/common/http';
import { SimpleFormComponent } from './simple-form/simple-form.component'

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
