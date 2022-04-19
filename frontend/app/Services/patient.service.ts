import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../Model/appointment';
import { Patient } from '../Model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrl = "http://localhost:8090/api/v1/";

  constructor(private _httpRequest: HttpClient) { }

  createPatient(patient: Patient): Observable<Patient> {
    return this._httpRequest.post<Patient>(this.baseUrl+"new-patient", patient);
  }

  getAppointmentsOfPatient(patientId: number): Observable<Appointment[]> {
    return this._httpRequest.get<Appointment[]>(this.baseUrl+"patient/"+patientId+"/appointments");
  }

  getPatient(patientId: number): Observable<Patient> {
    return this._httpRequest.get<Patient>(this.baseUrl+"patient/"+patientId);
  }

  updatePatient(patientId: number, patient: Patient): Observable<Patient> {
    return this._httpRequest.put<Patient>(this.baseUrl+"changed-patient/"+patientId, patient);
  }

  getPatients() {
    return this._httpRequest.get<Patient[]>(this.baseUrl+"all-patients")
  }

  deletePatient(id:number): Observable<any> {
    return this._httpRequest.delete(this.baseUrl+"delete/patient/"+id);
  }
}
