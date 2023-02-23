import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commonss',
  templateUrl: './not-commonss.component.html',
  styles: [],
})
export class NotCommonssComponent {
  //i18nselect

  name: string = 'susana';
  genre: string = 'feminine';
  invitationMap = {
    masculine: 'invitarlo',
    feminine: 'invitarla',
  };

  //i18nplural
  clients: string[] = ['maria', 'jessica', 'josh', 'kimberly'];
  clientsMap = {
    '=0': 'no clients waiting...',
    '=1': '1 client waiting...',
    '=2': '2 clients waiting...',
    other: '# clients waiting...',
  };

  changeClient() {
    this.name = 'sebastian';
    this.genre = 'masculine';
  }

  deleteClient() {
    this.clients.shift();
  }

  //key-value pipe:
  person = {
    name: 'sebastian',
    age: 28,
    address: 'berlin',
  };

  //async pipe:
  myObservable = interval(1000);
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('end of promise! (we have the data!)');
    }, 3500);
  });
}
