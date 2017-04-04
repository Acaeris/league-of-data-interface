import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SummonerComponent } from './summoner.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'summoner', component: SummonerComponent }
        ])
    ],
    exports: [RouterModule]
})
export class SummonerRoutingModule { }
