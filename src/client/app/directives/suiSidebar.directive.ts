import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '.ui.sidebar'})
export class SemanticSidebarDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit() { $(this.el.nativeElement).sidebar('attach events', '.toc.item'); }
}
