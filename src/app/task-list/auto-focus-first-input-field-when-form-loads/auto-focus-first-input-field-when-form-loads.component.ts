import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MaterialModule } from '../../shared/task-header/material.module';
import { TaskHeaderComponent } from "../../shared/task-header/task-header.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto-focus-first-input-field-when-form-loads',
  standalone: true,
  imports: [MaterialModule, TaskHeaderComponent],
  templateUrl: './auto-focus-first-input-field-when-form-loads.component.html',
  styleUrl: './auto-focus-first-input-field-when-form-loads.component.css'
})
export class AutoFocusFirstInputFieldWhenFormLoadsComponent implements AfterViewInit{

  @ViewChild('nameInput') nameInput!:ElementRef<HTMLInputElement>
  form!:FormGroup

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]]
    })
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.nameInput?.nativeElement.focus()
    }, 0);
  }
}
