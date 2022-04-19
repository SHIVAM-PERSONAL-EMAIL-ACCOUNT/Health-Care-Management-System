import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _router: Router) { }

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

  ngOnInit(): void {
  }

  toHome() {
    this._router.navigateByUrl("/");
  }
}
