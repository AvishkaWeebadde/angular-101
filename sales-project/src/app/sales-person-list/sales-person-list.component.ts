import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.scss']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Avishka", "Weebadde", "avishka@cg.com", 500),
    new SalesPerson("Senith", "Weebadde", "senith@gmail.com", 1000),
    new SalesPerson("Sachin", "Kavindu", "sKavindu@gmail.com", 10281995),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
