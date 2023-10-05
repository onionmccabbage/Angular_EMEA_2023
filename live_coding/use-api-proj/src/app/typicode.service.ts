import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// Angular provides Observable via RxJS
import { Observable } from 'rxjs' // this is reolved by the tool-chain

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
    // console.log(url)
    return this.http.get(url) // dry...
  }

  // here is a metod to retrieve both a category and an id
  getCatAndId(c='photos', n=1){ // sensible defaults
    const url = `https://jsonplaceholder.typicode.com/${c}/${n}`
    // its a good idea to use try-catch
    try{
      return this.http.get(url)
    }
    catch(err){
      // we would probably send the details to a back-end API for logging
      return new Observable()
    }
  }




}
