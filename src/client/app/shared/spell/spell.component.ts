import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Spell } from '../../models/spell';
import { SpellVariable } from '../../models/spell-variable';

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

  level: number = 0;
  tooltip: string;
  ranks: number[];

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.updateTooltip();
    this.ranks = Array(this.spell.maxrank).fill(0).reduce(arr=>{ arr.push(arr.length + 1); return arr },[]);
    console.log(this.ranks);
  }

  update(level: number) {
    this.level = level - 1;
    this.updateTooltip();
  }

  updateTooltip() {
    this.tooltip = this.spell.tooltip;
    for (var i: number = 1; i <= 10; i++) {
      var re = new RegExp("{{ e" + i + " }}", "g");
      this.tooltip = this.tooltip.replace(re, this.spell.effect[i][this.level].toString());
    }
    for (var i: number = 0; i < this.spell.vars.length; i++) {
      var re = new RegExp("{{ " + this.spell.vars[i].key + " }}", "g");
      this.tooltip = this.tooltip.replace(re, this.spell.vars[i].coeff[this.level] + " * " + this.spell.vars[i].link);
    }
  }
}
