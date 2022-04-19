package org.iiht.training.sprint.healthcaresystem.entity;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Appointment {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private LocalDate appointmentDate;
	private boolean approvalStatus;
	@OneToMany(mappedBy = "appointment", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<DiagnosticTest> diagnosticTest = new HashSet<>();
	@ManyToOne(fetch = FetchType.LAZY)
	private Patient patient;
	@ManyToOne(fetch = FetchType.LAZY)
	private DiagnosticCenter diagnosticCenter;
	
	public Appointment() {}

	public Appointment(LocalDate appointmentDate, boolean approvalStatus) {
		this.appointmentDate = appointmentDate;
		this.approvalStatus = approvalStatus;
	}

	public int getId() {
		return id;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public boolean getApprovalStatus() {
		return this.approvalStatus;
	}

	public void setApprovalStatus(boolean approvalStatus) {
		this.approvalStatus = approvalStatus;
	}

	public Set<DiagnosticTest> getDiagnosticTest() {
		return diagnosticTest;
	}

	public void addDiagnosticTest(DiagnosticTest test) {
		this.diagnosticTest.add(test);	
	}
	
	public void removeDiagnosticTest(DiagnosticTest test) {
		this.diagnosticTest.remove(test);	
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public DiagnosticCenter getDiagnosticCenter() {
		return diagnosticCenter;
	}

	public void setDiagnosticCenter(DiagnosticCenter diagnosticCenter) {
		this.diagnosticCenter = diagnosticCenter;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", appointmentDate=" + appointmentDate + ", approvalStatus="
				+ approvalStatus + "]";
	}
}
