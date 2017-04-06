import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StatisticComponent } from '../shared/statistic/statistic.component';

import { SemanticDropdownDirective } from '../directives/semantic-dropdown.directive';
import { SemanticTabDirective } from '../directives/semantic-tab.directive';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
      StatisticComponent,
      SemanticDropdownDirective,
      SemanticTabDirective
  ],
  exports: [
    StatisticComponent,
    SemanticDropdownDirective,
    SemanticTabDirective,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
