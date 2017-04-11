import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StatisticComponent } from './statistic/statistic.component';
import { SpellComponent } from './spell/spell.component';

import { SemanticDropdownDirective } from '../directives/semantic-dropdown.directive';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
      StatisticComponent,
      SpellComponent,
      SemanticDropdownDirective
  ],
  exports: [
    StatisticComponent,
    SpellComponent,
    SemanticDropdownDirective,
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
