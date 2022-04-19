package org.iiht.training.sprint.healthcaresystem.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.iiht.training.sprint.healthcaresystem.entity.Appointment;
import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticCenter;
import org.iiht.training.sprint.healthcaresystem.entity.Patient;
import org.iiht.training.sprint.healthcaresystem.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;
	@Autowired
	private PatientService patientService;
	@Autowired
	private DiagnosticCenterService centerService;

	public Appointment viewAppointment(int appointmentId) {
		return appointmentRepository.findById(appointmentId).get();
	}
	
	public List<Appointment> getAppointmentList(int centerId, Boolean approvalStatus) {
        DiagnosticCenter center = centerService.getDiagnosticCenterById(centerId);
        return center.getAppointments().stream().filter(appointment -> appointment.getApprovalStatus() == approvalStatus).collect(Collectors.toList());
    }

	public Appointment addAppointment(Appointment appointment) {
		return appointmentRepository.save(appointment);
	}
	
	public Appointment updateAppointment(Appointment appointment) {
		return appointmentRepository.save(appointment);	
	}
	
	public void removeAppointment(Appointment appointment) {
		 appointmentRepository.delete(appointment);
    }
	
	public Set<Appointment> viewAppointments(String patientName) {
		Patient patient = patientService.viewPatient(patientName);
		return patient.getAppointments();
	}
}
