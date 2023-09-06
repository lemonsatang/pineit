package com.pineit.pineit.config;

import com.pineit.pineit.entity.USRLST;
import com.pineit.pineit.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Log4j2
@Service
public class MyUserDetailService implements UserDetailsService {

    private final UserService userService;

    public MyUserDetailService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String insertedUserId) throws UsernameNotFoundException {
        Optional<USRLST> findOne = userService.findOne(insertedUserId);

        USRLST user = findOne.orElseThrow(() -> new UsernameNotFoundException("존재하지 않는 회원입니다."));

        return User.builder()
                .username(user.getUsrid())
                .password(user.getPassword())
                .roles(user.getUslvl())
                .build();
    }
}
