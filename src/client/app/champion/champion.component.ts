import { Component, EventEmitter, AfterViewChecked, OnInit } from '@angular/core';
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
  name: string;

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
      params => this.getChampion(params['name'])
    )
  }

  /**
   * Update the view after data change
   */
  ngAfterViewChecked() {
    $('.ui.rating').each(function (i: number, e) {
      console.log(e);
      $(e).rating('set rating', $(e).attr("data-rating"))
    });
  }

  /**
   * Handles the championService observable
   * @param {string} name - Name of champion to fetch
   */
  getChampion(name: string) {
    this.championService.get(name)
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
