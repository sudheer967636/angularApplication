import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IData from '../interface/model';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public url:string="https://fakestoreapi.com/products"

  constructor(private http:HttpClient ) { }
  getAllProducts():Observable<IData[]>{
     return this.http.get<IData[]>(this.url);
  }
}
