package com.nttdata.challenge.model;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;


@Document(collection = "user")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class User {

	@JsonIgnore
	@Id
	private ObjectId id;
	@Indexed
	private String userId;
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getActivationstatus() {
		return activationstatus;
	}

	public void setActivationstatus(String activationstatus) {
		this.activationstatus = activationstatus;
	}

	public String getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}

	private String name;
	private String activationstatus;
	private String birthdate;

	
	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

}

