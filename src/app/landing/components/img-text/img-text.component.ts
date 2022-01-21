import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-text',
  templateUrl: './img-text.component.html',
  styleUrls: ['./img-text.component.scss']
})
export class ImgTextComponent implements OnInit {

  @Input() mobileImage:string="";
  @Input() desktopImage:string="";
  @Input() title:string="";
  @Input() text:string="";

  constructor() { }

  ngOnInit(): void {

  }

}
