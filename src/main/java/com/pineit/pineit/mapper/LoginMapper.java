package com.pineit.pineit.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;

import com.pineit.pineit.dto.UserDTO;

@MapperScan
@Mapper
public interface LoginMapper {

    UserDTO getUserInfo(String usrid);

}
