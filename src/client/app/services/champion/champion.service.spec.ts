import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { ChampionService } from './champion.service';
import { Champion } from '../../models/champion';

export function main() {
    describe('Champion Service', () => {
        let championService: ChampionService;
        let mockBackend: MockBackend;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    ChampionService,
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
            expect(TestBed.get(ChampionService).get()).toEqual(jasmine.any(Observable));
        }));

        it('should resolve to a name when get called', async(() => {
            let championService = TestBed.get(ChampionService);
            let mockBackend = TestBed.get(MockBackend);

            mockBackend.connections.subscribe((c: any) => {
                c.mockRespond(new Response(new ResponseOptions({ body: '{'
                  + '"id": 1,'
                  + '"name": "Annie",'
                  + '"tags": ['
                    + '"Mage",'
                    + '"Support"'
                  + ']'
                + '}' })));
            });

            championService.get().subscribe((data: Champion) => {
                expect(data.name).toEqual('Annie');
            });
        }));
    });
}
