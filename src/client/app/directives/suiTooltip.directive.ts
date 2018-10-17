import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[suiTooltip]'})
export class SemanticTooltipDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).popup();
  }
}
