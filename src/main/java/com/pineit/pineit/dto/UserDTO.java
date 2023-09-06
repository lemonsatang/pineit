package com.pineit.pineit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {
    private Long usrcd;
    private String usrid;
    private String passwd;
    private String insano;
    private String deptcd;
    private String jkwicd;
    private String jkmucd;
    private String jkmunm;
    private String moblno;
    private String rk;
    private String entdt;
    private String roles;

    private LocalDateTime cdate;
    private LocalDateTime mdate;
}
