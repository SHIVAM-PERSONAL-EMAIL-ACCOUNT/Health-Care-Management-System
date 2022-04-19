package org.iiht.training.sprint.healthcaresystem.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class DiagnosticTest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String testName;
	private double testPrice;
	private String normalValue;
	private String units;
	@OneToOne(mappedBy = "test", fetch = FetchType.LAZY)
	private TestResult result;
	@ManyToOne(fetch = FetchType.LAZY)
	private Appointment appointment;
	
	public DiagnosticTest() {};
	
	public DiagnosticTest(String testName, double testPrice, String normalValue, String units) {
		this.testName = testName;
		this.testPrice = testPrice;
		this.normalValue = normalValue;
		this.units = units;
	}
	
	public TestResult getResult() {
		return result;
	}

	public void setResult(TestResult result) {
		this.result = result;
	}
	
	public String getTestName() {
		return testName;
	}
	
	public void setTestName(String testName) {
		this.testName = testName;
	}
	
	public double getTestPrice() {
		return testPrice;
	}
	
	public void setTestPrice(double testPrice) {
		this.testPrice = testPrice;
	}
	
	public String getNormalValue() {
		return normalValue;
	}
	
	public void setNormalValue(String normalValue) {
		this.normalValue = normalValue;
	}
	
	public String getUnits() {
		return units;
	}
	
	public void setUnits(String units) {
		this.units = units;
	}
	
	public int getId() {
		return id;
	}

	public Appointment getAppointment() {
		return appointment;
	}

	public void setAppointment(Appointment appointment) {
		this.appointment = appointment;
	}

	@Override
	public String toString() {
		return "DiagnosticTest [id=" + id + ", testName=" + testName + ", testPrice=" + testPrice + ", normalValue="
				+ normalValue + ", units=" + units + "]";
	}
}
