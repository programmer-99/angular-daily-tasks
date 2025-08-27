import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(private router: Router) {}

  tasks = [
    { name: 'Day 1 - Form Field Reset Logic', path: 'task1' },
    { name: 'Day 2 - Show/Hide Section Based on Dropdown Selection', path: 'task2' },
    { name: 'Day 3 - Form Autosave on Value Change', path: 'task3' },
    { name: 'Day 4 - Auto-Focus First Input Field When Form Loads', path: 'task4' },
    { name: 'Day 5 - Real-Time Character Counter', path: 'task5' },
    { name: 'Day 6 - Disable Weekends in Date Picker', path: 'task6' },
    { name: 'Day 7 - Sync Two Dropdowns', path: 'task7' },

  ];

  goToTask(path: string) {
    this.router.navigate([path]);
  }
}
