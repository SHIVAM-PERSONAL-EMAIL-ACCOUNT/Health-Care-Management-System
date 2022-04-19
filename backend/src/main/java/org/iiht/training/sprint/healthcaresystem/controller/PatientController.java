package org.iiht.training.sprint.healthcaresystem.controller;

import org.iiht.training.sprint.healthcaresystem.entity.Patient;
import org.iiht.training.sprint.healthcaresystem.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/")
public class PatientController {

	@Autowired
	private PatientService service;
	
	@PostMapping("new-patient")
	public Patient registerPatient(@RequestBody Patient patient) {
		return service.registerPatient(patient);
	}
	
	@PutMapping("changed-patient")
	public Patient updatePatientDetails(@RequestBody Patient patient) {
		return service.updatePatientDetails(patient);
	}
	
	@GetMapping("patient/{patientUserName}")
	public Patient viewPatient(@PathVariable String patientUserName) {
		return service.viewPatient(patientUserName);
	}
}
