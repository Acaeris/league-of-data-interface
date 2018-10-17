import { Component, Input } from '@angular/core';
import { Champion } from '../../models/champion';

/**
 * This class represents the Champion Details component
 */
@Component({
  moduleId: module.id,
  selector: 'champion-details',
  templateUrl: 'champion-details.component.html',
  styleUrls: ['champion-details.component.css'],
  host: {'class': 'ui bottom attached tab segment'}
})
export class ChampionDetailsComponent {
  @Input() champion: Champion;

  constructor() {}
}
