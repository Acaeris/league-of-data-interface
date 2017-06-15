import { NgModule } from '@angular/core';
import { SummonerComponent } from './summoner.component';
import { SummonerRoutingModule } from './summoner-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SummonerService } from '../services/summoner/summoner.service';

@NgModule({
  imports: [SummonerRoutingModule, SharedModule],
  declarations: [
    SummonerComponent
  ],
  exports: [SummonerComponent],
  providers: [SummonerService]
})
export class SummonerModule { }
