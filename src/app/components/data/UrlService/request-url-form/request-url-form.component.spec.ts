import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUrlFormComponent } from './request-url-form.component';

describe('RequestUrlFormComponent', () => {
  let component: RequestUrlFormComponent;
  let fixture: ComponentFixture<RequestUrlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestUrlFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestUrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
