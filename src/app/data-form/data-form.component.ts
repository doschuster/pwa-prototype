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

  dataForm = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
  });

  constructor(
    private dataService: DataFormService
  ) { }

  ngOnInit() {
    this.dataService.getFormData().subscribe(data => this.formData = data);
  }

  onPostData() {
    this.dataService.postFormData(this.dataForm).subscribe(data => {
      console.debug(data);
    });
  }

}
