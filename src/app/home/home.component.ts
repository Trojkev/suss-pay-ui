import { Component, OnInit } from '@angular/core';
import { Client } from '../profile/Model';
import { SharedService } from '../shared/config/shared.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  focus: any;
  focus1: any;
  client: Client;
  
  categories = [
    {name: 'Banking'},
    {name: 'Betting'},
    {name: 'Insurance'}
  ];

  constructor(
    private sharedService: SharedService
  ) {
    this.client = new Client();
   }

  ngOnInit() {
    this.sharedService.setPageTitle('Home');
  }
}
