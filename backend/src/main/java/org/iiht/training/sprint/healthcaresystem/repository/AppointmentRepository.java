package org.iiht.training.sprint.healthcaresystem.repository;

import org.iiht.training.sprint.healthcaresystem.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {}
