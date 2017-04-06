import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SummonerComponent } from './summoner.component';
import { SummonerRoutingModule } from './summoner-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SummonerService } from '../services/summoner/summoner.service';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { RankChartComponent } from '../shared/rank-chart/rank-chart.component';
import { BarChartComponent } from '../shared/bar-chart/bar-chart.component';

@NgModule({
  imports: [SummonerRoutingModule, SharedModule, ChartsModule],
  declarations: [
    SummonerComponent,
    CapitalizePipe,
    RankChartComponent,
    BarChartComponent
  ],
  exports: [SummonerComponent],
  providers: [SummonerService]
})
export class SummonerModule { }
