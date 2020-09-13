package com.nttdata.challenge.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nttdata.challenge.repository.UserRepository;
import com.nttdata.challenge.service.UserServiceImpl;

import org.springframework.core.io.Resource;

@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	UserRepository userRepository;


	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	UserServiceImpl userServiceImpl;

	@GetMapping(value = "/findAllUsers")
	public @ResponseBody ResponseEntity getAllUsers()
			throws IOException {
		try {			
			logger.info("Inside find all users...");

			return new ResponseEntity<>(userServiceImpl.getAllUsers(),
					HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@GetMapping(value = "/findByUserId")
	public @ResponseBody ResponseEntity getAllUsers(@RequestParam String userId)
			throws IOException {
		try {			
			logger.info("Inside findByUserId..."+userId);
			return new ResponseEntity<>(userServiceImpl.getUserById(userId),
					HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}


}
