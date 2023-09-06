package com.pineit.pineit.service;

import java.util.Optional;

import com.pineit.pineit.entity.USRLST;

public interface UserService {

    Optional<USRLST> findOne(String insertedUserId);

}
