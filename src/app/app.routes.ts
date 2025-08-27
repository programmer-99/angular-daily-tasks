import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormFieldResetLogicComponent } from './task-list/form-field-reset-logic/form-field-reset-logic.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ShowSectionOnDropdownSelectionComponent } from './task-list/show-section-on-dropdown-selection/show-section-on-dropdown-selection.component';
import { FormAutoSaveOnvalueChangeComponent } from './task-list/form-auto-save-onvalue-change/form-auto-save-onvalue-change.component';
import { AutoFocusFirstInputFieldWhenFormLoadsComponent } from './task-list/auto-focus-first-input-field-when-form-loads/auto-focus-first-input-field-when-form-loads.component';
import { RealTimeCharacterCounterComponent } from './task-list/real-time-character-counter/real-time-character-counter.component';
import { DisableWeekendsInDatePickerComponent } from './task-list/disable-weekends-in-date-picker/disable-weekends-in-date-picker.component';
import { SyncTwoDropdownsComponent } from './task-list/sync-two-dropdowns/sync-two-dropdowns.component';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task1', component: FormFieldResetLogicComponent },
  { path: 'task2', component: ShowSectionOnDropdownSelectionComponent },
  { path: 'task3', component: FormAutoSaveOnvalueChangeComponent },
  { path: 'task4', component: AutoFocusFirstInputFieldWhenFormLoadsComponent },
  { path: 'task5', component: RealTimeCharacterCounterComponent },
  { path: 'task6', component: DisableWeekendsInDatePickerComponent },
  { path: 'task7', component: SyncTwoDropdownsComponent }
];
