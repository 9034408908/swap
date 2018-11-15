import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-speech1',
  templateUrl: './speech1.component.html',
  styleUrls: ['./speech1.component.css']
})
export class Speech1Component implements OnInit {
  private myForm: FormGroup;
  public speech: any= {};
  public author: string;
  
  constructor( private fBuilder: FormBuilder ) {
  }

  ngOnInit() {
    this.myForm = this.fBuilder.group({
      speech: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required, Validators.required]],
       spech: new FormArray([])
    })
   
  }

  public onSubmit() {
(<FormArray>this.myForm.get('spech')).push(this.speech);
  }
}
