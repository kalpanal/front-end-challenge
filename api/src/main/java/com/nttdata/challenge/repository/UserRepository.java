package com.nttdata.challenge.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nttdata.challenge.model.User;


@Repository
public interface UserRepository extends MongoRepository<User, String> {

	//User findByUser(String name);
	List<User> findAll();

	User findByUserId(String userId);	
	
}
