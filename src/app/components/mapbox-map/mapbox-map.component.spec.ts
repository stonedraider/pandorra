/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapboxMapComponent } from './mapbox-map.component';

describe('MapboxMapComponent', () => {
  let component: MapboxMapComponent;
  let fixture: ComponentFixture<MapboxMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
