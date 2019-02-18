import { Component, Input, HostBinding } from '@angular/core';
import { Champion } from '../../models/champion';

/**
 * This class represents the Champion card component
 */
@Component({
  moduleId: module.id,
  selector: 'champion-card',
  templateUrl: 'champion-card.component.html',
  styleUrls: ['champion-card.component.css']
})
export class ChampionCardComponent {
  @Input() champion: Champion;
  @Input() active ?: boolean;
  @HostBinding('class') cssClass = 'ui fluid card';
  @HostBinding('class.active')
  get isActive() {
    return 'undefined' !== typeof this.active && !this.active;
  }
}
