import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Spell } from '../../models/spell';

/**
 * This class represents a Spell icon component
 */
@Component({
  moduleId: module.id,
  selector: 'ui-spell-icon',
  templateUrl: 'spell-icon.component.html',
  styleUrls: ['spell-icon.component.css'],
  host: {
    'data-position': "top left",
    'data-variation': "mini"
  }
})
export class SpellIconComponent implements OnInit {
  @Input() spell?: Spell;
  @Input() passive?: Spell;
  @Input() variation?: string;
  @HostBinding('attr.data-title') title: string;
  @HostBinding('attr.data-content') tooltip: string;
  @HostBinding('class') class: string;

  constructor() {}

  ngOnInit() {
    if ("undefined" != typeof this.spell) {
      this.title = this.spell.name || "";
      this.tooltip = this.spell.description || "";
    } else if ("undefined" != typeof this.passive) {
      this.title = this.passive.name || "";
      this.tooltip = this.passive.description || "";
    }
    this.class = "ui " + this.variation + " image";
  }
}
