import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-real-time-character-counter',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './real-time-character-counter.component.html',
  styleUrl: './real-time-character-counter.component.css'
})
export class RealTimeCharacterCounterComponent implements OnInit{
  

  form!: FormGroup
  maxlength = 500
  charCount = 0

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      message:['']

    })

    this.form.get('message')?.valueChanges.subscribe((res)=>{
      this.charCount = res.length
    })
  }


}
