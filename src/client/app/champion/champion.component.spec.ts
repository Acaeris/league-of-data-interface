import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { ChampionModule } from './champion.module';

export function main() {
   describe('Champion component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ChampionModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let championDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(championDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-champion></sd-champion>'
})
class TestComponent {}
