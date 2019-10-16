import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients: Client[] = [{
    'id' : 1,
    'nom' : 'Wilda',
    'prenom' : 'Vasquez',
    'adresse' : '614 Miami Court, Lund, Louisiana, 9314',
    'email' : 'wildavasquez@kegular.com'
  },
  {
    'id': 2,
    'nom' : 'Augusta',
    'prenom' : 'Cruz',
    'adresse' : '971 Roosevelt Court, Outlook, American Samoa, 7083',
    'email' : 'augustacruz@kegular.com'
  },
  {
    'id' : 3,
    'nom' : 'Marcie',
    'prenom' : 'Mcintosh',
    'adresse' : '234 Stoddard Place, Brenton, Maryland, 4150',
    'email' : 'marciemcintosh@kegular.com'
  },
  {
    'id' : 4,
    'nom' : 'Pratt',
    'prenom' : 'Hood',
    'adresse' : '222 Wakeman Place, Rivera, Arizona, 2324',
    'email' : 'pratthood@kegular.com'
  },
  {
    'id' : 5,
    'nom' : 'Aurora',
    'prenom' : 'Robbins',
    'adresse' : '417 Winthrop Street, Gordon, Iowa, 1689',
    'email' : 'aurorarobbins@kegular.com'
  },
  {
    'id' : 6,
    'nom' : 'Patrica',
    'prenom' : 'Bush',
    'adresse' : '948 Applegate Court, Waikele, Virginia, 6823',
    'email' : 'patricabush@kegular.com'
  },
  {
    'id' : 7,
    'nom' : 'Diaz',
    'prenom' : 'Guerra',
    'adresse' : '512 Milford Street, Roosevelt, Federated States Of Micronesia, 6768',
    'email' : 'diazguerra@kegular.com'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
