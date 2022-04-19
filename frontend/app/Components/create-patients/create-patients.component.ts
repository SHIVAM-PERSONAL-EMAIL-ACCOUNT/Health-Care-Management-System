import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.css']
})
export class CreatePatientsComponent implements OnInit {

  patient: Patient = new Patient();
  constructor(private _actRoute: ActivatedRoute, private _patientService: PatientService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._patientService.createPatient(this.patient).subscribe(()=>
    this._router.navigateByUrl("/patients")
    )
  }
}
