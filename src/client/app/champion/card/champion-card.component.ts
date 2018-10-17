import { Component, Input } from '@angular/core';
import { Champion } from '../../models/champion';

/**
 * This class represents the Champion card component
 */
@Component({
  moduleId: module.id,
  selector: 'champion-card',
  templateUrl: 'champion-card.component.html',
  styleUrls: ['champion-card.component.css'],
  host: {'class': 'ui fluid card'}
})
export class ChampionCardComponent {
  @Input() champion: Champion;

  constructor() {}
}
