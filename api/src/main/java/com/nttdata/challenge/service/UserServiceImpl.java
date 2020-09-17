package com.nttdata.challenge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nttdata.challenge.model.User;
import com.nttdata.challenge.repository.UserRepository;

import org.springframework.core.io.Resource;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

 
@Service
public class UserServiceImpl {

	@Autowired
	UserRepository userRepository;
	
/*	
	public User getUser(String name)  {
		User user = userRepository.findByAllUsers();
		return user;
	}
*/

	@Autowired
	MongoOperations mongoOperations;
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}


	public User getUserById(String userId) {
		System.out.println(userRepository.findByUserId(userId));
		return userRepository.findByUserId(userId);
	}


	public Object updateUser(User user) {
		
	Query query = new Query();
	query.addCriteria(Criteria.where("userId").is(user.getUserId()));
	System.out.println("query....." + query.toString());
	User userFromDB = mongoOperations.findOne(query, User.class);
	userFromDB.setActivationstatus(user.getActivationstatus());
	return mongoOperations.findAndReplace(query, user);
	}
}