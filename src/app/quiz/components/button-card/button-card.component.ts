import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss']
})
export class ButtonCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title !: string;

  @Input() select !: boolean;
}
