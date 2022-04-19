package org.iiht.training.sprint.healthcaresystem.service;

import org.iiht.training.sprint.healthcaresystem.entity.TestResult;
import org.iiht.training.sprint.healthcaresystem.repository.TestResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestResultService {

	@Autowired
	private TestResultRepository repository;
	
	public TestResult addTestResult(TestResult result) {
		return repository.save(result);
	}
	
	public TestResult updateTestResult(TestResult result) {
		return repository.save(result);
	}
	
	public void removeTestResult(int id) {
		repository.deleteById(id);
	}
}
