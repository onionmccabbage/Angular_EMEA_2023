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
    // this will return an Observable
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  // here is a method to retrieve ONE photo (based on ID)
  getOnePhoto(n=42){ // n wil be the id (sensible default)
    // Represent the state of our request (REST)
    const url = `https://jsonplaceholder.typicode.com/photos/${n}`
    return this.http.get(url)
  }
}
