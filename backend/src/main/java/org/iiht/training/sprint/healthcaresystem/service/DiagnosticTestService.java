package org.iiht.training.sprint.healthcaresystem.service;

import java.util.List;
//import java.util.stream.Collectors;

import javax.transaction.Transactional;

//import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticCenter;
import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticTest;
import org.iiht.training.sprint.healthcaresystem.repository.DiagnosticTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class DiagnosticTestService {

	@Autowired
	private DiagnosticTestRepository repository;
	
	public List<DiagnosticTest> getAllTest() {
		return repository.findAll();
	}
	
	public DiagnosticTest addNewTest(DiagnosticTest test) {
		return repository.save(test);
	}
	
	public DiagnosticTest updateTestDetail(DiagnosticTest test) {
		return repository.save(test);
	}
	
	public DiagnosticTest getDiagnosticTestById(int testId) {
		return repository.getById(testId);
	}
}
