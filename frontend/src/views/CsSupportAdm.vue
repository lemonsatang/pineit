<template>    

    <section class="common-board-wrap div-main-text">
        <div class="common-board-container">
            <SptHeader />
            <div class="spt-page-title">
                <h1 >고객 문의</h1>
                <button @click="isShowNm = true" class="oneline-note-manage-button" type="button">
                    <font-awesome-icon icon="fa-comment-dots" />
                    공지사항 관리
                </button>
            </div>
            
            <!-- 검색영역 -->
            <div class="spt-search-line">

                <div data-spt-status-filter class="spt-input-container">
                    <p class="spt-input-title">현황</p>
                    <select v-model="stCheck" @change="statChk(this)" class="spt-select">
                        <option value="st_all" selected>전체</option>
                        <option value="st_will">확인예정</option>
                        <option value="st_ing">진행중</option>
                        <option value="st_ed">완료</option>
                    </select>
                </div>

                <div class="spt-input-container">
                    <p class="spt-input-title">고객사</p>
                    <input ref="cstCorp" type="text" @keyup.enter="cstCorpSearch">
                    <button @click="cstCorpSearch" type="button">
                        <font-awesome-icon icon="fa-magnifying-glass" />
                    </button>
                </div>

                <div class="spt-input-container">
                    <p class="spt-input-title">검색</p>
                    <select ref="srchOpt" class="spt-select">
                        <option value="srch_all">전체</option>
                        <option value="srch_no">No</option>
                        <option value="srch_title">제목</option>
                        <option value="srch_texts">내용</option>
                        <option value="srch_date">작성일자</option>
                    </select>
                    <input ref="srchInput" type="text">
                    <button @click="totalSrch" type="button">
                        <font-awesome-icon icon="fa-magnifying-glass" />
                    </button>
                    
                </div>
            </div>   
            <!-- 본문 -->
            <div class="spt-texts-container">
                <div class="spt-texts-head">
                    <p>No</p>
                    <p>현황</p>
                    <p>제목</p>
                    <p>고객사</p>
                    <p>작성일자</p>
                    <p>조회</p>
                </div>
                <div class="spt-texts-body">
                    <router-link :to="{ name: 'SupportDt', params: { id: item.bindIdx } }" v-for="item in recentPgData" class="spt-item-line">
                        <p>{{ item.NO }}</p>
                        <p :class="{'spt-stat-red': item.STATUS === '확인예정' }">{{ item.STATUS }}</p>
                        <p class="item-title-left">{{ item.TITLE }}</p>
                        <p>{{ item.WRITER }}</p>
                        <p>{{ item.DATE }}</p>
                        <p>{{ item.COUNT }}</p>
                    </router-link>
                </div>
            </div> 
            <div class="common-spt-pager-container">
                <button type="button" @click="prevPgList">
                    <font-awesome-icon icon="fa-angles-left" />
                </button>
                <button type="button" @click="prevPg">
                    <font-awesome-icon icon="fa-chevron-left" />
                </button>
                <ul class="spt-pager-list">
                    <li v-for="pageNum in recentViewPages" @click="selectPgNumber(pageNum)" :class="{'pager-recent-page': pageNum === recentPage + 1 }">{{ pageNum }}</li>
                </ul>
                <button type="button" @click="nextPg">
                    <font-awesome-icon icon="fa-chevron-right" />
                </button>
                <button type="button" @click="nextPgList">
                    <font-awesome-icon icon="fa-angles-right" />
                </button>
            </div>
        </div>
    </section>
    <section v-show="isShowNotify === true" @click="notifyClose" class="spt-floating-notify" ref="floatingNote">
        <div class="notify-texts">
            <p class="notify-texts-head">
                <font-awesome-icon icon="fa-bell" />
                Note!
                <span class="notify-texts-subhead">게시글을 확인해주세요</span>
            </p>
            <!-- <p></p> -->
            <h2>확인예정 문의글이 <span class="not-read-count">{{ copyOfData.filter((x) => x.STATUS === '확인예정').length }}</span> 있습니다.</h2>
        </div>
    </section>

    <section v-if="isShowNm == true" id="sptNoticeManage">
        <div class="spt-notice-manage-body">
            <div class="spt-notice-manage-head">
                <font-awesome-icon icon="fa-comment-dots" />
                공지사항 관리
                <button @click="isShowNm = false" type="button">
                    <font-awesome-icon icon="fa-xmark" />
                </button>
            </div>
            <div class="spt-notice-manage-texts">
                <div class="spt-search-line">
                    <div class="spt-input-container">
                        <p class="spt-input-title">고객사</p>
                        <input ref="noticeCust" type="text" @keyup.enter="noticeCustSearch">
                        <button @click="noticeCustSearch" type="button">
                            <font-awesome-icon icon="fa-magnifying-glass" />
                        </button>
                    </div>
                </div>
                <div class="spt-texts-container">
                    <div class="spt-texts-head">
                        <p>No</p>
                        <p>고객사</p>
                        <p>제목</p>
                        <p>작성일자</p>
                    </div>
                    <div class="spt-texts-body">
                        <router-link :to="{}" v-for="item in copyOfNotice" class="spt-item-line">
                            <div class="spt-item-inner-line" @click="item.isShowTexts = !item.isShowTexts">
                                <p>{{ item.NO }}</p>
                                <p>{{ item.CUSTOMER }}</p>
                                <p>{{ item.TITLE }}</p>
                                <p>{{ item.DATE }}</p>
                            </div>
                            <div class="notice-inner-texts" v-if="item.isShowTexts == true" >
                                <textarea v-if="item.isModify == false" readonly v-model="item.TEXTS"></textarea>
                                <textarea v-else v-model="item.TEXTS">{{ item.TEXTS }}</textarea>
                                <div class="common-button-container">
                                    <button v-if="item.isModify == false" @click="[item.isModify = true, item.saveActive = true]" type="button">수정</button>
                                    <button class="nt-inner-save" v-if="item.saveActive == true" @click="[item.saveActive = false, item.isModify = false, saveNtTexts()]" type="button">
                                        <font-awesome-icon icon="fa-floppy-disk" />
                                        저장
                                    </button>
                                    <button type="button" @click="[item.isShowTexts = !item.isShowTexts, item.isModify = false, item.saveActive = false]">닫기</button>
                                </div>
                                
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="common-button-container">
                    <button @click="isShowNm = false" type="button">
                        닫기
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section v-if="isShowSaved == true" id="ntInnerSaveAlarmContainer">
        <div id="ntInnerSaveAlarm">
            <p>
                <font-awesome-icon icon="fa-circle-check" />
                수정사항이 저장되었습니다.
            </p>
            <div class="common-button-container">
                <button type="button" @click="isShowSaved = false">닫기</button>
            </div>
        </div>
    </section>

</template>
<script setup>
    import SptHeader from '@/components/SptHeader.vue';
    import { toast } from 'vue3-toastify'
    import axios from 'axios'

    //store에서 영역별 데이터 import
    import { useSptStore } from '@/stores/sptSt'
    import { storeToRefs } from 'pinia';

    const sptStore = useSptStore()
    const { sptAdmGroup, onelineNotices } = storeToRefs(sptStore)

    const usrData = ref([])

    const copyOfData = ref([...sptAdmGroup.value])
    const copyOfNotice = ref([...onelineNotices.value])

    const stCheck = ref('st_all')
    const cstCorp = ref()
    const noticeCust = ref()
    const isShowNotify = ref(true)
    const floatingNote = ref()
    const srchInput = ref()
    const srchOpt = ref()

    const isShowNm = ref(false)
    const isShowSaved = ref(false)

    //현황 필터링
    function statChk() {
        if(this.stCheck == 'st_will') {
            //일단 전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]
            //필터링
            let filteredData = copyOfData.value.filter((x) => x.STATUS === '확인예정')
            //필터링된 데이터로 리스트 리렌더링
            copyOfData.value = [...filteredData]            
        } else if(this.stCheck == 'st_ing') {
            //일단 전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]
            //필터링
            let filteredData = copyOfData.value.filter((x) => x.STATUS === '진행중')
            //필터링된 데이터로 리스트 리렌더링
            copyOfData.value = [...filteredData]            
        } else if(this.stCheck == 'st_ed') {
            //일단 전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]
            //필터링
            let filteredData = copyOfData.value.filter((x) => x.STATUS === '완료')
            //필터링된 데이터로 리스트 리렌더링
            copyOfData.value = [...filteredData]            
        } else if(this.stCheck == 'st_all') {
            //전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]
        }
    }

    //고객사 검색
    function cstCorpSearch() {
        
        if (cstCorp.value.value != '') {
            //전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]
            let ftData = copyOfData.value.filter((x) => x.WRITER.includes(cstCorp.value.value) )
            copyOfData.value = [...ftData]
        } else {
            copyOfData.value = [...sptAdmGroup.value]    
        }
    }

    //알림 닫기
    function notifyClose() {
        floatingNote.value.animate(noteDisapper, 500)
               
        setTimeout(() => {
            isShowNotify.value = 'false' 
        }, 400)
    }

    const noteDisapper = [
        { transform: 'translateX(20rem)' }
    ]
    
    //검색
    function totalSrch() {
        let srchOptValue = srchOpt.value.value
        let srchWords = srchInput.value.value

        if (  srchOptValue == 'srch_all') {
            //검색옵션 : 전체

            //전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]

            let ftData = copyOfData.value.filter(x => x.TITLE.includes(srchWords) || x.TEXTS.includes(srchWords) || x.WRITER.includes(srchWords) || x.NO.includes(srchWords) || x.DATE.includes(srchWords) || x.TIME.includes(srchWords))

            copyOfData.value = [...ftData]

        } else if ( srchOptValue == 'srch_no' ) {
            //검색옵션 : 글번호

            //전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]

            let ftData = copyOfData.value.filter(x => x.NO.includes(srchWords))

            copyOfData.value = [...ftData]

        } else if ( srchOptValue == 'srch_title' ) {
            //검색옵션 : 글제목

            //전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]

            let ftData = copyOfData.value.filter(x => x.TITLE.includes(srchWords))

            copyOfData.value = [...ftData]

        } else if ( srchOptValue == 'srch_texts' ) {
            //검색옵션 : 내용

            //전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]

            let ftData = copyOfData.value.filter(x => x.TEXTS.includes(srchWords))

            copyOfData.value = [...ftData]

        } else if ( srchOptValue == 'srch_date' ) {
            //검색옵션 : 작성일자

            //전체 데이터로 복귀후
            copyOfData.value = [...sptAdmGroup.value]

            let ftData = copyOfData.value.filter(x => x.DATE.includes(srchWords))

            copyOfData.value = [...ftData]
        }
    }



    axios.post('/api/login/getUserInfo')
        .then(res => {
            console.log(res.data.info)

            usrData.value.push(res.data.info)// let userData = ({...res.data.info})

            console.log(usrData.value)
            return
        })
        .catch (error => { 
            toast.success('정보를 가져오던 도중 오류가 발생했습니다.')
            return
        })

        const perPage = 10; //페이지당 글 수
        const pageMax = 5; //한번에 보이는 페이지 갯수 제한
        const totalPage = Math.ceil(copyOfData.value.length / perPage) // 총 몇 페이지 나올지 계산(max페이지)
        
        const allPages = Array.from({length: totalPage}, (v, i) => i + 1);  // 나올 페이지들 분리{ 예) < 1, 2, 3, 4, 5 > }
        
        const pagerList = Math.ceil(allPages.length / pageMax) // 현재 보이는 페이지번호 리스트(pageMax개씩 보이는 리스트가 이만큼 있다)
        const dividedPgListNumber = Array.from({length: pagerList}, (v, i) => i + 1) // 보이는 페이지들 분리 { 예) 0: 1, 2, 3, 4, 5, 1: 6, 7, 8, 9, 10, 3: 11, 12, 13, 14, 15  }

        let recentPage = reactive(Number(0)) //현재페이지
        let recentListIndex = reactive(Number(0)) // 리스트 중 0번째 인덱스부터 보이게 해라(0번쨰 인덱스 : 1, 2, 3, 4, 5 / 1번째 인덱스 : 6, 7, 8, 9, 10)

        const dataArr = reactive([])

        const recentPagerList = reactive([])

        //데이터 페이지별로 분리
        function chunk() {

            for (let i=0; i<copyOfData.value.length; i += perPage) {
                dataArr.push(copyOfData.value.slice(i, i + perPage));
            }

            for (let j = 0; j < allPages.length; j += pageMax ) {
                recentPagerList.push(allPages.slice(j, j + pageMax));
            }
                        
            console.log(recentPagerList)
            return dataArr, recentPagerList;
        }

        chunk()

        //페이지 선택
        function selectPgNumber(e) {
            recentPage = e - 1

            recentPgData.value = [...dataArr[recentPage]]
        }

        //최근 페이지 데이터 초기화 = 1페이지(인덱스 0)으로 시작
        const recentPgData = ref([...dataArr[0]])

        //지금 보이고있는 페이지리스트 초기화 = 1페이지(인덱스0)으로 시작{ 예) < 1, 2, 3, 4, 5 > }
        const recentViewPages = ref([...recentPagerList[0]])

        //다음 페이지리스트 버튼
        function nextPgList() {
            if ( recentListIndex = pagerList) {
                console.log(pagerList)
            } else {
                recentListIndex = recentListIndex + 1

                recentViewPages.value = [...recentPagerList[recentListIndex]]
            }
        }

        //이전 페이지리스트 버튼
        function prevPgList() {
            if ( recentListIndex <= 0) {
                console.log(pagerList)
            } else {
                recentListIndex = recentListIndex - 1

                recentViewPages.value = [...recentPagerList[recentListIndex]]
            }
        }

        //////////////

        //다음 페이지 버튼
        function nextPg() {
            if ( recentPage == totalPage) {
                console.log(totalPage)
            } else {
                recentPage = recentPage + 1

                recentPgData.value = [...dataArr[recentPage]]
            }
        }

        //이전 페이지 버튼
        function prevPg() {
            if ( recentPage <= 0) {
                console.log(totalPage)
            } else {
                recentPage = recentPage - 1

                recentPgData.value = [...dataArr[recentPage]]
            }
        }

        //

        function noticeCustSearch() {
            console.log(noticeCust.value.value)
            if (noticeCust.value.value != '') {
                copyOfNotice.value = copyOfNotice.value.filter((x) => x.CUSTOMER.includes(noticeCust.value.value))
            } else {
                copyOfNotice.value = onelineNotices.value
            }
            
        }

        function saveNtTexts() {
            isShowSaved.value = true
            //저장된 내용을 여기서 전송하세요
        }

</script>
<style lang="scss" scoped>
    .spt-texts-head, .spt-item-line {
        grid-template-columns: 3rem 5rem 3fr 8rem 5rem 4rem;
    }

    .spt-page-title {
        display: flex;
        justify-content: space-between;
    }

    .oneline-note-manage-button {
        font-size: var(--fnt-title-sm);
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: .5rem;
        background-color: rgba(var(--deepblue), .25);
        padding: .25rem .75rem;
        border-radius: 2rem;
        color: rgb(var(--white));
        filter: drop-shadow(0 0 12px rgba(var(--black), .25));

        svg {
            // opacity: .7;
            font-size: var(--fnt-M);
        }

        &:hover {
            background: linear-gradient(170deg, rgba(var(--coldblue), .85) 0%, rgba(var(--coldblue), .85) 20%, rgba(8, 241, 217, .7) 90%);
            opacity: .7;
        }
    }

    #sptNoticeManage {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100vw;
        height: 100vh;
        background-color: rgba(var(--black), .45);

        .common-button-container {
            margin-top: .5rem;
        }

        .spt-texts-container {
            margin-bottom: .5rem;
            overflow-y: scroll;
            height: 70vh;
        }

        .spt-search-line {
            background-color: rgba(var(--deepblue), 0.15);
            margin-bottom: .5rem;
        }

        .spt-item-line {
            min-height: 2.25rem;
            height: fit-content;
            cursor: default;
        }
    }

    .notice-inner-texts {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: .5rem .75rem 0 .75rem;

        textarea {
            border: 1px solid rgba(var(--deepblue), .45);
            width: 100%;
            min-height: 5rem;
            outline: 0;
            background-color: rgba(var(--black), .025);
            padding: .5rem;
        }

        button {
            background-color: rgb(var(--deepblue));
            border-radius: 2rem;
            padding: .35rem .5rem;
            width: 4rem;
            color: rgb(var(--white));
        }

        .common-button-container {
            justify-content: flex-end;

            svg {
                margin-right: 0;
            }

            .nt-inner-save {
                background-color: rgba(var(--soft-coldblue))
            }

        }
    }

    //팝업창 전체
    .spt-notice-manage-body {
        background-color: rgb(var(--white));
        border-radius: .5rem;
        padding-bottom: .5rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 50vw;
        overflow: hidden;

    }

    .spt-notice-manage-head {
        display: flex;
        justify-content: flex-start;
        font-size: var(--fnt-title-sm);
        align-items: center;
        gap: .5rem;
        background-color: rgba(var(--deepblue), 1);
        color: rgb(var(--white));
        padding: .5rem;

        button {
            margin-left: auto;
        }
    }
    
    .spt-notice-manage-texts {
        padding: 1rem .5rem 0 .5rem;
    }

    #sptNoticeManage .spt-item-line {
        display: flex;
        flex-direction: column;
    }

    .spt-item-line .spt-item-inner-line {
        display: grid;
        grid-template-columns: 3rem 8rem 1fr 10rem;
        align-items: center;
        padding: 0.5rem 0;
        cursor: pointer;

        p:nth-child(2) {
            
        }

        p:nth-child(3) {
            text-align: left;
            padding: 0 1rem;
            font-weight: 800;
        }
    }

    #sptNoticeManage .spt-texts-head {
        grid-template-columns: 3rem 8rem 1fr 10rem;
        background: transparent;
        background-color: rgba(var(--black), .25);
    }

    #ntInnerSaveAlarmContainer {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        background-color: rgba(var(--black), .45);
        width: 100vw;
        height: 100vh;

    }

    #ntInnerSaveAlarm {
        position: absolute;
        
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem;
        background-color: rgb(var(--white));
        display: flex;
        flex-direction: column;
        // border: 2px solid rgba(var(--deepblue), 1);
        border-radius: .5rem;

        p {
            display: flex;
            gap: .5rem;
            font-size: var(--fnt-title-sm);
        }

        .common-button-container {
            justify-content: center;
        }

    }

</style>