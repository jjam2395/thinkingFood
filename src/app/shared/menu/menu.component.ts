import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  path:string="";
  constructor(private _location: Location, private router: Router) {

    router.events.subscribe((val) => {
      this.path=this.router.url.substring(0,this.router.url.length-1);
    });
  }
  
  ngOnInit(): void {
 
  }
 
  backClicked() {
    this._location.back();
  }
}
