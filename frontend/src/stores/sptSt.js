//고객지원

import { defineStore } from 'pinia'

export const useSptStore = defineStore('support', () => {

    //관리자

    const sptAdmGroup = ref([
        {
            bindIdx: 0,
            NO: '1', //글번호
            STATUS: '진행중', //현황
            PROGRESS: '20%',
            TITLE: '출고조회 중 오류가 발생합니다', //제목
            WRITER: '농심', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '3', //조회수
            TEXTS: `
                어 허야듸야 허야듸야
                허야듸야
            `
        },
        {
            bindIdx: 1,
            NO: '2', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: '현장의 서버 연결이 원활하지 않은것 같습니다', //제목
            WRITER: '해태', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
                어촌마을 어귀에 서서
                마을에 평안함을 기원하는
                진또배기 진또배기 진또배기
            `
        },
        {
            bindIdx: 2,
            NO: '3', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: '월요일에 문의드린 수정 건 관련하여......', //제목
            WRITER: '부라보', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
                오리 세마리 솟대 위에 앉아
                물 불 바람을 막아주는
                진또배기 진또배기 진또배기
            `
        },
        {
            bindIdx: 3,
            NO: '4', //글번호
            STATUS: '진행중', //현황
            PROGRESS: '50%',
            TITLE: '와이파이 신호가 바람에 날아가는거 같아요', //제목
            WRITER: '백설', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
                모진 비바람을 견디며
                바다의 심술을 막아주고
                말없이 마을을 지켜온
                진또배기 진또배기
            `
        },
        {
            bindIdx: 4,
            NO: '5', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: '전산상에 재고가 맞지를 않네요', //제목
            WRITER: '양조', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
                어허 허야듸야
            `
        },
        {
            bindIdx: 5,
            NO: '6', //글번호
            STATUS: '완료', //현황
            PROGRESS: '100%',
            TITLE: '업데이트 이후로 프로그램이 불안정해요', //제목
            WRITER: 'CJ', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
                풍어와 풍년을 빌면서
                일년내내 기원하는
                진또배기 진또배기
            `
        },
        {
            bindIdx: 6,
            NO: '7', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: '요청주신 오류 스크린샷 전달드립니다', //제목
            WRITER: '오뚜기', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
                진또배기 진또배기
                어 허야듸야 허야듸야
                허야듸야 허야듸야
            `
        },
        {
            bindIdx: 7,
            NO: '8', //글번호
            STATUS: '진행중', //현황
            PROGRESS: '35%',
            TITLE: '네트워크 확인차 방문주신다는 일정 조율관련하여', //제목
            WRITER: '금성', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
                배띄워라 노를 저어라
                파도가 춤을 춘다 노래한다
                진또배기 진또배기
            `
        },
        {
            bindIdx: 8,
            NO: '9', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: 'DB 백업 자료가 비어있네요', //제목
            WRITER: 'KBS', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
                진또배기 진또배기
                어허 허야듸야
                허야듸야 허야듸야 어얼 쑤
            `
        },
        {
            bindIdx: 9,
            NO: '10', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: '컴퓨터가 안켜져요', //제목
            WRITER: 'SBS', //작성자
            DATE: '2023.09.04', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
                전원코드를 꼭 꽂아야만 켤 수 있나요? 너무 번거로워요 사용자의 편의를 위해 수정바랍니다
            `
        },
        {
            bindIdx: 10,
            NO: '11', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: '테스트용 타이틀11', //제목
            WRITER: 'SBS', //작성자
            DATE: '2023.09.10', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iusto esse dignissimos est sed, rem libero provident voluptatum voluptatibus illo sunt, dolor inventore maiores magnam, saepe debitis ipsa. Repudiandae, magni.
            `
        },
        {
            bindIdx: 11,
            NO: '12', //글번호
            STATUS: '진행중', //현황
            PROGRESS: '20%',
            TITLE: '테스트용 타이틀12', //제목
            WRITER: 'SBS', //작성자
            DATE: '2023.09.10', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iusto esse dignissimos est sed, rem libero provident voluptatum voluptatibus illo sunt, dolor inventore maiores magnam, saepe debitis ipsa. Repudiandae, magni.
            `
        },
        {
            bindIdx: 12,
            NO: '13', //글번호
            STATUS: '진행중', //현황
            PROGRESS: '70%',
            TITLE: '테스트용 타이틀13', //제목
            WRITER: 'SBS', //작성자
            DATE: '2023.09.10', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iusto esse dignissimos est sed, rem libero provident voluptatum voluptatibus illo sunt, dolor inventore maiores magnam, saepe debitis ipsa. Repudiandae, magni.
            `
        },
        {
            bindIdx: 13,
            NO: '14', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: '테스트용 타이틀14', //제목
            WRITER: 'SBS', //작성자
            DATE: '2023.09.10', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iusto esse dignissimos est sed, rem libero provident voluptatum voluptatibus illo sunt, dolor inventore maiores magnam, saepe debitis ipsa. Repudiandae, magni.
            `
        },
        {
            bindIdx: 14,
            NO: '15', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: '테스트용 타이틀15', //제목
            WRITER: 'SBS', //작성자
            DATE: '2023.09.10', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iusto esse dignissimos est sed, rem libero provident voluptatum voluptatibus illo sunt, dolor inventore maiores magnam, saepe debitis ipsa. Repudiandae, magni.
            `
        },
        {
            bindIdx: 15,
            NO: '16', //글번호
            STATUS: '확인예정', //현황
            PROGRESS: '0%',
            TITLE: '테스트용 타이틀16', //제목
            WRITER: 'SBS', //작성자
            DATE: '2023.09.10', //작성일자
            TIME: '13:25:09',
            COUNT: '2', //조회수
            TEXTS: `
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iusto esse dignissimos est sed, rem libero provident voluptatum voluptatibus illo sunt, dolor inventore maiores magnam, saepe debitis ipsa. Repudiandae, magni.
            `
        },
    ])

    const replyGroup = ref([
        {
            NO: '1', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '1', //댓글이 작성된 글번호
            WRITER: '고객사담당자S', //작성자
            TEXTS: `네 연락주세요`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '2', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '2', //댓글이 작성된 글번호
            WRITER: '고객사담당자T', //작성자
            TEXTS: `긴급건 빠른처리 바랍니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '3', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '4', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '4', //댓글이 작성된 글번호
            WRITER: '고객사담당자T', //작성자
            TEXTS: `네 빠른처리바랍니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '5', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '5', //댓글이 작성된 글번호
            WRITER: '고객사담당자R', //작성자
            TEXTS: `나머지 자료는 추가로 업로드드리겠습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '5', //댓글이 작성된 글번호
            WRITER: '고객사담당자L', //작성자
            TEXTS: `사진은 메일로 따로 전달드렸습니다.`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '6', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '6', //댓글이 작성된 글번호
            WRITER: '고객사담당자C', //작성자
            TEXTS: `금주까지 수정가능할까요?`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '6', //댓글이 작성된 글번호
            WRITER: '고객사담당자C', //작성자
            TEXTS: `가능한 일정 전달바랍니다!`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '6', //댓글이 작성된 글번호
            WRITER: '고객사담당자B', //작성자
            TEXTS: `데이터는 별도 입력하고 있을게요`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '7', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '7', //댓글이 작성된 글번호
            WRITER: '고객사담당자C', //작성자
            TEXTS: `방화벽이 문제일수도 있다고하네요`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '8', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '8', //댓글이 작성된 글번호
            WRITER: '고객사담당자A', //작성자
            TEXTS: `언제쯤 방문가능하실까요?`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '8', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `네 오후에 전화드리겠습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '8', //댓글이 작성된 글번호
            WRITER: '고객사담당자C', //작성자
            TEXTS: `혹시 일정변경 가능할까요?`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '9', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '9', //댓글이 작성된 글번호
            WRITER: '고객사담당자A', //작성자
            TEXTS: `처리후 전화한통 부탁드립니다.`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '9', //댓글이 작성된 글번호
            WRITER: '고객사담당자B', //작성자
            TEXTS: `자료 별도 전달드릴게요`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '10', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '10', //댓글이 작성된 글번호
            WRITER: '고객사담당자A', //작성자
            TEXTS: `저번에도 이랬나요?`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
        {
            NO: '11', //댓글이 작성된 글번호
            WRITER: '소나무정보기술', //작성자
            TEXTS: `내용 확인했습니다`,
            DATE: '2023.09.05', //작성일
            TIME: '13:25:09',
        },
    ])

    const onelineNotices = ref([
        {
            NO: '1',
            CUSTOMER: '해태',
            TITLE: '"테스트" 고객사의 한줄 공지사항입니다.',
            TEXTS: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, commodi deserunt dolor veritatis veniam recusandae cum accusamus assumenda consectetur corrupti quos eius voluptatum alias ab modi nesciunt distinctio reprehenderit?`,
            DATE: '2023.09.10',
            isShowTexts: false,
            isModify: false,
            saveActive: false
        },
        {
            NO: '2',
            CUSTOMER: '롯데',
            TITLE: '"테스트" 고객사의 한줄 공지사항입니다.',
            TEXTS: `테스트 공지사항입니다.`,
            DATE: '2023.09.10',
            isShowTexts: false,
            isModify: false,
            saveActive: false
        },
        {
            NO: '3',
            CUSTOMER: '테스트',
            TITLE: '"테스트" 고객사의 한줄 공지사항입니다.',
            TEXTS: `테스트 공지사항입니다. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, commodi deserunt dolor veritatis veniam recusandae cum accusamus assumenda consectetur corrupti quos eius voluptatum alias ab modi nesciunt distinctio reprehenderit? 테스트 공지사항입니다. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, commodi deserunt dolor veritatis veniam recusandae cum accusamus assumenda consectetur corrupti quos eius voluptatum alias ab modi nesciunt distinctio reprehenderit? 테스트 공지사항입니다. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, commodi deserunt dolor veritatis veniam recusandae cum accusamus assumenda consectetur corrupti quos eius voluptatum alias ab modi nesciunt distinctio reprehenderit? 테스트 공지사항입니다. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, commodi deserunt dolor veritatis veniam recusandae cum accusamus assumenda consectetur corrupti quos eius voluptatum alias ab modi nesciunt distinctio reprehenderit? 테스트 공지사항입니다. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, commodi deserunt dolor veritatis veniam recusandae cum accusamus assumenda consectetur corrupti quos eius voluptatum alias ab modi nesciunt distinctio reprehenderit?`,
            DATE: '2023.09.10',
            isShowTexts: false,
            isModify: false,
            saveActive: false
        }
    ])

    return { sptAdmGroup, replyGroup, onelineNotices }
})