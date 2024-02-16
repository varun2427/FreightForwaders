package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDAO;
import com.dao.SmsService;
import com.dto.Customer;
import com.service.EmailService;

@RestController
// @CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

	@Autowired
	CustomerDAO customerdao;

	@Autowired
	EmailService emailService;

	@Autowired
	SmsService smsService;

	@GetMapping("DisplayAllCustomer")
	public List<Customer> DisplayAllCustomer() {
		return customerdao.getAllCustomer();
	}

	@GetMapping("/login/{email}/{password}")
	public Customer login(@PathVariable("email") String email, @PathVariable("password") String password) {
		return customerdao.login(email, password);
	}

	@PutMapping("/updatePassword/{phoneNumber}/{newPassword}")
	public ResponseEntity<String> updatePassword(@PathVariable("phoneNumber") String phoneNumber,
			@PathVariable("newPassword") String password) {
		int rowsUpdated = customerdao.setPass(phoneNumber, password);
		if (rowsUpdated > 0) {
			return ResponseEntity.ok("Password updated successfully.");
		} else {
			return ResponseEntity.badRequest().body("Failed to update password.");
		}
	}

	@GetMapping("/sendsms/{phoneNumber}")
	public int sendSMS(@PathVariable("phoneNumber") String phoneNumber) {
		int min = 100000;
		int max = 999999;
		int otp = (int) (Math.random() * (max - min + 1) + min);
		String msg = "Your OTP is " + otp + ". Please verify this in your application.";
		System.out.println(otp);

		String s = smsService.sendSMS(phoneNumber, msg);
		if (s != null) {
			return otp;
		} else {
			return 0;
		}
	}

	@GetMapping("/getCustomerById/{id}")
	public Customer getCustomerById(@PathVariable("customerId") int customerId) {
		return customerdao.getCustomerById(customerId);
	}

	@PostMapping("/registerCustomer")
	public String registerUser(@RequestBody Customer user) {
		Customer CheckUser = customerdao.dispalybyEmail(user.getEmail());
		System.out.println(CheckUser);
		if (CheckUser == null) {
			Customer userData = customerdao.register(user);
			sendEmail(user);
			if (userData != null) {
				return "registration successfull";
			} else {
				return "registration Unsuccessfull";
			}
		}
		System.out.println("user exists");
		return "User Already Exists";
	}

	public ResponseEntity<String> sendEmail(Customer user) {

		String to = user.getEmail();
		String subject = "Succesfully registered";
		String text = "Hi " + user.getFirstName()
				+ ",\n\nWelcome aboard! We're thrilled to have you as part of our freight forwarding network.";
		emailService.sendSimpleMessage(to, subject, text);
		return ResponseEntity.ok("Email sent successfully.");
	}

}