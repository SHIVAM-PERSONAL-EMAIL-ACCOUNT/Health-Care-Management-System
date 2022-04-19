import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticCenter } from 'src/app/Model/diagnosticCenter';
import { DiagnosticCenterService } from 'src/app/Services/diagnostic-center.service';

@Component({
  selector: 'app-update-diagnostic-center',
  templateUrl: './update-diagnostic-center.component.html',
  styleUrls: ['./update-diagnostic-center.component.css']
})
export class UpdateDiagnosticCenterComponent implements OnInit {

  center: DiagnosticCenter = new DiagnosticCenter();
  constructor(private _actRoute: ActivatedRoute, private _service: DiagnosticCenterService, private _router: Router) { }

  ngOnInit(): void {
    this.center.id = this._actRoute.snapshot.params.centerId;
    this._service.getCenterbyId(this.center.id).subscribe(data => this.center = data);
  }

  onSubmit() {
    this._service.updateDiagnosticCenter(this.center.id, this.center).subscribe(() => this._router.navigateByUrl("/centers"));
  }
}
