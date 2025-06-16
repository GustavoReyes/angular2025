import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaControllerComponent } from './tienda-controller.component';

describe('TiendaControllerComponent', () => {
  let component: TiendaControllerComponent;
  let fixture: ComponentFixture<TiendaControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
