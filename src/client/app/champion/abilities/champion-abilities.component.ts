import { Component, Input } from '@angular/core';
import { Champion } from '../../models/champion';

/**
 * This class represents the Champion Abilities Component
 */
@Component({
  moduleId: module.id,
  selector: 'champion-abilities',
  templateUrl: 'champion-abilities.component.html',
  styleUrls: ['champion-abilities.component.css'],
  host: {'class': 'ui bottom attached tab segment'}
})
export class ChampionAbilitiesComponent {
  @Input() champion: Champion;

  constructor() {}
}
