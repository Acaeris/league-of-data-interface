import { Directive, ElementRef, Input, OnInit } from '@angular/core';
declare var $:JQueryStatic;

@Directive({ selector: '[suiRating]'})
export class SemanticRatingDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).rating('disable');
  }
}
