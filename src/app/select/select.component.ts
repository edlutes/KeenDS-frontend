import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  DJANGO_SERVER = 'https://keends-demo.herokuapp.com'
  form: FormGroup;
  response;

  constructor(private FormBuilder: FormBuilder, private uploadService:UploadService) {}

  ngOnInit() {
    this.form = this.FormBuilder.group({
      select: ['']
    });
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('select').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('select').value);

    this.uploadService.upload(formData).subscribe(
      (res)=> {
        this.response = res;
        console.log(res);
      },
      (err)=> {
        console.log(err);
      }
    );
  }
}
