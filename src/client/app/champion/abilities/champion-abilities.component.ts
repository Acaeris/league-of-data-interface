import { Component, Input, HostBinding } from '@angular/core';
import { Champion } from '../../models/champion';

/**
 * This class represents the Champion Abilities Component
 */
@Component({
  moduleId: module.id,
  selector: 'champion-abilities',
  templateUrl: 'champion-abilities.component.html',
  styleUrls: ['champion-abilities.component.css']
})
export class ChampionAbilitiesComponent {
  @Input() champion: Champion;
  @Input() active?: boolean;
  @HostBinding('class') cssClass = 'ui bottom attached tab segment';
  @HostBinding('class.active')
  get isActive() {
    return 'undefined' !== typeof this.active && !this.active;
  }
}
