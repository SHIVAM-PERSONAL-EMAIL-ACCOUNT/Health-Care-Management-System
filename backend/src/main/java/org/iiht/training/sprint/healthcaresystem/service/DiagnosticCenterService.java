package org.iiht.training.sprint.healthcaresystem.service;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
//import java.util.Set;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.iiht.training.sprint.healthcaresystem.entity.Appointment;
import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticCenter;
//import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticTest;
import org.iiht.training.sprint.healthcaresystem.repository.DiagnosticCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
@Transactional
public class DiagnosticCenterService {

	@Autowired
	private DiagnosticCenterRepository diagnosticCenterRepository;
	
	public List<DiagnosticCenter> getAllDiagnosticCenter() {
		List<DiagnosticCenter> diagnosticCenters = new ArrayList<>();
		diagnosticCenterRepository.findAll().forEach(diagnosticCenters::add);
		return diagnosticCenters;
	}
	
	public DiagnosticCenter addDiagnosticCenter(DiagnosticCenter diagnosticCenter) {
		return diagnosticCenterRepository.save(diagnosticCenter);
	}

	public DiagnosticCenter getDiagnosticCenterById(int diagnosticCenterId) {
		return diagnosticCenterRepository.getById(diagnosticCenterId);
	}

	public DiagnosticCenter updateDiagnosticCenter(DiagnosticCenter diagnosticCenter) {
		return diagnosticCenterRepository.save(diagnosticCenter);
	}

	public void removeDiagnosticCenter(int id) {
		diagnosticCenterRepository.deleteById(id);
	}

	public DiagnosticCenter getDiagnosticCenter(String centerName) {
		return diagnosticCenterRepository.getByName(centerName);
	}
	
	public List<Appointment> getListOfAppointments(String centerName) {
		DiagnosticCenter center = diagnosticCenterRepository.getByName(centerName);
		return center.getAppointments().stream().collect(Collectors.toList());
	}
}
