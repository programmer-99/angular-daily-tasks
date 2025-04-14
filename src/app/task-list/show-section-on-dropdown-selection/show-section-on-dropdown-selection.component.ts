import { Component } from '@angular/core';
import { TaskHeaderComponent } from "../../shared/task-header/task-header.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-show-section-on-dropdown-selection',
  standalone: true,
  imports: [TaskHeaderComponent, CommonModule,ReactiveFormsModule, FormsModule,MatFormFieldModule,MatSelectModule],
  templateUrl: './show-section-on-dropdown-selection.component.html',
  styleUrl: './show-section-on-dropdown-selection.component.css'
})
export class ShowSectionOnDropdownSelectionComponent {

  modes=['Basic','Advance','Custom'];
  selectedOption : string = ""
}
