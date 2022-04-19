import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticTest } from 'src/app/Model/diagnosticTest';
import { DiagnosticCenterService } from 'src/app/Services/diagnostic-center.service';
import { DiagnosticTestService } from 'src/app/Services/diagnostic-test.service';

@Component({
  selector: 'app-update-diagnostic-test',
  templateUrl: './update-diagnostic-test.component.html',
  styleUrls: ['./update-diagnostic-test.component.css']
})
export class UpdateDiagnosticTestComponent implements OnInit {

  test: DiagnosticTest = new DiagnosticTest();
  constructor(private _actRoute: ActivatedRoute, private _service: DiagnosticTestService, private _router: Router) { }

  ngOnInit(): void {
    this.test.id = this._actRoute.snapshot.params.testId;
    this._service.getTestById(this.test.id).subscribe((data) => this.test = data);
  }

  onSubmit() {
    this._service.updateTest(this.test.id, this.test).subscribe(() => this._router.navigateByUrl("/tests"));
  }
}

