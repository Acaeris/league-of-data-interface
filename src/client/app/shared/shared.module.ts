import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StatisticComponent } from './statistic/statistic.component';
import { SpellComponent } from './spell/spell.component';
import { SpellIconComponent } from './spell-icon/spell-icon.component';

import { SemanticDropdownDirective } from '../directives/semantic-dropdown.directive';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
      StatisticComponent,
      SpellComponent,
      SpellIconComponent,
      SemanticDropdownDirective
  ],
  exports: [
    StatisticComponent,
    SpellComponent,
    SpellIconComponent,
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
