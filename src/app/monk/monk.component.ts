import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-monk',
  templateUrl: './monk.component.html',
  styleUrls: ['./monk.component.css']
})
export class MonkComponent implements OnInit {
public code: any= {};
public slidesForm: FormGroup;
public items: FormArray;
public 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.slidesForm = this.formBuilder.group({
      
      items: this.formBuilder.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.slidesForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  
 delete(index: number) {
   this.items = this.slidesForm.get('items') as FormArray;
    this.items.removeAt(index);
  }

  save(){
    console.log(this.code);
  }
}
