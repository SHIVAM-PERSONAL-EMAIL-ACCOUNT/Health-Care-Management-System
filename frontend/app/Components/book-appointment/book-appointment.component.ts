import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/Model/appointment';
import { Patient } from 'src/app/Model/patient';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {

  appointment: Appointment = new Appointment();
  constructor(private _actRoute: ActivatedRoute, private _service: AppointmentService, private _router: Router) { }

  checkPatient!: number;
  checkTest!: number;
  checkCenter!: number;
  flag: boolean = false;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm, centerId: any, testId: any, patientId: any) {
    this._service.validateCenterId(centerId.value).subscribe(data => {
      if (data == null) {
        this.flag = true
      }
      else {
        this._service.validatePatientId(patientId.value).subscribe(data => {
          if (data == null) {
            this.flag = true
          }
          else {
            this._service.validateTestId(testId.value).subscribe(data => {
              if (data == null) {
                this.flag = true
              }
              else {
                this._service.createAppointment(this.appointment.diagnosticCenter.id, this.appointment.patient.patientId, this.appointment.diagnosticTest.id, this.appointment).subscribe(() => this._router.navigateByUrl("/appointments"));
              }
            })
          }
        });
      }
    });
  }
}
