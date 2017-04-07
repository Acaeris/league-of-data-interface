import { Component, ElementRef, Input, OnInit } from '@angular/core';
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

  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).addClass('ui fluid card');
  }
}
