import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-check',
  templateUrl: './button-check.component.html',
  styleUrls: ['./button-check.component.scss']
})
export class ButtonCheckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title !: string;
}
