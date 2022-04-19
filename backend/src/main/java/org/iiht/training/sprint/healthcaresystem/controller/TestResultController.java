package org.iiht.training.sprint.healthcaresystem.controller;

import org.iiht.training.sprint.healthcaresystem.entity.TestResult;
import org.iiht.training.sprint.healthcaresystem.service.TestResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/")
public class TestResultController {
	
	@Autowired
	private TestResultService service;
	
	@PostMapping("new-test-result")
	public TestResult addTestResult(@RequestBody TestResult result) {
		return service.addTestResult(result);
	}
	
	@PutMapping("changed-test-result")
	public TestResult updateTestResult(@RequestBody TestResult result) {
		return service.updateTestResult(result);
	}
	
	@DeleteMapping("test-result/{id}")
	public void removeTestResult(@PathVariable int id) {
		service.removeTestResult(id);
	}	
}
