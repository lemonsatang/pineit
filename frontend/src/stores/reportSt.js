//보도자료

import { defineStore } from 'pinia'

export const useReportStore = defineStore('report', () => {

    const reportGroup = ref([
        {
            number: 0,
            thumImg: '/image/report/report_01.png',
            linkTo: 'https://www.gukjenews.com/news/articleView.html?idxno=2227765',
            site: '환경일보',
            title: "부산시, ICT융합 디바이스 개발' 공모 선정... 지능형 교통시스템 초석",
            date: '2021.05.21',
            views: '148'
        },
        {
            number: 1,
            thumImg: '/image/report/report_02.jpg',
            linkTo: 'https://www.etnews.com/20211230000040',
            site: '전자신문',
            title: "소나무정보기술, IoT기반 '스마트 세이프 가드레일 시스템' 개발",
            date: '2021.12.30',
            views: '217'
        },
        {
            number: 2,
            thumImg: '/image/report/report_03.jpg',
            linkTo: 'https://www.busan.com/view/busan/view.php?code=2022060811412212088',
            site: '부산일보',
            title: '대학·기업 손잡고 부산 선도산업 SW전문인재 키운다',
            date: '2022.06.08',
            views: '170'
        },
        {
            number: 3,
            thumImg: '/image/report/report_04.png',
            linkTo: 'https://www.etnews.com/20221229000165',
            site: '전자신문',
            title: "소나무정보기술 '커브길 스마트 세이프 가드레일 시스템' 현장 실증",
            date: '2022.12.29',
            views: '168'
        },
    ])

    return { reportGroup }
})