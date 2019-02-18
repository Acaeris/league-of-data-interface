import { Component, HostBinding } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ui-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  @HostBinding('class') cssClass:string = 'ui fixed desktop menu';
}
