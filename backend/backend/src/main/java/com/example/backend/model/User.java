package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;
    private String firstname;
    private String lastname ;
    private String email;
    private String mobileno;
    private String gender;

    public User(int uid,String firstname,String lastname,String address,String email,String mobileno,String gender){
    super();
    this.uid=uid;
    this.firstname=lastname;
    this.lastname=lastname;
    this.email=email;
    this.mobileno=mobileno;
    this.gender=gender;
    }


    public int getID() {
        return uid;
    }

    public void setId(int uid) {
        this.uid = uid;
    }

    public User() {
    }


    
    public String getGender() {
        return gender;
    }



    public void setGender(String gender) {
        this.gender = gender;
    }



    public String getFirstname() {
        return firstname;
    }


    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }


    public String getLastname() {
        return lastname;
    }



    public void setLastname(String lastname) {
        this.lastname = lastname;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNo() {
        return mobileno;
    }

    public void setMobileNo(String mobileno) {
        this.mobileno = mobileno;
    }

}
