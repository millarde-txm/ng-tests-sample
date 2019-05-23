import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
// @ts-ignore
import { Observable } from 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyChangeServiceService {

  constructor(private http: HttpClient) { }
}
