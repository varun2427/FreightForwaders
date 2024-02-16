package com.dto;
import java.util.Date;
import javax.persistence.Column;import javax.persistence.Entity;
import javax.persistence.GeneratedValue;import javax.persistence.Id;
@Entity
public class OfficeShifting { 
 @Id@GeneratedValue private int osId;
 @Column(length=100)
 private String fromAddress; @Column(length=100)
 private String toAddress; java.util.Date schdeuledDate;
 @Column(length=50) private String floorNumber;
  public OfficeShifting() {}
 public OfficeShifting(int osId, String fromAddress, String toAddress, Date schdeuledDate, String floorNumber) {
  super();  this.osId = osId;
  this.fromAddress = fromAddress;  this.toAddress = toAddress;
  this.schdeuledDate = schdeuledDate;  this.floorNumber = floorNumber;
 }
 public int getOsId() {  return osId;
 }
 public void setOsId(int osId) {
  this.osId = osId;
 }
 public String getFromAddress() {  return fromAddress;
 }
 public void setFromAddress(String fromAddress) {
  this.fromAddress = fromAddress; }
 public String getToAddress() {
  return toAddress; }
 public void setToAddress(String toAddress) {
  this.toAddress = toAddress;
 }
 public java.util.Date getSchdeuledDate() {  return schdeuledDate;
 }
 public void setSchdeuledDate(java.util.Date schdeuledDate) {  this.schdeuledDate = schdeuledDate;
 }
 public String getFloorNumber() {  return floorNumber;
 }
 public void setFloorNumber(String floorNumber) {  this.floorNumber = floorNumber;
 }
 @Override public String toString() {
  return "OfficeShifting [osId=" + osId + ", fromAddress=" + fromAddress + ", toAddress=" + toAddress    + ", schdeuledDate=" + schdeuledDate + ", floorNumber=" + floorNumber + "]";
 }}