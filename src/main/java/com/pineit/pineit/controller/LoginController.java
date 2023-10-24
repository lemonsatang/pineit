package com.pineit.pineit.controller;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pineit.pineit.dto.UserDTO;
import com.pineit.pineit.service.LoginService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/login")
@Log4j2
public class LoginController { // 로그인

    @Autowired
    LoginService loginService;

    // 성공
    @GetMapping("/success")
    public Map<String, Object> successHandler(HttpServletRequest req) {
        log.info("successHandler..........");
        Map<String, Object> result = new HashMap<>();

        result.put("result", "Success");

        return result;
    }

    // 실패
    @GetMapping("/failure")
    public Map<String, Object> failureHandler() {
        log.info("failureHandler..........");
        Map<String, Object> result = new HashMap<>();

        result.put("result", "Failure");

        return result;
    }

    @PostMapping("/getUserInfo")
    public Map<String, Object> getUserInfo(@AuthenticationPrincipal User user, Principal principal) {
        log.info("failureHandler..........");
        Map<String, Object> result = new HashMap<>();

        System.out.println("principal: " + principal.getName());
        System.out.println("Login info: " + user.getUsername());

        UserDTO info = loginService.getUserInfo(principal.getName());

        result.put("info", info);

        return result;
    }
}
