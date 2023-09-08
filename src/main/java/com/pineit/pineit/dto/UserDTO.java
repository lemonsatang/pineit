package com.pineit.pineit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {
    private String usrcd;
    private String usrid;
    private String usrnm;
    private String passwd;
    private String useyn;
    private String conly;
    private String qonly;
    private String insano;
    private String uslvl;
    private String deptcd;
    private String jkwicd;
    private String jkmunm;
    private String email;
    private String moblno;
    private String newyn;
    private String jcode;
    private String usign;
    private String rk;
    private String cuser;
    private String muser;
}
