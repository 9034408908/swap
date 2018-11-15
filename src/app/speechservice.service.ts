import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class SpeechserviceService {

  constructor(private http: HttpClient) { }
  create(data) {
    return this.http.post('https://speech-5a4ae.firebaseio.com//speech.json', data)
  }
}
