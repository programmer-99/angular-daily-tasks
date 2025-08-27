import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/task-header/material.module';
import { TaskHeaderComponent } from "../../shared/task-header/task-header.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-auto-save-onvalue-change',
  standalone: true,
  imports: [MaterialModule, TaskHeaderComponent,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-auto-save-onvalue-change.component.html',
  styleUrl: './form-auto-save-onvalue-change.component.css'
})
export class FormAutoSaveOnvalueChangeComponent implements OnInit{

  profileForm!: FormGroup
  saveStatus : 'idle'| 'saving'|'saved'='idle';

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name:[''],
      email:['']
    });

    this.profileForm.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((res:any)=>{
      this.autoSave()
    })
  }

  autoSave(){
    this.saveStatus = 'saving';

    of(this.profileForm.value).subscribe((res:any)=>{
      this.saveStatus = 'saved';

      setTimeout(() => {
        this.saveStatus = 'idle';
      }, 2000);
    })
  }

}
