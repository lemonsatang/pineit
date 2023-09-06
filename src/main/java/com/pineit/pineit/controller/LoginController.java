package com.pineit.pineit.controller;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/login")
@Log4j2
public class LoginController {

    // 성공
    @GetMapping("/success")
    public Map<String, Object> successHandler(HttpServletRequest req) {
        log.info("successHandler..........");
        Map<String, Object> result = new HashMap<>();

        System.out.println("=========Login USRID: " + req.getParameter("Usrid"));

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

    @PostMapping("/test")
    public Map<String, Object> test(@AuthenticationPrincipal User user, Principal principal) {
        log.info("failureHandler..........");
        Map<String, Object> result = new HashMap<>();

        System.out.println("principal: " + principal.getName());
        System.out.println("Login info: " + user.getUsername());

        result.put("result", "test");

        return result;
    }
}
