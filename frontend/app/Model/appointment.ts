import { DiagnosticCenter } from "./diagnosticCenter";
import { DiagnosticTest } from "./diagnosticTest";
import { Patient } from "./patient";

export class Appointment {
    id!: number;
    appointmentDate!: Date;
    approvalStatus!: boolean;
    diagnosticTest: DiagnosticTest = new DiagnosticTest();
    patient: Patient = new Patient();
    diagnosticCenter: DiagnosticCenter = new DiagnosticCenter();
}