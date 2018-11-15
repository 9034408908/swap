import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {
public speech:any= {};
public spech: Array<any>;
public btn_stt: boolean = true;
public options:any;
  constructor( private router: Router ) { 
    this.spech= [];
  }

  ngOnInit() {
  }
private save(){
  this.spech.push(this.speech);
  this.speech= {};
  console.log(this.spech);
}
  delete(index) {
    this.spech.splice(index, 1);
  }
  edit(sph) {
    this.speech = sph;
    this.btn_stt = false;
  }
  update() {
    this.btn_stt = true;
    this.speech = {};
  }
  reactive() {
    this.router.navigate(['/speech1']);
  }
}
