import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  items: any[] = [];

  activeItem: MenuItem | undefined  ;

  ngOnInit(): void {
    this.items = [
      {label: 'home', icon: 'pi pi-fw pi-home', routerLink: ['/']},
      {label: 'Usuario', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/usuario']},
    ];

    this.activeItem = this.items[0];
  }

}
