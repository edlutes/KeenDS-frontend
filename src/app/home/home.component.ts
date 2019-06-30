import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/_service/data.helper';
import { Data } from 'src/models/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HelperService]
})
export class HomeComponent implements OnInit {
  title = 'Cover Letter for TPS report';
  data : Data[] = [];

  constructor(public http: HttpClient, private helperService: HelperService){

  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.helperService
    .getData()
    .subscribe((row:Data[])=>{
      console.log(row);
      this.data = row;
    });
  }

  public selected:any;

  public highlighted(data){
    this.selected = data.Observation_Date;
  }
}
