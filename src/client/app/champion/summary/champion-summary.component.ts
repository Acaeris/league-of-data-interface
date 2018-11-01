import { Component, Input } from '@angular/core';
import { Champion } from '../../models/champion';

/**
 * This class represents the Champion Summary component
 */
@Component({
  moduleId: module.id,
  selector: 'champion-summary',
  templateUrl: 'champion-summary.component.html',
  styleUrls: ['champion-summary.component.css'],
  host: {'class': 'ui bottom attached tab segment'}
})
export class ChampionSummaryComponent {
  @Input() champion: Champion;

  levels: number[];

  constructor() {
    this.levels = Array(18).fill().map((x,i)=>i + 1);
  }
}
