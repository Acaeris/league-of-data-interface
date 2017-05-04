import { Component, EventEmitter, AfterViewChecked, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class ChampionComponent implements OnInit, AfterViewChecked {
  champion: Champion;
	errorMessage: string;
  id: number;

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
      params => this.getChampion(params['id'])
    )
  }

  /**
   * Update the view after data change
   */
  ngAfterViewChecked() {
    $('.ui.rating').each(function (i: number, e) {
      $(e).rating('set rating', $(e).attr("data-rating"))
    });
    $('.ui.tabular.menu .item').each(function (i: number, e) {
      $(e).tab();
    });
  }

  /**
   * Handles the championService observable
   * @param {number} id - Name of champion to fetch
   */
  getChampion(id: number) {
    this.championService.get(id)
      .subscribe(
        data => this.showChampion(data),
        error => this.errorMessage = <any>error
      );
  }

  showChampion(data: any) {
    this.champion = data;
    $('.champion').css('background-image', 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + this.champion.name + '_0.jpg)');
  }
}
