import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChampionService } from '../services/champion/champion.service';
import { Champion } from '../models/champion';

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
  @Output() onComponentReady = new EventEmitter<string>();
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
    this.onComponentReady.emit("Champion Details");
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
