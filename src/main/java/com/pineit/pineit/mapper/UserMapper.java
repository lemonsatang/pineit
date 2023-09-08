package com.pineit.pineit.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;

import com.pineit.pineit.dto.UserDTO;

@MapperScan
@Mapper
public interface UserMapper {

    UserDTO getUserInfo(String usrid);

}
