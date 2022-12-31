package com.learn.demo;

import java.security.Principal;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {
		
		
		@RequestMapping("/user")
		public Principal user(Principal user) {
			return user;
		}
		
		@RequestMapping("/token")
		  public Map<String,String> token(HttpSession session) {
		    return Collections.singletonMap("token", session.getId());
		  }

}
