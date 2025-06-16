import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosControllerComponent } from './productos-controller.component';

describe('ProductosControllerComponent', () => {
  let component: ProductosControllerComponent;
  let fixture: ComponentFixture<ProductosControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
