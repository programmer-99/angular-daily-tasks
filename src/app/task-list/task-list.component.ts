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
  ];

  goToTask(path: string) {
    this.router.navigate([path]);
  }
}
