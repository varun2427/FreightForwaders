package com.dao; 
 
 import org.springframework.data.jpa.repository.JpaRepository; 
 import org.springframework.stereotype.Repository; 
 
 import com.dto.Customer; 
 import com.dto.HouseShifting; 
 
 @Repository 
 public interface HouseRepository extends JpaRepository<HouseShifting,Integer> { 
 
  HouseShifting findByEmail(String email);  
 
}