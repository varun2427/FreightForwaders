package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.dto.Customer;

@Service
public class CustomerDAO {

	@Autowired
	CusRepository CustomerRepo;

	public List<Customer> getAllCustomer() {
		return CustomerRepo.findAll();
	}

	public Customer register(Customer customer) {
		String password = customer.getPassword();
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(password);
		customer.setPassword(hashedPassword);

		return CustomerRepo.save(customer);
	}
	

	public Customer dispalybyEmail(String email) {
		Customer customer = CustomerRepo.findByEmail(email);
		return customer;
	}

	public Customer login(String email, String password) {
		System.out.println("inside DAO");
	Customer customer = CustomerRepo.findByEmail(email);
	System.out.println(customer);
    if (customer == null) {
    	System.out.println("user not found");
        return null; // User not found
    }
    String hashedPassword = customer.getPassword();
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    if (passwordEncoder.matches(password, hashedPassword)) {
    	System.out.println("user found");
        return customer; // Passwords match, login successful
    } else {
    	System.out.println("password incorrect");
        return null; // Passwords don't match, login failed
    }
	}

	public Customer getCustomerById(int customerId) {
		Customer customer = new Customer();
		return CustomerRepo.findById(customerId).orElse(customer);
	}

	public int updatePassword(int customerId, String password) {
		
	    return CustomerRepo.updatePassword(customerId, password);
	}

	public int setPass(String phoneNumber, String password) {
			 return CustomerRepo.updatePass(phoneNumber, password);
	}
	
}