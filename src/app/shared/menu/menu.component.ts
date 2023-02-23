import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-list',
        items: [
          {
            label: 'Texts and Dates',
            icon: 'pi pi-align-left',
            routerLink: [''],
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'Uncommun',
            icon: 'pi pi-globe',
            routerLink: 'uncommun',
          },
        ],
      },
      {
        label: 'Personalized Pipes',
        icon: 'pi pi-user',
        routerLink: 'order',
      },
    ];
  }
}
