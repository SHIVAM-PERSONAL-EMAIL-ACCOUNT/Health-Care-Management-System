import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosticCenter } from '../Model/diagnosticCenter';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticCenterService {

  baseUrl = "http://localhost:8090/api/v1/";
  constructor(private _http: HttpClient) {}
  
  createDiagnosticCenter(diagnosticCenter: DiagnosticCenter) {
    return this._http.post<DiagnosticCenter>(this.baseUrl+"new-diagnostic-center", diagnosticCenter);
  }

  updateDiagnosticCenter(centerId: number, diagnosticCenter: DiagnosticCenter) {
    return this._http.put<DiagnosticCenter>(this.baseUrl+"changed-diagnostic-center/"+centerId, diagnosticCenter);
  }

  getDiagnosticCenters() {
    return this._http.get<DiagnosticCenter[]>(this.baseUrl+"all-diagnostic-center");
  }

  getCenterbyId(centerId: number) {
    return this._http.get<DiagnosticCenter>(this.baseUrl+"center/"+ centerId);
  }

  deleteCenter(id:number): Observable<any> {
    return this._http.delete(this.baseUrl+"delete/center/"+id);
  }
}
