package com.learn.demo.gateway;

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
}
