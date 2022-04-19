import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {

  display = false;
  patients: Patient[] = [];
  constructor(private _service: PatientService, private _router: Router) { }

  ngOnInit(): void {
    this._service.getPatients().subscribe(data => {
      if (data.length == 0) {
        this.display = true;
      }
      else {
        this.display = false;
        this.patients = data;
      }
    })
  }

  updatePatient(patientId: number) {this._router.navigateByUrl("/update/patient/"+patientId)}

  deletePatient(patientId: number) {this._service.deletePatient(patientId).subscribe(()=>this.ngOnInit())}

  createPatient() {this._router.navigateByUrl("/new-patient")}

  toPatients() {
    this._router.navigateByUrl("/patients")
  }

  toAppointments() {
    this._router.navigateByUrl("/appointments")
  }

  toTests() {
    this._router.navigateByUrl("/tests")
  }

  toCenters() {
    this._router.navigateByUrl("/centers")
  }

  toHome() {
  this._router.navigateByUrl("/");
  }
}
