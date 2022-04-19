package org.iiht.training.sprint.healthcaresystem.controller;

import java.util.List;

import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticTest;
import org.iiht.training.sprint.healthcaresystem.service.DiagnosticTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/")
public class DiagnosticTestController {

	@Autowired
	private DiagnosticTestService service;
	
	@GetMapping("all-diagnostic-test")
	public List<DiagnosticTest> getAllTest() {
		return service.getAllTest();
	}
	
	@PostMapping("new-diagnostic-test")
	public DiagnosticTest addNewTest(@RequestBody DiagnosticTest test) {
		return service.addNewTest(test);
	}

	@PutMapping("changed-diagnostic-test")
	public DiagnosticTest updateTestDetail(@RequestBody DiagnosticTest test) {
		return service.updateTestDetail(test);
	}
}

