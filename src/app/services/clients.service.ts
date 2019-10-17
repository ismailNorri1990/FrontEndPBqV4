import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private httpClient: HttpClient
  ) {
     }

     getAllClients() {
    return this.httpClient.get<Client[]>('http://localhost:3000/Client');
  }

  public effacerClient(client) {
       return this.httpClient.delete<Client>("http://localhost:3000/Client" + "/" + client.id);
  }

  public creerClient(client) {
    return this.httpClient.post<Client>("http://localhost:3000/Client", client);
  }
}
