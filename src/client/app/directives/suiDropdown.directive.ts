import { Directive, ElementRef, Input, OnInit } from '@angular/core';
declare var $:JQueryStatic;

@Directive({ selector: '[suiDropdown]'})
export class SemanticDropdownDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit() { $(this.el.nativeElement).dropdown(); }
}
