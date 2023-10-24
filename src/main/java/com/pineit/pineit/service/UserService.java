package com.pineit.pineit.service;

import java.util.Map;

import org.json.simple.JSONObject;
import org.springframework.web.multipart.MultipartHttpServletRequest;

public interface UserService {

    Map<String, Object> addSc(JSONObject obj, MultipartHttpServletRequest mRequest);

}
