<template>    

    <section class="common-board-wrap div-main-text">
        <div class="common-board-container">
            <SptHeader />
            <div class="spt-page-title">
                <h1 >고객 문의</h1>
                <button type="button">
                    
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

</template>
<script setup>
    import SptHeader from '@/components/SptHeader.vue';
    import { toast } from 'vue3-toastify'
    import axios from 'axios'

    //store에서 영역별 데이터 import
    import { useSptStore } from '@/stores/sptSt'
    import { storeToRefs } from 'pinia';

    const sptStore = useSptStore()
    const { sptAdmGroup } = storeToRefs(sptStore)

    const usrData = ref([])

    const copyOfData = ref([...sptAdmGroup.value])

    const stCheck = ref('st_all')
    const cstCorp = ref()
    const isShowNotify = ref(true)
    const floatingNote = ref()
    const srchInput = ref()
    const srchOpt = ref()

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

</script>
<style lang="scss" scoped>
    .spt-texts-head, .spt-item-line {
        grid-template-columns: 3rem 5rem 3fr 8rem 5rem 4rem;
    }

    .spt-page-title {
        display: flex;
        justify-content: space-between;
    }

</style>