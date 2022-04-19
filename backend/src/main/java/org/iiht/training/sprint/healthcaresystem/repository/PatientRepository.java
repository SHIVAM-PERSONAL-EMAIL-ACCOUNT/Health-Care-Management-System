package org.iiht.training.sprint.healthcaresystem.repository;

import org.iiht.training.sprint.healthcaresystem.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
	Patient findByName(String patientUserName);
}
