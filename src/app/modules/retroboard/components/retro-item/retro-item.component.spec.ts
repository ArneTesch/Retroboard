import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroItemComponent } from './retro-item.component';

describe('RetroItemComponent', () => {
  let component: RetroItemComponent;
  let fixture: ComponentFixture<RetroItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
