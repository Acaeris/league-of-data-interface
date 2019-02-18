import { Component, Input, HostBinding } from '@angular/core';
import { Stat } from '../../models/stat';

/**
 * This class represents the Statistic component
 */
@Component({
  moduleId: module.id,
  selector: 'ui-statistic',
  templateUrl: 'statistic.component.html',
  styleUrls: ['statistic.component.css']
})
export class StatisticComponent {
  @Input() stat: Stat;
  @HostBinding('class') cssClass = 'statistic';
}
