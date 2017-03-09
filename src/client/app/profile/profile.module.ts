import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileService } from '../services/profile/profile.service';

@NgModule({
    imports: [ProfileRoutingModule, SharedModule],
    declarations: [ProfileComponent],
    exports: [ProfileComponent],
    providers: [ProfileService]
})
export class ProfileModule { }
