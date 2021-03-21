import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../types';
import { ImpressionsService } from './../impressions.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  @Input() client: Client;

  constructor(private service: ImpressionsService) { }


}
