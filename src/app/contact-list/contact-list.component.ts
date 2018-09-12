import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  // Variable array contacts
  private  contacts:  Array<object> = [];

  constructor( private apiService: APIService) { }

  ngOnInit() {

  }

  // Method to get data from contact service
  public getContacts () {
    this.apiService.getContacts().subscribe((data: Array<object>) => {
      this.contacts = data;
      console.log(data);

    });

  }

}
