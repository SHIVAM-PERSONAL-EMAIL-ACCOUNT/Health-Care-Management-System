import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = "http://localhost:8090/api/v1/";
  constructor(private _http: HttpClient) {}

  registerAdmin (admin: Admin) {
    return this._http.post<Admin>(this.baseUrl+"/new-admin", admin);
  }
}
