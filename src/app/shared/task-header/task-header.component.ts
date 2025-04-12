import { Component, Input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule, Location } from '@angular/common';


@Component({
  selector: 'app-task-header',
  standalone: true,
  imports: [MatIconModule,MatButtonModule , CommonModule],
  templateUrl: './task-header.component.html',
  styleUrl: './task-header.component.css'
})
export class TaskHeaderComponent {
  @Input() title: string = '';
  @Input() description: string = '';


  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
