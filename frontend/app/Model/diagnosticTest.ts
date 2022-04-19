import { Appointment } from "./appointment";

export class DiagnosticTest {
    id!: number;
    testName!: String;
    testPrice!: number;
    normalValue!: String;
    units!: String
    diagnosticTestReading: String = "To Be Updated";
    condition: String = "To Be Updated";
}