import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Model/patient';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:8090/api/v1/";

  constructor(private _httpRequest: HttpClient) { }

  validateAdmin(username: String, password: String):Observable<boolean> {
    return this._httpRequest.get<boolean>(this.baseUrl+"admin/"+username+"-"+password);
  }
}
