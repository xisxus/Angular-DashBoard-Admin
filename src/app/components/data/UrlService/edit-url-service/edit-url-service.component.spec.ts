import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUrlServiceComponent } from './edit-url-service.component';

describe('EditUrlServiceComponent', () => {
  let component: EditUrlServiceComponent;
  let fixture: ComponentFixture<EditUrlServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUrlServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUrlServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
