//소나무 소식 (※보도자료는 report)

import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {

    const newsGroup = ref([
        {
            url: '/news/',
            children: [
                
                {
                    number: 0,
                    thumImg: '/image/news/news_04.jpg',
                    category: '행사',
                    title: '겨울이 다가오는 워크샵 현장에서',
                    date: '2021.12.03',
                    views: '120',
                    imgAll: [
                        {img: '/image/news/news_04.jpg'},
                        {img: '/image/news/news_04_01.jpg'}
                    ],
                    textAll: `
                        <p>21년도 워크샵이 진행되었습니다.</p>
                        <p>소나무인들이 함께한 즐거운 밤의 모습</p>
                    `
                },
                {
                    number: 1,
                    thumImg: '/image/news/2m_edu_01.jpg',
                    category: '기타',
                    title: '22년도 상반기 산업안전보건교육',
                    date: '2022.02.14',
                    views: '139',
                    imgAll: [
                        {img: '/image/news/2m_edu_01.jpg'},
                        {img: '/image/news/2m_edu_02.jpg'}
                    ],
                    textAll: `
                        <p>의무안전교육인 산업안전보건교육이 실시되었습니다.</p>
                        <p>수고해주신 강사님께 감사의 말씀을 전합니다.</p>
                    `
                },
                {
                    number: 2,
                    thumImg: '/image/news/news_05_02.jpg',
                    category: '회의',
                    title: '커브길 스마트 가드레일 우수조달신청 진행을 위한 조달청 주최 컨설팅 회의',
                    date: '2022.06.16',
                    views: '77',
                    imgAll: [
                        {img: '/image/news/news_05_02.jpg'},
                        {img: '/image/news/news_05_01.jpg'},
                    ],
                    textAll: `
                        <p>22년도 4차 우수조달신청 전 서울에서 개최된 컨설팅 회의가 진행되었습니다.</p>
                        <p>스마트 가드레일 시스템 모니터링 SW의 성공적인 우수조달 진행을 위하여 모여주신 모든 분들께 감사드립니다.</p>
                    `
                },
                {
                    number: 3,
                    thumImg: '/image/news/news_02.jpg',
                    category: '행사',
                    title: '22년도 하반기 스마트가드레일 성과공유회 워크샵 with 동의과학대학교 산학협력단',
                    date: '2022.07.03',
                    views: '148',
                    imgAll: [
                        {img: '/image/news/news_02.jpg'},
                    ],
                    textAll: `
                        <p>22년도 하반기 ICT융합디바이스개발사업 스마트가드레일의 성과공유회가 진행되었습니다.</p>
                        <p>해당 사업을 함께 진행한 참여기업 동의과학대학교 산학협력단과 함께한 자리입니다.</p>
                    `
                },
                {
                    number: 4,
                    thumImg: '/image/news/news_03.jpg',
                    category: '기타',
                    title: '22년도 산업안전보건교육',
                    date: '2022.08.23',
                    views: '105',
                    imgAll: [
                        {img: '/image/news/news_03.jpg'},
                        {img: '/image/news/news_03_02.jpg'}
                    ],
                    textAll: `
                        <p>금년도 하반기 산업안전보건교육이 진행되었습니다.</p>
                        <p>수고해주신 강사님께 감사의 말씀을 전합니다.</p>
                    `
                },
                {
                    number: 5,
                    thumImg: '/image/news/safe_01.jpg',
                    category: '기타',
                    title: '[커브길 스마트 세이프 가드레일] 대한민국 안전산업박람회 참가',
                    date: '2022.10.11',
                    views: '141',
                    imgAll: [
                        {img: '/image/news/safe_01.jpg'},
                        {img: '/image/news/safe_02.jpg'},
                        {img: '/image/news/safe_03.jpg'}
                    ],
                    textAll: `
                        <p>행정안전부, 산업통상자원부 주최 하에 10월 12일 ~ 10월 14일 3일간 EXCO에서 한국안전산업박람회가 진행되었습니다.</p>
                        <p>소나무정보기술은 교통안전 품목에 커브길 스마트 세이프 가드레일로 참가하였습니다.</p>
                    `
                },
                {
                    number: 6,
                    thumImg: '/image/news/news_01.jpg',
                    category: '행사',
                    title: '소나무정보기술 워크샵-캠프파이어가 있는 밤',
                    date: '2022.11.04',
                    views: '172',
                    imgAll: [
                        {img: '/image/news/news_01.jpg'},
                        {img: '/image/news/news_01_01.jpg'},
                        {img: '/image/news/news_01_02.jpg'},
                        {img: '/image/news/news_01_03.jpg'},
                        {img: '/image/news/news_01_04.jpg'},
                        {img: '/image/news/news_01_05.jpg'},
                    ],
                    textAll: `
                        <p>22년도 소나무정보기술 워크샵이 진행되었습니다.</p>
                        <p>즐거운 추억을 함께한 밤이 되었기를 바랍니다.</p>
                    `
                },
                {
                    number: 7,
                    thumImg: '/image/news/ht_07.jpg',
                    category: '행사',
                    title: 'ICT 융합 디바이스 기술개발사업 기술공유 워크샵',
                    date: '2022.12.15',
                    views: '172',
                    imgAll: [
                        {img: '/image/news/ht_01.jpg'},
                        {img: '/image/news/ht_02.jpg'},
                        {img: '/image/news/ht_03.jpg'},
                        {img: '/image/news/ht_04.jpg'},
                        {img: '/image/news/ht_05.jpg'},
                        {img: '/image/news/ht_06.jpg'},
                        {img: '/image/news/ht_07.jpg'}
                    ],
                    textAll: `
                        <p>2021-2022년간 진행되어온 커브길 스마트 세이프 가드레일 시스템 마무리를 앞두고 기술공유 워크샵이 진행되었습니다.</p>
                    `
                },
                {
                    number: 8,
                    thumImg: '/image/news/DEI/DEI_12.jpg',
                    category: '행사',
                    title: '동의대학교-(주)소나무정보기술 기술교류회',
                    date: '2023.02.01',
                    views: '108',
                    imgAll: [
                        {img: '/image/news/DEI/DEI_01.jpg'},
                        {img: '/image/news/DEI/DEI_02.jpg'},
                        {img: '/image/news/DEI/DEI_03.jpg'},
                        {img: '/image/news/DEI/DEI_04.jpg'},
                        {img: '/image/news/DEI/DEI_05.jpg'},
                        {img: '/image/news/DEI/DEI_06.jpg'},
                        {img: '/image/news/DEI/DEI_07.jpg'},
                        {img: '/image/news/DEI/DEI_08.jpg'},
                        {img: '/image/news/DEI/DEI_09.jpg'},
                        {img: '/image/news/DEI/DEI_10.jpg'},
                        {img: '/image/news/DEI/DEI_11.jpg'},
                        {img: '/image/news/DEI/DEI_12.jpg'},
                    ],
                    textAll: `
                        <p>동의대학교 산학협력단-주식회사 소나무정보기술 간의 기술교류회가 진행되었습니다.</p>
                        <p>그간 연구개발되어온 산학과제, R&D과제 등의 결과를 나누는 뜻깊은 시간이 되었습니다.</p>
                    `                    
                },
                
                {
                    number: 9,
                    thumImg: '/image/news/smt_02.jpg',
                    category: '기타',
                    title: '2023년 중소기업 스마트서비스 지원사업 사업설명회',
                    date: '2023.02.09',
                    views: '117',
                    imgAll: [
                        {img: '/image/news/smt_01.jpg'},
                        {img: '/image/news/smt_02.jpg'},
                        {img: '/image/news/smt_03.jpg'}
                    ],
                    textAll: `
                        <p>한국경영혁신중소기업협회 주관 하에 중소기업 스마트서비스 지원사업의 사업설명회가 진행되었습니다.</p>
                        <p>참여하신 모든 분들 수고많으셨습니다.</p>
                    `
                },
            ]
            
        },
    ])

    return { newsGroup }
})