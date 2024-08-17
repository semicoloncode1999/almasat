import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoryComponent } from './resory.component';

describe('ResoryComponent', () => {
  let component: ResoryComponent;
  let fixture: ComponentFixture<ResoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResoryComponent]
    });
    fixture = TestBed.createComponent(ResoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
