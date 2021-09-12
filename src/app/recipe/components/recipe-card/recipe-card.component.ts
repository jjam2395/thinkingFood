import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, AfterViewInit {

  @Input() recipe!:Recipe;
  @Input() day!:string;
  @Input() extendedVersion!:boolean;

  constructor() { }
  @ViewChild('iframeVideo') iframeVideo!: ElementRef;
  @ViewChild('iframeFlowchart') iframeFlowchart!: ElementRef;
  

  ngOnInit(): void {
  
  }

  ngAfterViewInit() {
    if (this.extendedVersion){
      this.iframeVideo.nativeElement.setAttribute('src', this.recipe.videoRoute);
      this.iframeFlowchart.nativeElement.setAttribute('src', this.recipe.flowchartRoute);
    }
   }

}
