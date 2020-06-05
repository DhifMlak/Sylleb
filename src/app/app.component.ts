import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Decathlon';
  clients: number;
  clientsForm = new FormGroup({
    time: new FormControl(20),
    initialClients: new FormControl(10),
    inComingClients: new FormControl(2),
    outGoingClients: new FormControl(1),
    inComingRatio: new FormControl(1),
    outGoingRatio: new FormControl(1.5),

  });

  getClientsNumber() {
    this.clients = ((this.clientsForm.value.time * this.clientsForm.value.inComingClients) / this.clientsForm.value.inComingRatio)
      - ((this.clientsForm.value.time * this.clientsForm.value.outGoingClients) / this.clientsForm.value.outGoingRatio)
      + ((this.clientsForm.value.initialClients / this.clientsForm.value.outGoingRatio));
  }


}
