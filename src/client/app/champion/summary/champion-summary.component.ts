import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Champion } from '../../models/champion';

/**
 * This class represents the Champion Summary component
 */
@Component({
  moduleId: module.id,
  selector: 'champion-summary',
  templateUrl: 'champion-summary.component.html',
  styleUrls: ['champion-summary.component.css']
})
export class ChampionSummaryComponent implements OnInit {
  @Input() champion: Champion;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).addClass('ui bottom attached tab segment');
  }
}
