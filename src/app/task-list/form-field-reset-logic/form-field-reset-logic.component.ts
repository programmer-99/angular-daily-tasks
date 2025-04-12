import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskHeaderComponent } from "../../shared/task-header/task-header.component";

@Component({
  selector: 'app-form-field-reset-logic',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TaskHeaderComponent],
  templateUrl: './form-field-reset-logic.component.html',
  styleUrl: './form-field-reset-logic.component.css'
})
export class FormFieldResetLogicComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Step 1: Initialize form
    this.form = this.fb.group({
      name: [''],
      email: [''],
      age: ['']
    });

    // Step 2: Watch for changes on 'name'
    this.form.get('name')?.valueChanges.subscribe(value => {
      if (value === '') {
        // Step 3: Reset other fields
        this.form.patchValue({
          email: '',
          age: ''
        });
      }
    });
  }
}
