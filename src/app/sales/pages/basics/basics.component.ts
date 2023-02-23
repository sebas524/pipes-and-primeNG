import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLower: string = 'sebastian';
  nameUpper: string = 'SEBASTIAN';
  nameTitle: string = 'sebAstiAn VeLeZ';

  date: Date = new Date();
}
