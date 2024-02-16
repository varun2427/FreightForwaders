package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.dto.Customer;

public interface CusRepository extends JpaRepository<Customer, Integer> {

	@Query("from Customer c where c.email = :email")
	public Customer findByEmail(@Param("email") String email);

	@Query("from Customer c where c.email = :email and c.password = :password")
	Customer login(@Param("email") String email, @Param("password") String password);

	@Modifying
	@Transactional
	@Query("UPDATE Customer SET password = :newPassword WHERE customerId = :customerId")
	public int updatePassword(@Param("customerId") int customerId, @Param("newPassword") String newPassword);

	@Transactional
	@Modifying
	@Query("UPDATE Customer e SET e.password = :password WHERE e.phoneNumber = :phoneNumber")
	public int updatePass(@Param("phoneNumber") String phoneNumber, @Param("password") String passowrd);
}
