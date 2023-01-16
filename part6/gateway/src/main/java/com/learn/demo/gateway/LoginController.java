package com.learn.demo.gateway;

import java.security.Principal;
import java.util.Set;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
  @RequestMapping("/login")
  public String login() {
	  return "login";
  }
  @RequestMapping("/index")
  public String index() {
	  return "index";
  }
  @RequestMapping("/")
  public String home() {
	  return "forward:/index";
  }

  public boolean hasRole(String role){
    Authentication authentication= SecurityContextHolder.getContext().getAuthentication();

    Set<String> rolesSet=AuthorityUtils.authorityListToSet(authentication.getAuthorities());

    return  rolesSet.contains(role);
  }
}
