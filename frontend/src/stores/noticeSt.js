// 공지사항

import { defineStore } from 'pinia'

export const useNoticeStore = defineStore('notice', () => {
    const noticeGroup = ref({
        url: '/notice/',
        children: [
            {
                bindIndex: 0,
                title: '소나무정보기술 본사 이전 안내',
                date: '2022.07.15',
                views: 91,
                images: '/image/notice_02.jpg',
                textAll: `
                    <p>Pine, thank you! 소나무정보기술입니다.</p>
                    <p>당사는 2022년 7월 15일자로 본사를 이전하게 되었음을 안내드립니다.</p>
                    <p>기존 본사 : 부산광역시 사상구 대동로 303, 부산디지털밸리 1203호</p>
                    <p>신규 본사 : 부산광역시 부산진구 엄광로 176, 동의대학교 산학협력관 331호</p>
                    <p>저희 임직원 일동은 새로운 마음가짐으로 더욱 발전하는 계기가 될 수 있도록 최선을 다하겠습니다.</p>
                    <p>앞으로도 많은 관심과 성원 부탁드리겠습니다.</p>
                `
            },
            {
                bindIndex: 1,
                title: '2023년 새해가 밝았습니다.',
                date: '2023.01.01',
                views: 87,
                images: '/image/newyear_2023.jpg',
                textAll: `
                    <p>2022년 한 해 고생많으셨습니다.</p>
                `
            },
            {
                bindIndex: 2,
                title: '설날 연휴간 소나무정보기술 휴무안내',
                date: '2023.01.10',
                views: 65,
                images: false,
                textAll: `
                    <p>Pine, thank you! 소나무정보기술입니다.</p>
                    <p>다가오는 연휴에 관하여 소나무정보기술 업무일정을 안내드립니다.</p>
                    <p>휴무일자 : 2023.01.21 ~ 2023.01.24</p>
                    <p>상기 일자에는 소나무정보기술의 모든 업무가 중단되오니 일정에 참고바랍니다. 감사합니다.</p>
                `
            },
            {
                bindIndex: 3,
                title: '소나무정보기술 하계 휴무 안내 (7.29 ~ 8.2)',
                date: '2023.07.24',
                views: 241,
                images: false,
                textAll: `
                    <p>Pine, thank you! 소나무정보기술입니다.</p>
                    <p>금년 7월 29일 ~ 8월 2일은 당사의 하계 휴가 기간으로 지정되었습니다.</p>
                    <p>해당 기간에는 긴급을 요하는 건 이외의 업무 대응이 중단될 예정이오니, 아무쪼록 참고하시어 일정에 차질이 없으시길 바랍니다.</p>
                    <p>감사합니다.</p>
                `
            }
        ]
    })

    return { noticeGroup }
})