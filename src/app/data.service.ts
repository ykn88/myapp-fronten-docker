import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  Select()
  {
    return this.http.get("http://172.18.4.147:9898/product");
  }
}
