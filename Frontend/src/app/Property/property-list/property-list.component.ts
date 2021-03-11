import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:any;

  constructor(private http:Http) { }

  ngOnInit():void {
    this.http.get('data/properties.json').subscribe(
      data=>{
          this.properties=data;
          console.log(data);
          console.log("testing");
      }
      );}

}
