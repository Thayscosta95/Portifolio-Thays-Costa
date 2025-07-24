import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemotecaComponent } from './memoteca.component';

describe('MemotecaComponent', () => {
  let component: MemotecaComponent;
  let fixture: ComponentFixture<MemotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemotecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
