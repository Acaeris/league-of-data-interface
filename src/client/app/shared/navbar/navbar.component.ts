import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ui-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    constructor(private router: Router) { }

    switchChampion(event: EventEmitter<{}>) {
        this.router.navigate(['./champion', event.value]);
    }
}
