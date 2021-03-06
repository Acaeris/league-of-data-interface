import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { SummonerComponent } from './summoner.component';
import { SummonerService } from '../services/summoner/summoner.service';

export function main() {
    describe('Summoner Component', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [],
                declarations: [SummonerComponent],
                providers: [
                    { provide: SummonerService, useValue: new MockSummonerService() }
                ]
            });
        });

        it('should work',
            async(() => {
                TestBed
                    .compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(SummonerComponent);
                        let summonerInstance = fixture.debugElement.componentInstance;
                        let summonerDOME1 = fixture.debugElement.nativeElement;
                        let mockSummonerService = <MockSummonerService>fixture.debugElement.injector.get(SummonerService);
                        let summonerServiceSpy = spyOn(mockSummonerService, 'get').and.callThrough();

                        mockSummonerService.returnValue = 'Acaeris';

                        fixture.detectChanges();

                        expect(summonerInstance.summonerService).toEqual(jasmine.any(MockSummonerService));
                        expect(summonerDOME1.querySelectorAll('.ui.profile.card').length).toEqual(1);
                        expect(summonerDOME1.querySelectorAll('.ui.profile.card .header').textContent).toEqual('Acaeris');
                        expect(summonerServiceSpy.calls.count()).toBe(1);
                    });
            }))
    })
}

class MockSummonerService {
    returnValue: string;

    get(): Observable<string> {
        return Observable.create((observer: any) => {
            observer.next(this.returnValue);
            observer.complete();
        });
    }
}
