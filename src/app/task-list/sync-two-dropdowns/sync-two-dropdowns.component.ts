import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sync-two-dropdowns',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule,FormsModule],
  templateUrl: './sync-two-dropdowns.component.html',
  styleUrl: './sync-two-dropdowns.component.css'
})
export class SyncTwoDropdownsComponent implements OnInit{
  form!: FormGroup

  countries = ['Pakistan', 'Germany'];

  citiesMap: { [key: string]: string[] } = {
    Pakistan: ['Karachi', 'Lahore', 'Islamabad'],
    Germany: ['Berlin', 'Hamburg', 'Munich']
  };

  cities :string[]=[]

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.form = this.fb.group({
      country :[''],
      city:['']
    })

    this.form.get('country')?.valueChanges.subscribe(selectedCountry => {
      this.cities = this.citiesMap[selectedCountry] || [];
      this.form.get('city')?.reset(); 
    });

  }

}
