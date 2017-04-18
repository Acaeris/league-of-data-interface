import { Component, ElementRef, Input, OnInit } from '@angular/core';

/**
 * This class represents a Spell icon component
 */
@Component({
  moduleId: module.id,
  selector: 'ui-spell-icon',
  templateUrl: 'spell-icon.component.html',
  styleUrls: ['spell-icon.component.css']
})
export class SpellIconComponent implements OnInit {
  @Input() key: string;
  @Input() name: string;
  @Input() type: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).addClass('ui image');
  }
}
