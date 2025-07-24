import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarioServicosComponent } from './mario-servicos.component';

describe('MarioServicosComponent', () => {
  let component: MarioServicosComponent;
  let fixture: ComponentFixture<MarioServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarioServicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarioServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
