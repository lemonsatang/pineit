package com.pineit.pineit.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import jakarta.servlet.DispatcherType;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableMethodSecurity
public class SpringSecurityConfig {

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeHttpRequests(request -> request
                        .dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()
                        .requestMatchers("/src/**", "/login", "/config/**", "/auth/**",
                                "/css/**", "/img/**",
                                "/static/**", "/assets/**", "/login/**")
                        .permitAll()
                        .requestMatchers("/admin/**").hasRole("0")
                        .anyRequest().authenticated() // 어떠한 요청이라도 인증필요
                )
                .formLogin(login -> login // form 방식 로그인 사용
                        .loginPage("/login") // [A] 커스텀 로그인 페이지 지정
                        .loginProcessingUrl("/loginChk") // [B] submit 받을 url
                        .usernameParameter("username") // [C] submit할 아이디
                        .passwordParameter("password") // [D] submit할 비밀번호
                        .successHandler(new MyLoginSuccessHandler())
                        .failureHandler(new MyLoginFailureHandler())
                        .permitAll() // 대시보드 이동이 막히면 안되므로 얘는 허용
                )
                .logout(withDefaults()); // 로그아웃은 기본설정으로 (/logout으로 인증해제)
        return http.build();
    }
}