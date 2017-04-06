import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Stat } from  '../../models/stat';

/**
 * This class represents the Statistic component
 */
@Component({
  moduleId: module.id,
  selector: '[ui-statistic]',
  templateUrl: 'statistic.component.html',
  styleUrls: ['statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @Input() stat: Stat;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).addClass('statistic');
    console.log(this.stat);
  }
}
