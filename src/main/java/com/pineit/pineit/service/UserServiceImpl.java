package com.pineit.pineit.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pineit.pineit.entity.USRLST;
import com.pineit.pineit.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Transactional
@Log4j2
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Optional<USRLST> findOne(String usrid) {
        return userRepository.findByUsrid(usrid);
    }

}
