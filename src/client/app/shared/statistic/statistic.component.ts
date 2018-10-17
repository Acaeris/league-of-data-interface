import { Component, Input } from '@angular/core';
import { Stat } from  '../../models/stat';

/**
 * This class represents the Statistic component
 */
@Component({
  moduleId: module.id,
  selector: 'ui-statistic',
  templateUrl: 'statistic.component.html',
  styleUrls: ['statistic.component.css'],
  host: {'class': 'statistic'}
})
export class StatisticComponent {
  @Input() stat: Stat;

  constructor() {}
}
