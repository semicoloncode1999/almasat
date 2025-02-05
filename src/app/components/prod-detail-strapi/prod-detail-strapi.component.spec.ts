import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetailStrapiComponent } from './prod-detail-strapi.component';

describe('ProdDetailStrapiComponent', () => {
  let component: ProdDetailStrapiComponent;
  let fixture: ComponentFixture<ProdDetailStrapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdDetailStrapiComponent]
    });
    fixture = TestBed.createComponent(ProdDetailStrapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
