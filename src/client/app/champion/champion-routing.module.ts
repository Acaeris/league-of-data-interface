import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChampionComponent } from './champion.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'champion/:id', component: ChampionComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ChampionRoutingModule { }
