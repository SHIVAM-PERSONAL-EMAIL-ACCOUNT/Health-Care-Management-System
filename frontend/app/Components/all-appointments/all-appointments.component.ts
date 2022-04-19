import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/appointment';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];
  display: boolean = false;
  constructor(private _service: AppointmentService, private _router: Router) { }

  ngOnInit(): void {
    this._service.getAppointments().subscribe(data => {
      if (data.length == 0) {
        this.display = true;
      }
      else {
        this.appointments = data;
        this.display = false;
      }
    })
  }

  updateAppointment(appointmentId: number) {
    this._router.navigateByUrl("/appointment/"+appointmentId)}

  deleteAppointment(appointmentId: number) {
    this._service.deleteAppointment(appointmentId).subscribe(() => this.ngOnInit());
  }

  createAppointment() {this._router.navigateByUrl("/new-appointment")};

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
