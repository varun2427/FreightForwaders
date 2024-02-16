package com.dao; 
 
import java.util.List; 
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service; 
 
import com.dto.Customer; 
import com.dto.HouseShifting; 
 
@Service 
public class HouseDAO { 
  
 @Autowired 
 HouseRepository houseRepo; 
  
   
 public void register(HouseShifting hs) { 
  houseRepo.save(hs); 
 } 
 public List<HouseShifting> getAllDetails(){ 
  return houseRepo.findAll(); 
 } 
  public HouseShifting dispalybyEmail(String email) { 
    
    
                         return  houseRepo.findByEmail(email); 
 
   
    
  } 
  
 
}