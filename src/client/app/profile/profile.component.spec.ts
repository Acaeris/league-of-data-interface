import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { ProfileComponent } from './profile.component';
import { ProfileService } from '../services/profile/profile.service';

export function main() {
    describe('Profile Component', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [],
                declarations: [ProfileComponent],
                providers: [
                    { provide: ProfileService, useValue: new MockProfileService() }
                ]
            });
        });

        it('should work',
            async(() => {
                TestBed
                    .compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(ProfileComponent);
                        let profileInstance = fixture.debugElement.componentInstance;
                        let profileDOME1 = fixture.debugElement.nativeElement;
                        let mockProfileService = <MockProfileService>fixture.debugElement.injector.get(ProfileService);
                        let profileServiceSpy = spyOn(mockProfileService, 'get').and.callThrough();

                        mockProfileService.returnValue = 'Acaeris';

                        fixture.detectChanges();

                        expect(profileInstance.profileService).toEqual(jasmine.any(MockProfileService));
                        expect(profileDOME1.querySelectorAll('.ui.profile.card').length).toEqual(1);
                        expect(profileDOME1.querySelectorAll('.ui.profile.card .header').textContent).toEqual('Acaeris');
                        expect(profileServiceSpy.calls.count()).toBe(1);
                    });
            }))
    })
}

class MockProfileService {
    returnValue: string;

    get(): Observable<string> {
        return Observable.create((observer: any) => {
            observer.next(this.returnValue);
            observer.complete();
        });
    }
}
