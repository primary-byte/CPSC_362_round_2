import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassesDetailComponent } from './view-classes-detail.component';

describe('ViewClassesDetailComponent', () => {
  let component: ViewClassesDetailComponent;
  let fixture: ComponentFixture<ViewClassesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClassesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
