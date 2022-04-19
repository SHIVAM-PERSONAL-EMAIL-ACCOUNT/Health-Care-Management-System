package org.iiht.training.sprint.healthcaresystem.controller;

import org.iiht.training.sprint.healthcaresystem.entity.Appointment;
import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticCenter;
import org.iiht.training.sprint.healthcaresystem.service.DiagnosticCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/v1/")
public class DiagnosticCenterController {
	
	@Autowired
	private DiagnosticCenterService diagnosticCenterService;
	
	@GetMapping("all-diagnostic-center")
	public List<DiagnosticCenter> getAllDiagnosticCenter() {
		return diagnosticCenterService.getAllDiagnosticCenter();
	}
	
	@GetMapping("all-diagnostic-center/{id}")
	private DiagnosticCenter getDiagnosticCenterById(@PathVariable("id") int diagnosticCenterId) {
		return diagnosticCenterService.getDiagnosticCenterById(diagnosticCenterId);
	}
	
	@PostMapping("new-diagnostic-center")
	private DiagnosticCenter addDiagnosticCenter(@RequestBody DiagnosticCenter diagnosticCenter) {
		return diagnosticCenterService.addDiagnosticCenter(diagnosticCenter);
	}
	
	@PutMapping("changed-diagnostic-center")
	private DiagnosticCenter updateDiagnosticCenter(@RequestBody DiagnosticCenter diagnosticCenter) {
		return diagnosticCenterService.updateDiagnosticCenter(diagnosticCenter);
	}
	
	@DeleteMapping("diagnostic-center/{id}")
	private void removeDiagnosticCenter(@PathVariable("id") int id) {
		diagnosticCenterService.removeDiagnosticCenter(id);
	}
	
	/*
	@PutMapping("changed-diagnostic-center/{id}/new-test/{testId}")
	private void updateDiagnosticCenter(@PathVariable("id") int id, @PathVariable("testId") int testId) {
		diagnosticCenterService.addTest(id,testId);
	}
	
	@GetMapping("diagnostic-center/{id}/diagnostic-test-details/{testName}")
	private DiagnosticTest viewTestDetails(@PathVariable("id") int id, @PathVariable("testName") String testName) {
		return diagnosticCenterService.viewTestDetails(id, testName);
	}
	*/
	
	@GetMapping("diagnostic-center/{centerName}")
	public DiagnosticCenter getDiagnosticCenter(@PathVariable String centerName) {
		return diagnosticCenterService.getDiagnosticCenter(centerName);
	}
	
	/*
	@PostMapping("diagnostic-center/{centerId}/new-diagnostic-test/{testId}")
	public DiagnosticTest addTest(@PathVariable int centerId, @PathVariable int testId) {
		return diagnosticCenterService.addTest(centerId, testId);
	}
	*/
	
	@GetMapping("diagnostic-center/{centerName}/appointments")
	public List<Appointment> getListOfAppointments(@PathVariable String centerName) {
		return diagnosticCenterService.getListOfAppointments(centerName);
	}
}
