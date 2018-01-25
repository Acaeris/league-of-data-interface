import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SelectorItem } from '../../models/selector-item';

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

    switchChampion(event: SelectorItem) {
        this.router.navigate(['./champion', event.value]);
    }

    switchSummoner(event: SelectorItem) {
        this.router.navigate(['./summoner', event.value]);
    }
}
