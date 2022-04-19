package org.iiht.training.sprint.healthcaresystem.repository;

import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiagnosticCenterRepository extends JpaRepository<DiagnosticCenter, Integer> {
	DiagnosticCenter getById(int diagnosticCenterId);
	DiagnosticCenter getByName(String centerName);
}
