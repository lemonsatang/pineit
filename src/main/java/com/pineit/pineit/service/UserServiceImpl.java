package com.pineit.pineit.service;

import java.io.IOException;
import java.net.SocketException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.pineit.pineit.config.FtpClient;
import com.pineit.pineit.dto.FileDTO;
import com.pineit.pineit.entity.USRLST;
import com.pineit.pineit.mapper.UserMapper;
import com.pineit.pineit.repository.LoginRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Transactional
@Log4j2
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    private String serverIp = "121.66.17.30";
    private int serverPort = 16021;
    private String user = "server";
    private String password = "pineit0401!!";

    @Override
    public Map<String, Object> addSc(JSONObject obj, MultipartHttpServletRequest mRequest) {

        Map<String, Object> result = new HashMap<String, Object>();

        try {
            System.out.println(!mRequest.getFiles("file").isEmpty());
            if (!mRequest.getFiles("file").isEmpty()) {
                List<MultipartFile> mf = mRequest.getFiles("file");
                String path = "pineit/sc/";

                for (int i = 0; i < mf.size(); i++) {
                    if (!mf.get(i).getOriginalFilename().equals("")) {
                        String random = UUID.randomUUID().toString();
                        String originalfilename = mf.get(i).getOriginalFilename();
                        int pos = originalfilename.lastIndexOf(".");
                        String ext = originalfilename.substring(pos + 1);

                        String saveFileName = random + "." + ext;

                        FtpClient ftp = new FtpClient(serverIp, serverPort, user, password);

                        boolean resultFtp;

                        resultFtp = ftp.upload(mf.get(i), saveFileName, path);

                        if (!resultFtp) {
                            result.put("RESULT", -1);
                            result.put("MSG", "파일 저장 실패");
                            return result;
                        } else {
                            // sql 파일 저장
                            FileDTO dto = new FileDTO();
                            dto.setBGB("");
                            dto.setFILE_NAME(originalfilename);
                            dto.setFILE_SAVE_NAME(saveFileName);

                        }
                    }
                }
            }
        } catch (SocketException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }

}
