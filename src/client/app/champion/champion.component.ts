import { Component, EventEmitter, OnInit } from '@angular/core';
import { ChampionService } from '../services/champion/champion.service';
import { Champion } from '../models/champion';
import { StatisticComponent } from '../shared/statistic/statistic.component';

/**
 * This class represents the lazy loaded ChampionComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'champion-main',
  templateUrl: 'champion.component.html',
  styleUrls: ['champion.component.css']
})
export class ChampionComponent implements OnInit {
  champion: Champion;
	errorMessage: string;

  /**
	 * Creates an instance of the ChampionComponent with the injected
	 * ChampionService
	 *
	 * @param {ChampionService} championService - The injected ChampionService
	 */
	constructor(public championService: ChampionService) { }

  /**
   * Get the champion data
   */
  ngOnInit() {
    this.getChampion();
  }

  /**
   * Handles the championService observable
   */
  getChampion() {
    this.championService.get()
      .subscribe(
        data => this.champion = data,
        error => this.errorMessage = <any>error
      );
  }
}
