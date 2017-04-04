import { Component, Input } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-mobilebar',
  templateUrl: 'mobilebar.component.html',
  styleUrls: ['mobilebar.component.css']
})
export class MobilebarComponent {
  @Input() pageTitle;
}
