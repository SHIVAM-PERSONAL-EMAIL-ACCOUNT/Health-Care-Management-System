package org.iiht.training.sprint.healthcaresystem.service;


import org.iiht.training.sprint.healthcaresystem.entity.Patient;
import org.iiht.training.sprint.healthcaresystem.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

	@Autowired
	private PatientRepository repository;
	
	public Patient registerPatient(Patient patient) {
		return repository.save(patient);
	}
	
	public Patient updatePatientDetails(Patient patient) {
		return repository.save(patient);
	}
	
	public Patient viewPatient(String patientUserName) {
		return repository.findByName(patientUserName);
	}
}
