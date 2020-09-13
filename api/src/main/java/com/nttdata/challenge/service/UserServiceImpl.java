package com.nttdata.challenge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nttdata.challenge.model.User;
import com.nttdata.challenge.repository.UserRepository;
import org.springframework.core.io.Resource;

 
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
	
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}


	public User getUserById(String userId) {
		return userRepository.findByUserId(userId);
	}
}