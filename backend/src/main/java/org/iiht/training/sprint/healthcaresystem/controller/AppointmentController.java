package org.iiht.training.sprint.healthcaresystem.controller;

import java.util.List;
import java.util.Set;

import org.iiht.training.sprint.healthcaresystem.entity.Appointment;
import org.iiht.training.sprint.healthcaresystem.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@GetMapping("appointment/{id}")
    public Appointment viewAppointment (@PathVariable int id) {
        return appointmentService.viewAppointment(id);
    }

    @PostMapping("new-appointment")
    public Appointment addAppointment(@RequestBody Appointment userDetails) {
        return appointmentService.addAppointment(userDetails);
    }
    
    @PutMapping("changed-appointment")
	public Appointment updateAppointment(@RequestBody Appointment userDetails) {
    	return appointmentService.updateAppointment(userDetails);
	}
    
    @DeleteMapping("appointment")
    public void removeAppointment(@RequestBody Appointment appointment) {
    	appointmentService.removeAppointment(appointment);
	}
    
    @GetMapping("appointments/{patientName}")
    public Set<Appointment> viewAppointments(@PathVariable String patientName) {
		return appointmentService.viewAppointments(patientName);
	}
    
    @GetMapping("diagnostic-center/{centerId}/appointments-with-approval-status-{approvalStatus}")
    public List<Appointment> getAppointmentList(@PathVariable int centerId, @PathVariable Boolean approvalStatus) {
        return appointmentService.getAppointmentList(centerId, approvalStatus);
    }
}
