import { Component, Input, HostBinding } from '@angular/core';
import { Champion } from '../../models/champion';

/**
 * This class represents the Champion Summary component
 */
@Component({
  moduleId: module.id,
  selector: 'champion-summary',
  templateUrl: 'champion-summary.component.html',
  styleUrls: ['champion-summary.component.css']
})
export class ChampionSummaryComponent {
  @Input() champion: Champion;
  @Input() active?: boolean;
  @HostBinding('class') cssClass: string;
  @HostBinding('class.active')
  get isActive() {
    return 'undefined' !== typeof this.active && !this.active;
  }

  levels: number[];

  constructor() {
    this.levels = Array(18).fill(0).map((x, i) => i + 1);
    this.cssClass = 'ui bottom attached tab segment';
  }
}
