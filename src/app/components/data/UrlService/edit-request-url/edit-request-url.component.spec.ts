import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequestUrlComponent } from './edit-request-url.component';

describe('EditRequestUrlComponent', () => {
  let component: EditRequestUrlComponent;
  let fixture: ComponentFixture<EditRequestUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRequestUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRequestUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
