import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChampionComponent } from './champion.component';
import { ChampionRoutingModule } from './champion-routing.module';
import { ChampionService } from '../services/champion/champion.service';
import { SemanticRatingDirective } from '../directives/suiRating.directive';

@NgModule({
  imports: [CommonModule, ChampionRoutingModule, SharedModule],
  declarations: [ChampionComponent, SemanticRatingDirective],
  exports: [ChampionComponent],
  providers: [ChampionService]
})
export class ChampionModule { }
