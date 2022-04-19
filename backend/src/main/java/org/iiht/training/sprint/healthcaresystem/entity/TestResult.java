package org.iiht.training.sprint.healthcaresystem.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class TestResult {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private double testReading;
	private String condition;
	@OneToOne(fetch = FetchType.LAZY)
	private DiagnosticTest test;
	
	public TestResult() {}
	
	public TestResult(double testReading, String condition) {
		this.testReading = testReading;
		this.condition = condition;
	}

	public int getId() {
		return id;
	}
	
	public DiagnosticTest getTest() {
		return test;
	}

	public void setTest(DiagnosticTest test) {
		this.test = test;
	}

	public double getTestReading() {
		return testReading;
	}
	
	public void setTestReading(double testReading) {
		this.testReading = testReading;
	}
	
	public String getCondition() {
		return condition;
	}
	
	public void setCondition(String condition) {
		this.condition = condition;
	}

	@Override
	public String toString() {
		return "TestResult [id=" + id + ", testReading=" + testReading + ", condition=" + condition + "]";
	}
}
