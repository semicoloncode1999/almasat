import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShapeComponent } from './product-shape.component';

describe('ProductShapeComponent', () => {
  let component: ProductShapeComponent;
  let fixture: ComponentFixture<ProductShapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductShapeComponent]
    });
    fixture = TestBed.createComponent(ProductShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
