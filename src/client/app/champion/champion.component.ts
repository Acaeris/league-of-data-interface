import { Component, EventEmitter, AfterViewChecked, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionService } from '../services/champion/champion.service';
import { Champion } from '../models/champion';
declare var $:JQueryStatic;

/**
 * This class represents the lazy loaded ChampionComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'champion-main',
  templateUrl: 'champion.component.html',
  styleUrls: ['champion.component.css']
})
export class ChampionComponent implements OnInit, AfterViewChecked {
  champion: Champion;
  errorMessage: string;
  id: number;
  version: string;
  background: string;

  /**
	 * Creates an instance of the ChampionComponent with the injected
	 * ChampionService
	 *
	 * @param {ChampionService} championService - The injected ChampionService
   * @param {ActivatedRoute} route - Router
	 */
  constructor(private championService: ChampionService, private route: ActivatedRoute) { }

  /**
   * Get the champion data
   */
  ngOnInit() {
    this.route.params.subscribe(
      params => this.id = params['id']
    );
    this.route.queryParams.subscribe(
      params => this.getChampion(this.id, params['v'])
    );
  }

  /**
   * Update the view after data change
   */
  ngAfterViewChecked() {
  }

  switchChampion(event: EventEmitter<{}>) {
    this.id = event.value;
    this.getChampion(event.value, this.version);
  }

  /**
   * Handles the championService observable
   * @param {number} id - ID of champion to fetch
   * @param {string} version - Version to fetch
   */
  getChampion(id: number, version: string) {
    this.championService.get(id, version)
      .subscribe(
      data => this.showChampion(data),
      error => this.errorMessage = <any>error
      );
  }

  showChampion(data: any) {
    this.champion = data;
    this.background = 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'
      + this.champion.imageName + '_0.jpg)';
  }
}
