import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  // Deklarasi variabel API
  API_URL  =  'http://localhost:8000';

  constructor( private httpClient: HttpClient ) { }

  // Method get data contact
  getContacts() {
    return  this.httpClient.get(`http://localhost:8000/contacts`);
}

createContact(contact) {
  return  this.httpClient.post('http://localhost:8000/contacts', contact);
}

}
