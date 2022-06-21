import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeansflaresComponent } from './leansflares.component';

describe('LeansflaresComponent', () => {
  let component: LeansflaresComponent;
  let fixture: ComponentFixture<LeansflaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeansflaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeansflaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
