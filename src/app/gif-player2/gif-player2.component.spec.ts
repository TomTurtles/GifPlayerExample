import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifPlayer2Component } from './gif-player2.component';

describe('GifPlayer2Component', () => {
  let component: GifPlayer2Component;
  let fixture: ComponentFixture<GifPlayer2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifPlayer2Component]
    });
    fixture = TestBed.createComponent(GifPlayer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
