import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPatientsComponent } from './Components/all-patients/all-patients.component';
import { AdminComponent } from './Components/admin/admin.component';
import { BookAppointmentComponent } from './Components/book-appointment/book-appointment.component';
import { CreateDiagnosticCenterComponent } from './Components/create-diagnostic-center/create-diagnostic-center.component';
import { CreateDiagnosticTestComponent } from './Components/create-diagnostic-test/create-diagnostic-test.component';
import { FirstPageComponent } from './Components/first-page/first-page.component';
import { PatientComponent } from './Components/patient/patient.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { UpdateDiagnosticCenterComponent } from './Components/update-diagnostic-center/update-diagnostic-center.component';
import { UpdateDiagnosticTestComponent } from './Components/update-diagnostic-test/update-diagnostic-test.component';
import { UpdatePatientComponent } from './Components/update-patient/update-patient.component';
import { CreatePatientsComponent } from './Components/create-patients/create-patients.component';
import { AllDiagnosticCentersComponent } from './Components/all-diagnostic-centers/all-diagnostic-centers.component';
import { AlltestsComponent } from './Components/alltests/alltests.component';
import { AllAppointmentsComponent } from './Components/all-appointments/all-appointments.component';
import { UpdateAppointmentComponent } from './Components/update-appointment/update-appointment.component';

const routes: Routes = [
  {path: "sign-up", component: SignUpComponent},
  {path: "admin", component: AdminComponent},
  {path: "new-appointment", component: BookAppointmentComponent},
  {path: "new-center", component: CreateDiagnosticCenterComponent},
  {path: "new-test", component: CreateDiagnosticTestComponent},
  {path: "patient/:patientId", component: PatientComponent},
  {path: "update/center/:centerId", component: UpdateDiagnosticCenterComponent},
  {path: "update/test/:testId", component: UpdateDiagnosticTestComponent},
  {path: "updatePatient/:patientId", component: UpdatePatientComponent},
  {path: "tests", component: AlltestsComponent},
  {path: "patients", component: AllPatientsComponent},
  {path: "update/patient/:patientId", component: UpdatePatientComponent},
  {path: "new-patient", component: CreatePatientsComponent},
  {path: "appointments", component: AllAppointmentsComponent},
  {path: "appointment/:appointmentId", component: UpdateAppointmentComponent},
  {path: "centers", component: AllDiagnosticCentersComponent},
  {path: "", component: FirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
