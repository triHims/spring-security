package com.learn.demo.resource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	  protected void configure(HttpSecurity http) throws Exception {
	    http.cors().and().authorizeRequests()
	      .anyRequest().authenticated();
	  }
	
	 @Bean
	  HeaderHttpSessionStrategy sessionStrategy() {
	    return new HeaderHttpSessionStrategy();
	  }
}


	  