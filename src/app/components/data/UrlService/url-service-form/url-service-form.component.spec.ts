import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlServiceFormComponent } from './url-service-form.component';

describe('UrlServiceFormComponent', () => {
  let component: UrlServiceFormComponent;
  let fixture: ComponentFixture<UrlServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlServiceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
