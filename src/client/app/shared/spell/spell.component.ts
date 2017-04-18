import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Spell } from '../../models/spell';

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
  @Input() spell: Spell;

  level: number = 1;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  update(level: number) {
    this.level = level;
    console.log(this.level);
  }
}
