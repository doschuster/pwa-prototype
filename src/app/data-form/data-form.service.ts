import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  constructor(
    private http: HttpClient
  ) { }

  postFormData(form: FormGroup) {
    return this.http.post('http://localhost:3000/data', form.value);
  }
  getFormData() {
    return this.http.get('http://localhost:3000/data');
  }
}
