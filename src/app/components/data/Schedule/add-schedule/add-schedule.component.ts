import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScheduleService } from '../../../../services/Schedule/schedule.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-schedule.component.html',
  styleUrl: './add-schedule.component.css'
})
export class AddScheduleComponent {
  scheduleForm: FormGroup;

  constructor(private fb: FormBuilder, private scheduleService: ScheduleService) {
    this.scheduleForm = this.fb.group({
      tourVoucherID: [null, Validators.required],
      scheduleTitle: ['', Validators.required],
      scheduleDescription: [''],
      packageID: [null, Validators.required],
      dayNumber: [null, Validators.required],
      tentativeTime: ['', Validators.required],
      actualTime: [''],
      tentativeCost: [null, Validators.required],
      actualCost: [''],
      dayCostCategoryID: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.scheduleForm.valid) {
      this.scheduleService.addSchedule(this.scheduleForm.value).subscribe(response => {
        console.log('Schedule added successfully', response);
      }, error => {
        console.error('Error adding schedule', error);
      });
    }
  }
}