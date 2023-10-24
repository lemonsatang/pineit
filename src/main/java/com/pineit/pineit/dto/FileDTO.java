package com.pineit.pineit.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FileDTO {
    private String FILENO; // 파일번호
    private String PDCOD; // 글번호
    private String BGB; // 게시판 구분
    private String FILE_NAME; // 원파일이름
    private String FILE_SAVE_NAME; // 파일저장이름
    private String SVPATH; // 저장경로(ftp라서 저장경로, 이미지표출경로 똑같음..? 확인필요)
    private String FILURL; // 이미지경로
    private String CDATE; // 생성일자
    private String CUSER; // 생성자
}
