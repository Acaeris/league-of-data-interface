import { Component, ElementRef, Input, OnInit } from '@angular/core';
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
export class ChampionAbilitiesComponent implements OnInit {
  @Input() champion: Champion;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).addClass('ui bottom attached tab segment');
  }
}
