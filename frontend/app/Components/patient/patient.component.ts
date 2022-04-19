import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/Model/appointment';
import { Patient } from 'src/app/Model/patient';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { DiagnosticTestService } from 'src/app/Services/diagnostic-test.service';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  appointments!: Appointment[];

  patient: Patient = new Patient();

  constructor(private _activatedRoute: ActivatedRoute, private _patientService: PatientService,
              private _appointmentService: AppointmentService, private _testService: DiagnosticTestService,
              private _router: Router) { }

  ngOnInit(): void {
    this.patient.patientId = this._activatedRoute.snapshot.params.patientId;
    this._patientService.getAppointmentsOfPatient(this.patient.patientId).subscribe((data) => {
      console.log(data[0]);
      this.appointments = data;
    })
  }

  viewTestResult(id: number) {
    this._router.navigateByUrl("/testResult/"+id);
  }

  bookAppointment() {
    this._router.navigateByUrl("/bookAppointment/"+this.patient.patientId);
  }

  updateDetails() {
    this._router.navigateByUrl("/updatePatient/"+this.patient.patientId);
  }
}
