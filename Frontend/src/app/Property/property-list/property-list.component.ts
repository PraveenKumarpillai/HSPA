import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties:Array<any>=[
    {
    "Id":1,
    "Type":"House",
    "Price":12000,
    "Name":"Birla House"
    },
    {
    "Id":2,
    "Type":"House",
    "Price":20000,
    "Name":"Praveen House"
    },
    {
    "Id":3,
    "Type":"House",
    "Price":12000,
    "Name":"Janu House"
    },
    {
    "Id":4,
    "Type":"House",
    "Price":12000,
    "Name":"Appa House"
    },
    {
    "Id":5,
    "Type":"House",
    "Price":12000,
    "Name":"Birla House"
    },
    {
    "Id":6,
    "Type":"House",
    "Price":12000,
    "Name":"Kutta House"
    }]
  constructor() { }

  ngOnInit() {
  }

}
