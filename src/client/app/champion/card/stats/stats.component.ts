import { Component, Input, HostBinding } from '@angular/core';
import { Stat } from '../../../models/stat';

/**
 * This class represents the Champion card stats component
 */
@Component({
  moduleId: module.id,
  selector: 'champion-card-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.css']
})
export class ChampionCardStatsComponent {
  @Input() playStats: Stat[];
  @HostBinding('class') cssClass = 'ui segment';
}
