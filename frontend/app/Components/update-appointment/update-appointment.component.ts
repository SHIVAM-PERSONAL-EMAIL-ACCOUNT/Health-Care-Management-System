import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/Model/appointment';
import { DiagnosticCenter } from 'src/app/Model/diagnosticCenter';
import { DiagnosticTest } from 'src/app/Model/diagnosticTest';
import { Patient } from 'src/app/Model/patient';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();
  constructor(private _actRoute: ActivatedRoute, private _service: AppointmentService, private _router: Router) { }

  checkPatient!: number;
  checkTest!: number;
  checkCenter!: number;
  flag: boolean = false;

  ngOnInit(): void {
    this.appointment.id = this._actRoute.snapshot.params.appointmentId;
    this._service.getAppointmentById(this.appointment.id).subscribe((data) => {this.appointment = data;})
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
                this._service.updateAppointment(this.appointment.diagnosticCenter.id, this.appointment.patient.patientId, this.appointment.id, this.appointment.diagnosticTest.id, this.appointment).subscribe(() => this._router.navigateByUrl("/appointments"));
              }
            })
          }
        });
      }
    });
  }
}
