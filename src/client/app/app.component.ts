import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  host: {'class' : 'pusher'}
})
export class AppComponent {
  pageTitle: string = "League of Data";

  constructor() {
    console.log('Environment config', Config);
  }

  onComponentReady(title: string) {
    this.pageTitle = title;
  }
}
