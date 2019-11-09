import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fromEvent, from } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Data } from './data.model';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  testData: Data[] = [];
  constructor(
    private http: HttpClient,
    private dbService: NgxIndexedDBService
  ) { 

    dbService.currentStore = 'test-db';
    const channel = new BroadcastChannel('sw-messages');
    fromEvent(channel, 'message').subscribe(event => {
      this.dbService.getAll<Data>().then(items => {
        const fi = items.filter(item => item.sync === false);
        this.http.post('http://localhost:3000/data', fi).subscribe(() => {
          fi.map(it => this.dbService.update('test-db', it))
          
        });
      });
      console.log('Received', event);
    })
    // channel.addEventListener('message', event => {
    //   console.log('Received', event.data);
    // });
  }

  postFormData(form: FormGroup) {   

    this.http.post('http://localhost:3000/data', form.value).subscribe(() => {
      this.dbService.add({ name: form.controls.name.value, country: form.controls.country.value, sync: true });
    }, error => this.dbService.add({ name: form.controls.name.value, country: form.controls.country.value, sync: false }));

    navigator.serviceWorker.getRegistration().then(() => navigator.serviceWorker.ready).then(reg => {
      reg.sync.register('example-sync');
      // reg.active.postMessage(23);
    });
    this.getFormData();
    // return this.http.post('http://localhost:3000/data', form.value);
  }
  getFormData() {
    this.dbService.getAll<Data>().then(items => {
      this.testData = [];
      items.map(item => this.testData.push(item));
    });
  }
}
