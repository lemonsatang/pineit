package com.pineit.pineit.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.security.crypto.password.PasswordEncoder;

@Entity
@Getter
@Setter
@Builder
@DynamicInsert
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "zUSRLST")
@ToString
public class USRLST extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USRCD")
    private Long usrcd;

    @Column(name = "USRID", length = 50, nullable = false)
    private String usrid;

    @Column(name = "USRNM", length = 10, nullable = false)
    private String usrnm;

    @Column(name = "PASSWD", length = 100)
    private String passwd;

    @Column(name = "USEYN", columnDefinition = "CHAR(1)")
    private String useyn;

    @Column(name = "CONLY", columnDefinition = "CHAR(1)")
    private String conly;

    @Column(name = "QONLY", length = 6)
    private String qonly;

    @Column(name = "INSANO", length = 6)
    private String insano;

    @Column(name = "USLVL", length = 6)
    private String uslvl;

    @Column(name = "DEPTCD", length = 30)
    private String deptcd;

    @Column(name = "JKWICD", length = 30)
    private String jkwicd;

    @Column(name = "JKMUNM", length = 30)
    private String jkmunm;

    @Column(name = "EMAIL", length = 30)
    private String email;

    @Column(name = "MOBLNO", length = 30)
    private String moblno;

    @Column(name = "NEWYN", length = 30)
    private String newyn;

    @Column(name = "JCODE", length = 30)
    private String jcode;

    @Column(name = "USIGN", length = 30)
    private String usign;

    @Column(name = "RK", length = 1000)
    private String rk;

    @Column(name = "CUSER", columnDefinition = "CHAR(5)")
    private String cuser;

    @Column(name = "MUSER", columnDefinition = "CHAR(5)")
    private String muser;

    private USRLST(Long usrcd, String usrid, String passwd, String uslvl) {
        this.usrcd = usrcd;
        this.usrid = usrid;
        this.passwd = passwd;
        this.uslvl = uslvl;
    }

    public static USRLST createUser(String usrid, String passwd, String roles, PasswordEncoder passwordEncoder) {
        return new USRLST(null, usrid, passwordEncoder.encode(passwd), roles);
    }

    public void setUsername(String usrnm) {
        this.usrnm = usrnm;
    }

    public void setPassword(String passwd) {
        this.passwd = passwd;
    }

    public void setRoles(String uslvl) {
        this.uslvl = uslvl;
    }

    public void setUseyn(String useyn) {
        this.useyn = useyn;
    }
}
