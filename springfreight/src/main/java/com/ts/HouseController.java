package com.ts; 
 
import java.util.List; 
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.PathVariable; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import org.springframework.web.bind.annotation.RestController; 
 
import com.dao.HouseDAO; 
import com.dto.Customer; 
import com.dto.HouseShifting; 
 
@RestController 
public class HouseController { 
  
 @Autowired 
    HouseDAO housedao; 
  
 @PostMapping("/houseService") 
 public String registerCustomer(@RequestBody HouseShifting hs){ 
 housedao.register(hs); 
 return "details noted"; 
} 
 @GetMapping("/displayAllDetails")     //display method 
 public List<HouseShifting> displayAllDetails(){ 
  return housedao.getAllDetails(); 
 } 
  
 @GetMapping("/displayEmpByEmail/{email}")  
 public HouseShifting  displayEmpByEmail(@PathVariable("email") String email){ 
  
  return  housedao.dispalybyEmail(email); 
  
  
 } 
 
}