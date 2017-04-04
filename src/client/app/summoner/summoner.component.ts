import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SummonerService } from '../services/summoner/summoner.service';
import { Summoner } from '../models/summoner';
import { Tiers } from '../models/tiers.enum';

/**
 * This class represents the lazy loaded SummonerComponent
 */
@Component({
	moduleId: module.id,
	selector: 'sd-summoner',
	templateUrl: 'summoner.component.html',
	styleUrls: ['summoner.component.css']
})
export class SummonerComponent implements OnInit {
	@Output() onComponentReady = new EventEmitter<string>();
	private chartData: Array<any>;
	errorMessage: string;
	summoner: Summoner;
	region: string = "EUW";
	Tiers: typeof Tiers = Tiers;
	lineChartData: Array<any> = [
		{
			data: [74, 100, 150, 144, 125, 80],
			tier: ['B5', 'B5', 'B4', 'B4', 'B4', 'B5'],
			lp: [74, 100, 50, 44, 25, 80],
			label: 'Ranked'
		},
		{ data: [54, 55, 198, 168, 281, 166], label: 'ARAM' }
	];
	lineChartLabels: Array<string> = ['12/30', '01/06', '01/13', '01/20', '01/27', '02/03'];
	lineChartOptions: any = {
		responsive: true,
		tooltips: {
			callbacks: {
				label: function(tooltipItem: any, data: any) {
					return data.datasets[tooltipItem.datasetIndex].tier[tooltipItem.index]
						+ " : " + data.datasets[tooltipItem.datasetIndex].lp[tooltipItem.index] + " LP"; //[tooltipItem.datasetIndex].[tootipItem.index]
				}
			}
		}
	};
	lineChartColors: Array<any> = [
		{
			backgroundColor: 'rgba(0, 120, 240, 0.4)',
			borderColor: 'rgba(0, 120, 240, 1)',
			pointBackgroundColor: 'rgba(0, 120, 240, 0.4)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(0, 120, 240, 1)'
		},
		{
			backgroundColor: 'rgba(0, 240, 120, 0.4)',
			borderColor: 'rgba(0, 240, 120, 1)',
			pointBackgroundColor: 'rgba(0, 240, 120, 0.4)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(0, 240, 120, 1)'
		}
	];
	lineChartLegend: boolean = false;
	lineChartType: string = 'line';

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
    this.onComponentReady.emit("Summoner Details");
		this.getSummoner();
		// give everything a chance to get loaded before starting the animation to reduce choppiness
		setTimeout(() => {
			this.generateData();

			// change the data periodically
			setInterval(() => this.generateData(), 3000);
		}, 1000);
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

	generateData() {
		this.chartData = [];
		for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
			this.chartData.push([
				`Index ${i}`,
				Math.floor(Math.random() * 100)
			]);
		}
	}

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
}
