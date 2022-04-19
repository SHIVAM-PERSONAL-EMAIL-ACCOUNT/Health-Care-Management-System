package org.iiht.training.sprint.healthcaresystem.repository;

import org.iiht.training.sprint.healthcaresystem.entity.DiagnosticTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiagnosticTestRepository extends JpaRepository<DiagnosticTest, Integer>{
}
