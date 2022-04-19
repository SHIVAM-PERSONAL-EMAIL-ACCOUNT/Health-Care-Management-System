import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  constructor(private _actRoute: ActivatedRoute, private _patientService: PatientService, private _router: Router) { }

  ngOnInit(): void {
    this.patient.patientId = this._actRoute.snapshot.params.patientId;
    this._patientService.getPatient(this.patient.patientId).subscribe((data)=>this.patient = data)
  }

  onSubmit() {
    this._patientService.updatePatient(this.patient.patientId, this.patient).subscribe(()=>
    this._router.navigateByUrl("/patients")
    )
  }
}
