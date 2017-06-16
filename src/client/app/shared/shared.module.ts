import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StatisticComponent } from './statistic/statistic.component';
import { SpellComponent } from './spell/spell.component';
import { SpellIconComponent } from './spell-icon/spell-icon.component';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { StripSpacesPipe } from '../pipes/strip-spaces.pipe';

import { SemanticDropdownDirective } from '../directives/suiDropdown.directive';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
      StatisticComponent,
      SpellComponent,
      SpellIconComponent,
      SemanticDropdownDirective,
      CapitalizePipe,
      StripSpacesPipe
  ],
  exports: [
    StatisticComponent,
    SpellComponent,
    SpellIconComponent,
    SemanticDropdownDirective,
    CommonModule,
    FormsModule,
    RouterModule,
    CapitalizePipe,
    StripSpacesPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
