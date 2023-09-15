//자료실

import { defineStore } from 'pinia'

export const useDataRoomStore = defineStore('dataRoom', () => {

    //상세페이지

    const dataGroup = ref([
        {
            bindIndex: 0,
            title: '고객용 원격지원 설치파일 다운로드 ',
            date: '2022.11.12',
            views: 175,
            texts: '고객용 원격지원 설치파일 다운로드',
            uploaded: [
                {fileName:'/board/client.exe', name:'고객용 원격지원 설치파일.exe'}
            ],
            password: null,
            lock: false,
            modals: false
        },
        {
            bindIndex: 1,
            title: '더블스윗 APK파일 다운로드',
            date: '2023.05.08',
            views: 6,
            texts: '더블스윗 APK파일을 업로드하오니 업무에 활용바랍니다.',
            uploaded: [
                {fileName:'/board/더블스윗_v1.01.apk', name:'더블스윗_v1.01.apk'},
            ],
            password: 'db',
            lock: true,
            modals: false
        },
        {
            bindIndex: 2,
            title: '영인하이텍 APK파일 다운로드',
            date: '2023.05.09',
            views: 7,
            texts: '영인하이텍 APK파일을 업로드하오니 업무에 활용바랍니다.',
            uploaded: [
                {fileName:'/board/영인하이텍.apk', name:'영인하이텍.apk'},
            ],
            password: 'yi',
            lock: true,
            modals: false
        },
        {
            bindIndex: 3,
            title: 'SNC APK파일 다운로드',
            date: '2023.04.13',
            views: 3,
            texts: 'SNC APK파일을 업로드하오니 업무에 활용바랍니다.',
            uploaded: [
                {fileName:'/board/SNC.apk', name:'SNC.apk'},
            ],
            password: 'sn',
            lock: true,
            modals: false
        },
        {
            bindIndex: 4,
            title: '한동산업 APK파일 다운로드',
            date: '2023.08.22',
            views: 11,
            texts: '한동산업 APK파일 및 설치매뉴얼을 업로드하오니 업무에 활용바랍니다. (23.08.22 수정)',
            uploaded: [
                {fileName:'/board/한동산업.apk', name:'한동산업.apk'},
                {fileName:'/board/한동산업_APK_설치_매뉴얼_230419.pdf', name:'한동산업_APK_설치_매뉴얼_230419.pdf'},
            ],
            password: 'ha',
            lock: true,
            modals: false
        },
        {
            bindIndex: 5,
            title: '금강에스엠 APK파일 다운로드',
            date: '2023.05.25',
            views: 6,
            texts: '금강에스엠 APK파일을 업로드하오니 업무에 활용바랍니다.',
            uploaded: [
                {fileName:'/board/금강에스엠.apk', name:'금강에스엠.apk'},
            ],
            password: 'gg',
            lock: true,
            modals: false
        },
        {
            bindIndex: 6,
            title: '현대스틸 APK파일 다운로드',
            date: '2023.06.01',
            views: 4,
            texts: '현대스틸 APK파일을 업로드하오니 업무에 활용바랍니다.',
            uploaded: [
                {fileName:'/board/현대스틸.apk', name:'현대스틸.apk'},
            ],
            password: 'hs',
            lock: true,
            modals: false
        },
    ])

    return { dataGroup }
})