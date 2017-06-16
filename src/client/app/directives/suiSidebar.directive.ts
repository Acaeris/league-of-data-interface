import { Directive, ElementRef, Input, OnInit } from '@angular/core';
declare var $:JQueryStatic;

@Directive({ selector: '[suiSidebar]'})
export class SemanticSidebarDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit() { $(this.el.nativeElement).sidebar('attach events', '.toc.item'); }
}
