import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';

import { StatisticComponent } from './statistic/statistic.component';
import { SpellComponent } from './spell/spell.component';
import { SpellIconComponent } from './spell-icon/spell-icon.component';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { StripSpacesPipe } from '../pipes/strip-spaces.pipe';

import { SuiSelectorComponent } from './selector/sui-selector.component';
import { SuiRatingComponent } from './rating/sui-rating.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, NgSemanticModule],
  declarations: [
      StatisticComponent,
      SpellComponent,
      SpellIconComponent,
      SuiSelectorComponent,
      SuiRatingComponent,
      CapitalizePipe,
      StripSpacesPipe
  ],
  exports: [
    StatisticComponent,
    SpellComponent,
    SpellIconComponent,
    SuiSelectorComponent,
    SuiRatingComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    NgSemanticModule,
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
