import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SummonerService } from '../services/summoner/summoner.service';
import { Summoner } from '../models/summoner';
import { Tiers } from '../models/tiers.enum';

/**
 * This class represents the lazy loaded SummonerComponent
 */
@Component({
	moduleId: module.id,
	selector: 'summoner-main',
	templateUrl: 'summoner.component.html',
	styleUrls: ['summoner.component.css']
})
export class SummonerComponent implements OnInit {
	@Output() onComponentReady = new EventEmitter<string>();
	errorMessage: string;
	summoner: Summoner;
	region: string = 'EUW';
	Tiers: typeof Tiers = Tiers;

	/**
	 * Creates an instance of the SummonerComponent with the injected
	 * SummonerService
	 *
	 * @param {SummonerService} summonerService - The injected SummonerService
	 */
	constructor(public summonerService: SummonerService) { }

	/**
	 * Get the summoner data
	 */
	ngOnInit() {
    this.onComponentReady.emit('Summoner Details');
		this.getSummoner();
	}

	/**
	 * Handles the summonerService observable
	 */
	getSummoner() {
		this.summonerService.get()
			.subscribe(
			data => this.summoner = data,
			error => this.errorMessage = <any>error
			);
	}
}
