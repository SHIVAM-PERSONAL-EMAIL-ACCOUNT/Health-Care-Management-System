package org.iiht.training.sprint.healthcaresystem.boot;

import java.time.LocalDate;

import org.iiht.training.sprint.healthcaresystem.entity.Appointment;
import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticCenter;
import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticTest;
import org.iiht.training.sprint.healthcaresystem.entity.Patient;
import org.iiht.training.sprint.healthcaresystem.entity.TestResult;
import org.iiht.training.sprint.healthcaresystem.service.AppointmentService;
import org.iiht.training.sprint.healthcaresystem.service.DiagnosticCenterService;
import org.iiht.training.sprint.healthcaresystem.service.DiagnosticTestService;
import org.iiht.training.sprint.healthcaresystem.service.PatientService;
import org.iiht.training.sprint.healthcaresystem.service.TestResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Boot implements CommandLineRunner{

	@Autowired
	private DiagnosticCenterService centerService;
	@Autowired
	private PatientService patientService;
	@Autowired
	private DiagnosticTestService testService;
	@Autowired
	private AppointmentService appointmentService;
	@Autowired
	private TestResultService resultService;
	
	@Override
	public void run(String... args) throws Exception {
		
		
		
		// Diagnostic Center is created
		DiagnosticCenter center1 = new DiagnosticCenter("Centre - Alliganj", "0522-2376", "Floor 7, Pearl Building, Alliganj, Lucknow", "test.alliganj@company.com");
		DiagnosticCenter center2 = new DiagnosticCenter("Centre - Hazratganj", "0522-2385", "Ground Floor, Jamal Plaza, Hazratganj, Lucknow", "test.hazratganj.com@company.com");
		
		
		
		// Diagnostic Center is saved
		centerService.addDiagnosticCenter(center1);
		centerService.addDiagnosticCenter(center2);
		
		
		
		// Diagnostic Test is created
		DiagnosticTest test1 = new DiagnosticTest("Blood Pressure Test", 500.0, "Normal", "10");
		DiagnosticTest test2 = new DiagnosticTest("Diabetes Test", 2000.0, "Normal", "50");
		
		
		
		// Diagnostic test is saved
		testService.addNewTest(test1);
		testService.addNewTest(test2);
		
		
		
		// Diagnostic test result is created
		TestResult testResult1 = new TestResult(0.0, "Fine");
		TestResult testResult2 = new TestResult(0.1, "Okay");
		
		
		
		// Saving test results
		resultService.addTestResult(testResult1);
		resultService.addTestResult(testResult2);
		
		
		
		// Adding test result to test
		testResult1.setTest(test1);
		testResult2.setTest(test2);
		
		
		
		// Updating test results
		resultService.updateTestResult(testResult1);
		resultService.updateTestResult(testResult2); 
		
		
		
		// Making Patient
		Patient patient1 = new Patient("Shivam", "917355371208", 22, "Male");
		Patient patient2 = new Patient("Jessica", "1003785677", 28, "Non-Binary");
		
		
		
		// Saving patient
		patientService.registerPatient(patient1);
		patientService.registerPatient(patient2);

		
		
		// Creating Appointment
		Appointment appointment1 = new Appointment(LocalDate.now(), true);
		Appointment appointment2 = new Appointment(LocalDate.now(), true);
		Appointment appointment3 = new Appointment(LocalDate.now(), false);
		
		
		
		// Saving Appointment
		appointmentService.addAppointment(appointment1);
		appointmentService.addAppointment(appointment2);
		appointmentService.addAppointment(appointment3);
		
		
		
		// Adding appointment to patient
		appointment1.setPatient(patient1);
		appointment2.setPatient(patient2);
		appointment3.setPatient(patient2);

		
		
		// Update Appointment
		appointmentService.updateAppointment(appointment1);
		appointmentService.updateAppointment(appointment2);
		appointmentService.updateAppointment(appointment3);

		
		
		
		// Adding appointment to Diagnostic center
		appointment1.setDiagnosticCenter(center1);
		appointment2.setDiagnosticCenter(center1);
		appointment3.setDiagnosticCenter(center2);
		
		
		
		// Update Appointment
		appointmentService.updateAppointment(appointment1);
		appointmentService.updateAppointment(appointment2);
		appointmentService.updateAppointment(appointment3);
		
		
		
		// Adding appointment to Diagnostic Test
		test1.setAppointment(appointment1);
		test2.setAppointment(appointment2);
			
		
		
		// Updating diagnostic test
		testService.updateTestDetail(test1);
		testService.updateTestDetail(test2);	
	}	
}
