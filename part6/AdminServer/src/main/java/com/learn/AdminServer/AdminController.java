package main.java.com.learn.AdminServer;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
		@RequestMapping("/user")
		public Map<String,Object> user(Principal user){
			HashMap<String,Object> model = new HashMap<>();
			model.put("name", user.getName());
			Authentication authentication = (Authentication) user;
			model.put("roles", AuthorityUtils.authorityListToSet(authentication.getAuthorities()));
			return model;
		}
}
