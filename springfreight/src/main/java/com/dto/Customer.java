package com.dto;
import javax.persistence.Column;import javax.persistence.Entity;
import javax.persistence.GeneratedValue;import javax.persistence.Id;
@Entity 
public class Customer { 
 @Id@GeneratedValue private int customerId;
 @Column(length=50) private String firstName;
 @Column(length=50) private String lastName;
 @Column(length=50) private String phoneNumber;
 @Column(length=50) private String address;
 	private String country;  
 	private String state;
  @Column(length=50)  private String city;
  @Column(length=50) private String pincode;
 @Column(length=50) private String email;
 @Column() private String password;

 
 public Customer() {}

 public Customer(int customerId, String firstName, String lastName, String phoneNumber, String address,
   String country, String state, String city, String pincode, String email, String password) {  super();
  this.customerId = customerId;  this.firstName = firstName;
  this.lastName = lastName;  this.phoneNumber = phoneNumber;
  this.address = address;  this.country = country;
  this.state = state;  this.city = city;
  this.pincode = pincode;  this.email = email;
  this.password = password;
 }

 public int getCustomerId() {
  return customerId; }


 public void setCustomerId(int customerId) {  this.customerId = customerId;
 }

 public String getFirstName() {
  return firstName; }


 public void setFirstName(String firstName) {
  this.firstName = firstName; }


 public String getLastName() {
  return lastName;
 }

 public void setLastName(String lastName) {
  this.lastName = lastName; }


 public String getPhoneNumber() {
  return phoneNumber; }



 public void setPhoneNumber(String phoneNumber) {  this.phoneNumber = phoneNumber;
 }


 public String getAddress() {
  return address; }


 public void setAddress(String address) {  this.address = address;
 }

 public String getCountry() {
  return country; }


 public void setCountry(String country) {  this.country = country;
 }

 public String getState() {
  return state; }


 public void setState(String state) {  this.state = state;
 }

 public String getCity() {
  return city; }


 public void setCity(String city) {  this.city = city;
 }

 public String getPincode() {
  return pincode;
 }


 public void setPincode(String pincode) {  this.pincode = pincode;
 }


 public String getEmail() {  return email;
 }

 public void setEmail(String email) {
  this.email = email; }


 public String getPassword() {  return password;
 }

 public void setPassword(String password) {
  this.password = password; }


 @Override public String toString() {
  return "Customer [customerId=" + customerId + ", firstName=" + firstName + ", lastName=" + lastName    + ", phoneNumber=" + phoneNumber + ", address=" + address + ", country=" + country + ", state=" + state
    + ", city=" + city + ", pincode=" + pincode + ", email=" + email + ", password=" + password + "]"; }
}
