import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeViewComponent } from './youtube-view.component';

describe('YoutubeViewComponent', () => {
  let component: YoutubeViewComponent;
  let fixture: ComponentFixture<YoutubeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [YoutubeViewComponent]
});
    fixture = TestBed.createComponent(YoutubeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
