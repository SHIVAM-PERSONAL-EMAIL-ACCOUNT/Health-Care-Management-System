package org.iiht.training.sprint.healthcaresystem.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int patientId;
	private String name;
	private String phoneNo;
	private int age;
	private String gender;
	@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
	private Set<Appointment> appointments = new HashSet<>();
	
	public Patient() {}
	
	public Patient(String name, String phoneNo, int age, String gender) {
		this.name = name;
		this.phoneNo = phoneNo;
		this.age = age;
		this.gender = gender;
	}

	public Set<Appointment> getAppointments() {
		return appointments;
	}

	public void removeAppointment(Appointment appointment) {
		this.appointments.remove(appointment);
	}
	
	public void addAppointment(Appointment appointment) {
		this.appointments.add(appointment);
	}

	public int getPatientId() {
		return patientId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPhoneNo() {
		return phoneNo;
	}
	
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public String getGender() {
		return gender;
	}
	
	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", name=" + name + ", phoneNo=" + phoneNo + ", age=" + age
				+ ", gender=" + gender + "]";
	}		
}
