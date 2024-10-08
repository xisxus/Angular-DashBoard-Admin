import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlServiceListComponent } from './url-service-list.component';

describe('UrlServiceListComponent', () => {
  let component: UrlServiceListComponent;
  let fixture: ComponentFixture<UrlServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlServiceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
