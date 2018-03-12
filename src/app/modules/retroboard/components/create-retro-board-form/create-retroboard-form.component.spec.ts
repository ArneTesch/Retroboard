import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRetroboardFormComponent } from './create-retroboard-form.component';

describe('CreateRetroboardFormComponent', () => {
  let component: CreateRetroboardFormComponent;
  let fixture: ComponentFixture<CreateRetroboardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRetroboardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRetroboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
