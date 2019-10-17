import { Component, OnInit } from '@angular/core';
import { ConseillerClient } from '../model/conseiller-client.model';

@Component({
  selector: 'app-list-conseillers',
  templateUrl: './list-conseillers.component.html',
  styleUrls: ['./list-conseillers.component.css']
})
export class ListConseillersComponent implements OnInit {

  conseillers: ConseillerClient[] = [{
    'id' : 1,
    'nom' : 'amin',
    'prenom' : 'bahya',
    'login' : 'amin@gmail.com',
    'password' : '',
  },
  {
    'id' : 2,
    'nom' : 'javila',
    'prenom' : 'brara',
    'login' : 'javila@gmail.com',
    'password' : '',
  },
  {
    'id' : 3,
    'nom' : 'ayoub',
    'prenom' : 'bya',
    'login' : 'ayoub@gmail.com',
    'password' : '',
  },
  {
    'id' : 4,
    'nom' : 'achraf',
    'prenom' : 'bya',
    'login' : 'achraf@gmail.com',
    'password' : '',
  },
  {
    'id' : 7,
    'nom' : 'ouidad',
    'prenom' : 'ya',
    'login' : 'ouidad@gmail.com',
    'password' : '',
  },
  {
    'id' : 1,
    'nom' : 'anas',
    'prenom' : 'ugu',
    'login' : 'anas@gmail.com',
    'password' : '',
  },
  {
    'id' : 7,
    'nom' : 'Diaz',
    'prenom' : 'Guerra',
    'login' : 'Diaz@gmail.com',
    'password' : '',
  }
];


  constructor() { }

  ngOnInit() {
  }

}
