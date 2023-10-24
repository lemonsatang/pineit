package com.pineit.pineit.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pineit.pineit.dto.UserDTO;
import com.pineit.pineit.entity.USRLST;
import com.pineit.pineit.mapper.LoginMapper;
import com.pineit.pineit.repository.LoginRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Transactional
@Log4j2
public class LoginServiceImpl implements LoginService {

    private final LoginRepository userRepository;

    private final LoginMapper userMapper;

    @Override
    public Optional<USRLST> findOne(String usrid) {
        return userRepository.findByUsrid(usrid);
    }

    @Override
    public UserDTO getUserInfo(String usrid) {

        UserDTO result = userMapper.getUserInfo(usrid);
        result.setPasswd("");

        return result;
    }

}