import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/task-header/material.module';

@Component({
  selector: 'app-disable-weekends-in-date-picker',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './disable-weekends-in-date-picker.component.html',
  styleUrl: './disable-weekends-in-date-picker.component.css'
})
export class DisableWeekendsInDatePickerComponent {
  filterWeekdays = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
  };
  
}
