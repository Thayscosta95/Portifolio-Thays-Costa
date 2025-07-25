import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LashComponent } from './lash.component';

describe('LashComponent', () => {
  let component: LashComponent;
  let fixture: ComponentFixture<LashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
