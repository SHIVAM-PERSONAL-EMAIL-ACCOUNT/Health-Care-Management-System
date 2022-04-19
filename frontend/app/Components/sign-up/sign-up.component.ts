import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Model/admin';
import { Patient } from 'src/app/Model/patient';
import { AdminService } from 'src/app/Services/admin.service';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  admin: Admin = new Admin();

  constructor(private _adminService: AdminService, private _router: Router) {}

  onSubmit() {
    this._adminService.registerAdmin(this.admin).subscribe(() => this._router.navigateByUrl("/admin"))
    }

  ngOnInit(): void {
  }
}
