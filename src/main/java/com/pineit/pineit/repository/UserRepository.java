package com.pineit.pineit.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pineit.pineit.entity.USRLST;

public interface UserRepository extends JpaRepository<USRLST, Long> {

    Optional<USRLST> findByUsrid(String usrid);

}
