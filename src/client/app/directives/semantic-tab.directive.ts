import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[ui-tab]'})
export class SemanticTabDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() { $(this.el.nativeElement).tab(); }
}
