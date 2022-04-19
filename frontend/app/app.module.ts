import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/root/app.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { PatientComponent } from './Components/patient/patient.component';
import { BookAppointmentComponent } from './Components/book-appointment/book-appointment.component';
import { UpdatePatientComponent } from './Components/update-patient/update-patient.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ViewDiagnosticCenterComponent } from './Components/view-diagnostic-center/view-diagnostic-center.component';
import { UpdateDiagnosticCenterComponent } from './Components/update-diagnostic-center/update-diagnostic-center.component';
import { CreateDiagnosticCenterComponent } from './Components/create-diagnostic-center/create-diagnostic-center.component';
import { CreateDiagnosticTestComponent } from './Components/create-diagnostic-test/create-diagnostic-test.component';
import { UpdateDiagnosticTestComponent } from './Components/update-diagnostic-test/update-diagnostic-test.component';
import { FirstPageComponent } from './Components/first-page/first-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllPatientsComponent } from './Components/all-patients/all-patients.component';
import { DeletePatientComponent } from './Components/delete-patient/delete-patient.component';
import { CreatePatientsComponent } from './Components/create-patients/create-patients.component';
import { AllDiagnosticCentersComponent } from './Components/all-diagnostic-centers/all-diagnostic-centers.component';
import { AlltestsComponent } from './Components/alltests/alltests.component';
import { AllAppointmentsComponent } from './Components/all-appointments/all-appointments.component';
import { UpdateAppointmentComponent } from './Components/update-appointment/update-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PatientComponent,
    BookAppointmentComponent,
    UpdatePatientComponent,
    AdminComponent,
    ViewDiagnosticCenterComponent,
    UpdateDiagnosticCenterComponent,
    CreateDiagnosticCenterComponent,
    CreateDiagnosticTestComponent,
    UpdateDiagnosticTestComponent,
    FirstPageComponent,
    AllPatientsComponent,
    DeletePatientComponent,
    CreatePatientsComponent,
    AllDiagnosticCentersComponent,
    AlltestsComponent,
    AllAppointmentsComponent,
    UpdateAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
