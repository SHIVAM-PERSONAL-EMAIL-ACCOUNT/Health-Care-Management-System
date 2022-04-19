import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Model/admin';
import { Patient } from 'src/app/Model/patient';
import { LoginService } from 'src/app/Services/Login.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  admin: Admin = new Admin();
  patient: Patient = new Patient();
  role!: String;
  errFlag!: boolean;

  constructor(private _loginService: LoginService, private _router: Router) { }

  validate() {
      this._loginService.validateAdmin(this.admin.username, this.admin.password).subscribe(
        (data) => {
          if (data == true) {this._router.navigateByUrl("/admin");}
          else {this.errFlag = true;}
          })
    }

  ngOnInit(): void {
  }
}
