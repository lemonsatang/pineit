package com.pineit.pineit.controller;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.pineit.pineit.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/cs/spt")
@Log4j2
public class UserController { // 사용자

    @Autowired
    UserService userService;

    // 고객문의 > 게시물 작성
    @PostMapping
    public Map<String, Object> addSc(HttpServletRequest request, MultipartHttpServletRequest mRequest)
            throws ParseException {
        log.info("ADD SC.........");

        JSONParser parser = new JSONParser();
        Object obj = parser.parse(request.getParameter("data"));
        JSONObject jsonObj = (JSONObject) obj;

        Map<String, Object> result = userService.addSc(jsonObj, mRequest);

        return result;
    }
}
