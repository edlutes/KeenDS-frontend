import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  DJANGO_SERVER: string = "https://keends-frontend.herokuapp.com/";


  constructor(private http: HttpClient) { }

  public upload(formData){
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/`, formData);
  }
}
