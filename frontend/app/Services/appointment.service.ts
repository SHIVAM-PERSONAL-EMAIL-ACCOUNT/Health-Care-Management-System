import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../Model/appointment';
import { DiagnosticCenter } from '../Model/diagnosticCenter';
import { DiagnosticTest } from '../Model/diagnosticTest';
import { Patient } from '../Model/patient';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl = "http://localhost:8090/api/v1/";

  constructor(private _httpRequest: HttpClient) { }

  getAppointments() {
    return this._httpRequest.get<Appointment[]>(this.baseUrl+"appointments")
  }

  createAppointment(centerId: number, patientId: number, testId: number, appointment: Appointment) {
    return this._httpRequest.post<Appointment>(this.baseUrl+"center/"+centerId+"/patient/"+patientId+"/appointment/test/"+testId, appointment);
  }

  updateAppointment(centerId: number, patientId: number, appointmentId: number, testId: number, appointment: Appointment) {
    return this._httpRequest.put<Appointment>(this.baseUrl+"center/"+centerId+"/patient/"+patientId+"/appointment/"+appointmentId+"/test/"+testId, appointment);
  }

  getAppointmentById(id: number) {
    console.log("ID = " + id);
    return this._httpRequest.get<Appointment>(this.baseUrl+"appointment/"+id);
  }

  validateCenterId(id: number) {
    return this._httpRequest.get<DiagnosticCenter>(this.baseUrl+"check-center-id/"+id);
  }

  validateTestId(id: number) {
    return this._httpRequest.get<DiagnosticTest>(this.baseUrl+"check-test-id/"+id);
  }

  validatePatientId(id: number) {
    return this._httpRequest.get<Patient>(this.baseUrl+"check-patient-id/"+id);
  }

  deleteAppointment(id:number): Observable<any> {
    return this._httpRequest.delete(this.baseUrl+"delete/appointment/"+id);
  }
}
