/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RankChartComponent } from './rank-chart.component';

describe('RankChartComponent', () => {
  let component: RankChartComponent;
  let fixture: ComponentFixture<RankChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RankChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
