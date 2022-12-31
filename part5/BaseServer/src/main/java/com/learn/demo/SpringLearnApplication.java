package com.learn.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;

@SpringBootApplication
@EnableZuulProxy
public class SpringLearnApplication {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(SpringLearnApplication.class, args);
	}

}
