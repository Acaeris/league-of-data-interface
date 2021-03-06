import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChampionComponent } from './champion.component';
import { ChampionCardComponent } from './card/champion-card.component';
import { ChampionSummaryComponent } from './summary/champion-summary.component';
import { ChampionAbilitiesComponent } from './abilities/champion-abilities.component';
import { ChampionRoutingModule } from './champion-routing.module';
import { ChampionService } from '../services/champion/champion.service';
import { SemanticRatingDirective } from '../directives/suiRating.directive';

@NgModule({
  imports: [CommonModule, ChampionRoutingModule, SharedModule],
  declarations: [
    ChampionComponent,
    ChampionCardComponent,
    ChampionSummaryComponent,
    ChampionAbilitiesComponent,
    SemanticRatingDirective
  ],
  exports: [
    ChampionComponent,
    ChampionCardComponent,
    ChampionSummaryComponent,
    ChampionAbilitiesComponent
  ],
  providers: [ChampionService]
})
export class ChampionModule { }
