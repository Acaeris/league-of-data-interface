import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[suiDropdown]'})
export class SemanticDropdownDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit() { $(this.el.nativeElement).dropdown(); }
}
