import { Component } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ui-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  host: {'class': 'ui fixed desktop menu'}
})
export class NavbarComponent { }
