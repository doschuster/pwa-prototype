import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataFormService } from './data-form.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {
  formData: any;
  formServerData: any;

  dataForm = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
  });

  constructor(
    public dataService: DataFormService
  ) { }

  ngOnInit() {
    this.dataService.getFormData();
    this.dataService.getFormServerData().subscribe(item => this.formServerData = item);
  }

  onPostData() {
    this.dataService.postFormData(this.dataForm);
  }
  getFormData() {
    this.dataService.getFormData();
  }

}
