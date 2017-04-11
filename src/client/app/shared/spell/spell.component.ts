import { Component, ElementRef, Input, OnInit } from '@angular/core';

/**
 * This class represents a Spell icon component
 */
@Component({
  moduleId: module.id,
  selector: 'ui-spell',
  templateUrl: 'spell.component.html',
  styleUrls: ['spell.component.css']
})
export class SpellComponent implements OnInit {
  @Input() key: string;
  @Input() name: string;
  @Input() type: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).addClass('ui image');
  }
}
