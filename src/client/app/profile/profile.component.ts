import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';

/**
 * This class represents the lazy loaded ProfileComponent
 */
@Component({
    moduleId: module.id,
    selector: 'sd-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})
export class ProfileComponent implements OnInit {

    errorMessage: string;
    profile: string;

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
                profile => this.profile = profile,
                error => this.errorMessage = <any>error
            );
    }
}
