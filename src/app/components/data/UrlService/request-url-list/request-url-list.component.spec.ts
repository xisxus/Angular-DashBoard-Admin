import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUrlListComponent } from './request-url-list.component';

describe('RequestUrlListComponent', () => {
  let component: RequestUrlListComponent;
  let fixture: ComponentFixture<RequestUrlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestUrlListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestUrlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
