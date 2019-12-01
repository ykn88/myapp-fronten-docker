import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  Select()
  {
    return this.http.get("http://192.168.1.106:9898/product");
  }
}
