package com.dto;
import java.util.Date;
import javax.persistence.Column;import javax.persistence.Entity;
import javax.persistence.GeneratedValue;import javax.persistence.Id;
@Entity
public class HouseShifting { 
 @Id@GeneratedValue private int hsId;
 @Column(length=100)
 private String fromAddress; @Column(length=100)
 private String toAddress; java.util.Date schdeuledDate;
 @Column(length=50) private String fromfloorNumber;
 @Column(length=50) private String tofloorNumber;
 @Column(length=50) private String fromflat;
 @Column(length=50) private String toflat;
 private  String email; public HouseShifting() {}
 public HouseShifting(int hsId, String fromAddress, String toAddress, Date schdeuledDate, String fromfloorNumber,   String tofloorNumber, String fromflat, String toflat, String email) {
  super();  this.hsId = hsId;
  this.fromAddress = fromAddress;  this.toAddress = toAddress;
  this.schdeuledDate = schdeuledDate;  this.fromfloorNumber = fromfloorNumber;
  this.tofloorNumber = tofloorNumber;  this.fromflat = fromflat;
  this.toflat = toflat;  this.email = email;
 } public int getHsId() {
  return hsId; }
 public void setHsId(int hsId) {  this.hsId = hsId;
 } public String getFromAddress() {
  return fromAddress; }
 public void setFromAddress(String fromAddress) {  this.fromAddress = fromAddress;
 } public String getToAddress() {
  return toAddress; }
 public void setToAddress(String toAddress) {  this.toAddress = toAddress;
 } public java.util.Date getSchdeuledDate() {
  return schdeuledDate; }
 public void setSchdeuledDate(java.util.Date schdeuledDate) {  this.schdeuledDate = schdeuledDate;
 } public String getFromfloorNumber() {
  return fromfloorNumber; }
 public void setFromfloorNumber(String fromfloorNumber) {  this.fromfloorNumber = fromfloorNumber;
 } public String getTofloorNumber() {
  return tofloorNumber; }
 public void setTofloorNumber(String tofloorNumber) {  this.tofloorNumber = tofloorNumber;
 } public String getFromflat() {
  return fromflat; }
 public void setFromflat(String fromflat) {  this.fromflat = fromflat;
 } public String getToflat() {
  return toflat; }
 public void setToflat(String toflat) {  this.toflat = toflat;
 } public String getEmail() {
  return email; }
 public void setEmail(String email) {  this.email = email;
 } @Override
 public String toString() {  return "HouseShifting [hsId=" + hsId + ", fromAddress=" + fromAddress + ", toAddress=" + toAddress
    + ", schdeuledDate=" + schdeuledDate + ", fromfloorNumber=" + fromfloorNumber + ", tofloorNumber="    + tofloorNumber + ", fromflat=" + fromflat + ", toflat=" + toflat + ", email=" + email + "]";
 } 
}