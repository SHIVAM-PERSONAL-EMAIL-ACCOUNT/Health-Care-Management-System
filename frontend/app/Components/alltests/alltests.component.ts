import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticTest } from 'src/app/Model/diagnosticTest';
import { DiagnosticTestService } from 'src/app/Services/diagnostic-test.service';

@Component({
  selector: 'app-alltests',
  templateUrl: './alltests.component.html',
  styleUrls: ['./alltests.component.css']
})
export class AlltestsComponent implements OnInit {

  display = false;
  tests: DiagnosticTest[] = [];
  constructor(private _service: DiagnosticTestService, private _router: Router) { }

  ngOnInit(): void {
    this._service.getAlltests().subscribe(data => {
      if (data.length == 0) {
        this.display = true;
      }
      else {
        this.display = false;
        this.tests = data;
      }
    })
  }

  updateTest(testId: number) {this._router.navigateByUrl("/update/test/"+testId)}

  deleteTest(testId: number) {this._service.deleteTest(testId).subscribe(()=>this.ngOnInit())}

  createTest() {this._router.navigateByUrl("/new-test")}

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
