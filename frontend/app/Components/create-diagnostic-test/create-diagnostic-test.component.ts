import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticTest } from 'src/app/Model/diagnosticTest';
import { DiagnosticTestService } from 'src/app/Services/diagnostic-test.service';

@Component({
  selector: 'app-create-diagnostic-test',
  templateUrl: './create-diagnostic-test.component.html',
  styleUrls: ['./create-diagnostic-test.component.css']
})
export class CreateDiagnosticTestComponent implements OnInit {

  test: DiagnosticTest = new DiagnosticTest();
  constructor(private _Service: DiagnosticTestService, private _router: Router) { }

  ngOnInit(): void {
    this.test.diagnosticTestReading = "";
    this.test.condition = "";
  }

  onSubmit() {
    if (this.test.diagnosticTestReading == "") {this.test.diagnosticTestReading = "To Be Updated";}
    if (this.test.condition == "") {this.test.condition = "To Be Updated";}
    this._Service.createTest(this.test).subscribe(()=>
    this._router.navigateByUrl("/tests")
    )
  }
}
