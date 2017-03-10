import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileService } from '../services/profile/profile.service';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@NgModule({
    imports: [ProfileRoutingModule, SharedModule, ChartsModule],
    declarations: [ProfileComponent, CapitalizePipe],
    exports: [ProfileComponent],
    providers: [ProfileService]
})
export class ProfileModule { }
