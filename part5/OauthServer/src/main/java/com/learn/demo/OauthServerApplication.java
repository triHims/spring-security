package com.learn.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@SpringBootApplication
@EnableAuthorizationServer
@EnableResourceServer // Secure all the end points except /oauth/
public class OauthServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OauthServerApplication.class, args);
	}

}
