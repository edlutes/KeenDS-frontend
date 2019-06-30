import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HelperService {

    url = "http://127.0.0.1:8000";
    /* proxyurl = "https://cors-anywhere.herokuapp.com/";
    full_url = this.proxyurl + this.url; */

    constructor(private http: HttpClient){

    }

    getData(){
/*         return this.http.get(this.full_url+'/data')*/  
         return this.http.get(this.url+'/data')

    }
}