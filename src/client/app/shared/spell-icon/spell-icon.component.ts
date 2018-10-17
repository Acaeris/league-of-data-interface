import { Component, Input } from '@angular/core';

/**
 * This class represents a Spell icon component
 */
@Component({
  moduleId: module.id,
  selector: 'ui-spell-icon',
  templateUrl: 'spell-icon.component.html',
  styleUrls: ['spell-icon.component.css'],
  host: {'class': 'ui image'}
})
export class SpellIconComponent {
  @Input() key: string;
  @Input() name: string;
  @Input() type: string;
  @Input() class: string;

  constructor() {}
}
