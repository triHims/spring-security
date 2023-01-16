package com.learn.demo.resource;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token",
		"x-requested-with", "x-xsrf-token" })
public class ResourceController {
	@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token",
			"x-requested-with", "x-xsrf-token" })	
	@GetMapping
	public Message home() {
		return new Message("Hello World!");
	}
}
