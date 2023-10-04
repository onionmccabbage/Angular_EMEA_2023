import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  // private is a Typescript thing
  constructor(private http:HttpClient) {
    // we now have a local instance of the HttpClient class called http
  }
  // here is a method to get the photo data from the API
  getAllPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
