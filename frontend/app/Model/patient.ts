import { Appointment } from "./appointment";

export class Patient {
    patientId!: number;
    name!: String;
    phoneNo!: String;
    age!: number;
    gender!: String;
    username!: String;
    password!: String;
    appointments: Appointment[] = [];   
}