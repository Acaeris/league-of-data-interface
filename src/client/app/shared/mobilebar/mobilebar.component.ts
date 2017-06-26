import { Component, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ui-mobilebar',
  templateUrl: 'mobilebar.component.html'
})
export class MobilebarComponent {
    @Input() pageTitle: string;

    constructor(private router: Router) { }

    switchChampion(event: EventEmitter<{}>) {
        this.router.navigate(['./champion', event.value]);
    }
}
