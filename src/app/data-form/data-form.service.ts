import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  constructor(
    private http: HttpClient
  ) { 

    const channel = new BroadcastChannel('sw-messages');
    channel.addEventListener('message', event => {
      console.log('Received', event.data);
    });
  }

  postFormData(form: FormGroup) {
    console.debug('POSTE FORM')
    navigator.serviceWorker.getRegistration().then(() => navigator.serviceWorker.ready).then(reg => {
      reg.sync.register('example-sync');
      reg.active.postMessage(23);
    });
    // return this.http.post('http://localhost:3000/data', form.value);
  }
  getFormData() {
    return this.http.get('http://localhost:3000/data');
  }
}
