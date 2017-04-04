import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionComponent } from './champion.component';
import { ChampionRoutingModule } from './champion-routing.module';
import { ChampionService } from '../services/champion/champion.service';

@NgModule({
  imports: [CommonModule, ChampionRoutingModule],
  declarations: [ChampionComponent],
  exports: [ChampionComponent],
  providers: [ChampionService]
})
export class ChampionModule { }
