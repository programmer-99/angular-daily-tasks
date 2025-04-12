import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormFieldResetLogicComponent } from './task-list/form-field-reset-logic/form-field-reset-logic.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    { path: '', component: TaskListComponent },
  { path: 'task1', component: FormFieldResetLogicComponent },
];
