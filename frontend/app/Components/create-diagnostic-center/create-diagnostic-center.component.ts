import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticCenter } from 'src/app/Model/diagnosticCenter';
import { DiagnosticCenterService } from 'src/app/Services/diagnostic-center.service';

@Component({
  selector: 'app-create-diagnostic-center',
  templateUrl: './create-diagnostic-center.component.html',
  styleUrls: ['./create-diagnostic-center.component.css']
})
export class CreateDiagnosticCenterComponent implements OnInit {

  center: DiagnosticCenter = new DiagnosticCenter();;
  constructor(private _Service: DiagnosticCenterService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._Service.createDiagnosticCenter(this.center).subscribe(()=>
    this._router.navigateByUrl("/centers")
    )
  }
}
