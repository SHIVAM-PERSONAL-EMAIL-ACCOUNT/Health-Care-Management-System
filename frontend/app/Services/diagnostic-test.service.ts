import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosticTest } from '../Model/diagnosticTest';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticTestService {

  baseUrl = "http://localhost:8090/api/v1/";
  constructor(private _httpRequest: HttpClient) { }

  getTestById(testId: number) {
    return this._httpRequest.get<DiagnosticTest>(this.baseUrl+"test/"+testId);
  }

  getAlltests() {
    return this._httpRequest.get<DiagnosticTest[]>(this.baseUrl+"all-tests")
  }

  updateTest(testId: number, test: DiagnosticTest) {
    return this._httpRequest.put<DiagnosticTest>(this.baseUrl+"changed-diagnostic-test/"+testId, test);
  }

  createTest(test: DiagnosticTest) {
    return this._httpRequest.post<DiagnosticTest>(this.baseUrl+"new-test", test);
  }

  deleteTest(id:number): Observable<any> {
    return this._httpRequest.delete(this.baseUrl+"delete/test/"+id);
  }
}
