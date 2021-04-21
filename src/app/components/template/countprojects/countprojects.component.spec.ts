import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountprojectsComponent } from './countprojects.component';

describe('CountprojectsComponent', () => {
  let component: CountprojectsComponent;
  let fixture: ComponentFixture<CountprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
