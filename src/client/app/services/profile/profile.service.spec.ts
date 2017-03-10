import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { ProfileService } from './profile.service';
import { Profile } from '../../models/profile';

export function main() {
    describe('Profile Service', () => {
        let profileService: ProfileService;
        let mockBackend: MockBackend;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    ProfileService,
                    MockBackend,
                    BaseRequestOptions,
                    {
                        provide: Http,
                        useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
                        deps: [MockBackend, BaseRequestOptions]
                    }
                ]
            });
        });

        it('should return an Observable when called', async(() => {
            expect(TestBed.get(ProfileService).get()).toEqual(jasmine.any(Observable));
        }));

        it('should resolve to a name when get called', async(() => {
            let profileService = TestBed.get(ProfileService);
            let mockBackend = TestBed.get(MockBackend);

            mockBackend.connections.subscribe((c: any) => {
                c.mockRespond(new Response(new ResponseOptions({ body: '{'
                  + '"id": 24121626,'
                  + '"name": "Acaeris",'
                  + '"profileIconId": 1381,'
                  + '"summonerLevel": 30,'
                  + '"ranks": ['
                    + '{'
                      + '"season": 6,'
                      + '"group": 1,'
                      + '"rank": 2'
                    + '}'
                  + ']'
                + '}' })));
            });

            profileService.get().subscribe((data: Profile) => {
                expect(data.name).toEqual('Acaeris');
            });
        }));
    });
}
