import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticCenter } from 'src/app/Model/diagnosticCenter';
import { DiagnosticCenterService } from 'src/app/Services/diagnostic-center.service';

@Component({
  selector: 'app-all-diagnostic-centers',
  templateUrl: './all-diagnostic-centers.component.html',
  styleUrls: ['./all-diagnostic-centers.component.css']
})
export class AllDiagnosticCentersComponent implements OnInit {

  display = false;
  diagnosticCenters: DiagnosticCenter[] = [];
  constructor(private _service: DiagnosticCenterService, private _router: Router) { }

  ngOnInit(): void {
    this._service.getDiagnosticCenters().subscribe(data => {
      if (data.length == 0) {
        this.display = true;
      }
      else {
        this.display = false;
        this.diagnosticCenters = data;
      }
    })
  }

  updateCenter(centerId: number) {this._router.navigateByUrl("/update/center/"+centerId)}

  deleteCenter(centerId: number) {this._service.deleteCenter(centerId).subscribe(()=>this.ngOnInit())}

  createCenter() {this._router.navigateByUrl("/new-center")}

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
