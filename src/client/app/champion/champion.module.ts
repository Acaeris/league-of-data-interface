import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChampionComponent } from './champion.component';
import { ChampionCardComponent } from './card/champion-card.component';
import { ChampionSummaryComponent } from './summary/champion-summary.component';
import { ChampionAbilitiesComponent } from './abilities/champion-abilities.component';
import { ChampionDetailsComponent } from './details/champion-details.component';
import { ChampionRoutingModule } from './champion-routing.module';
import { ChampionService } from '../services/champion/champion.service';
import { SemanticRatingDirective } from '../directives/suiRating.directive';
import { ChampionCardStatsComponent } from './card/stats/stats.component';
import { RecommendedSkillsComponent } from './summary/recommended-skills/recommended-skills.component';

@NgModule({
  imports: [CommonModule, ChampionRoutingModule, SharedModule],
  declarations: [
    ChampionComponent,
    ChampionCardComponent,
    ChampionCardStatsComponent,
    ChampionSummaryComponent,
    RecommendedSkillsComponent,
    ChampionAbilitiesComponent,
    ChampionDetailsComponent,
    SemanticRatingDirective
  ],
  exports: [
    ChampionComponent,
    ChampionCardComponent,
    ChampionCardStatsComponent,
    ChampionSummaryComponent,
    RecommendedSkillsComponent,
    ChampionAbilitiesComponent,
    ChampionDetailsComponent
  ],
  providers: [ChampionService]
})
export class ChampionModule { }
