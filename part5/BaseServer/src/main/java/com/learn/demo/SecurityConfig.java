package com.learn.demo;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;


@EnableOAuth2Sso
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	 @Override
	    public void configure(HttpSecurity http) throws Exception {
	      http
	          .logout().logoutSuccessUrl("/").and()
	          .authorizeRequests().antMatchers("/index.html", "/app.html", "/","/*.js","/*.css","/login")
	          .permitAll().anyRequest().authenticated().and()
	          .csrf()
	            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
	      http.headers().httpStrictTransportSecurity().disable();
	    }
	 
	 @Bean
	 protected OAuth2RestTemplate OAuth2RestTemplate(
	     OAuth2ProtectedResourceDetails resource, OAuth2ClientContext context) {
	   return new OAuth2RestTemplate(resource, context);
	 }
}
