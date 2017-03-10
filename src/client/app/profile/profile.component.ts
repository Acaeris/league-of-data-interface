import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import { Profile } from '../models/profile';
import { Tiers } from '../models/tiers.enum';

/**
 * This class represents the lazy loaded ProfileComponent
 */
@Component({
    moduleId: module.id,
    selector: 'sd-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

    errorMessage: string;
    profile: Profile;
    region: string = "EUW";
    Tiers: typeof Tiers = Tiers;
    lineChartData: Array<any> = [
        {data: [74, 100, 150, 144, 125, 80], label: 'Rank'}
    ];
    lineChartLabels: Array<string> = ['12/30', '01/06', '01/13', '01/20', '01/27', '02/03'];
    lineChartOptions: any = {
        responsive: true
    };
    lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(0, 120, 240, 0.4)',
            borderColor: 'rgba(0, 120, 240, 1)',
            pointBackgroundColor: 'rgba(0, 120, 240, 0.4)',
            pointBorderColor: '#000',
            pointHoverBackgroundColor: '#000',
            pointHoverBorderColor: 'rgba(0, 120, 240, 1)'
        }
    ];
    lineChartLegend: boolean = false;
    lineChartType: string = 'line';

    /**
     * Creates an instance of the ProfileComponent with the injected
     * ProfileService
     *
     * @param {ProfileService} profileService - The injected ProfileService
     */
    constructor(public profileService: ProfileService) {}

    /**
     * Get the profile data
     */
    ngOnInit() {
        this.getProfile();
    }

    /**
     * Handles the profileService observable
     */
    getProfile() {
        this.profileService.get()
            .subscribe(
                data => this.profile = data,
                error => this.errorMessage = <any>error
            );
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}
