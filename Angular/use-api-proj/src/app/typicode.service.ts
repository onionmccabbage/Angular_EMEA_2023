import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Angular helpfully already downloaded rxjs for us as a node_module (see package.json)
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Angular will ensure there is only ever ONE instance of our service - it will be a singleton
export class TypicodeService {
  // we ALWAYS declare the HttpClient in the constructor
  // private is part of Typescript
  constructor(private http: HttpClient) { }
  // we can write the methods of our service here
  apiUrl = `https://jsonplaceholder.typicode.com`
  
  getAllPhotos(){
      // every Angular service should return an Observable
      // remember every HTTP 'get' call is Anynchronous
      try {
        return this.http.get(`${this.apiUrl}/photos`) // Angular wll make sure this is an Observable
      }
      catch (err) {
        return new Observable()
      }
  }    

  getCatAndId(cat: string, cat_id: number) {
    if (typeof (cat) == 'string' && typeof (cat_id) == 'number') {
      const urlCatId = `${this.apiUrl}/${cat}/${cat_id}`
      // every Angular service should return an Observable
      // remember every HTTP 'get' call is Anynchronous
      try {
        return this.http.get(urlCatId) // Angular wll make sure this is an Observable
      }
      catch (err) {
        return new Observable()
      }
    } else {
      return new Observable() // we must return something
    }
  }
}
