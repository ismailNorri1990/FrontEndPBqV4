import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nouveauClient(client: NgForm): void {
    console.log(client.value);
  }

}
