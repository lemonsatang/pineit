<template>    

    <section class="common-board-wrap div-main-text">
        <div class="common-board-container">
            <div v-for="item in usrData" class="spt-header">
                <p>
                    <font-awesome-icon icon="fa-circle-user" />
                    <span class="spt-header-usrname">{{ item.usrnm }}</span> 님 안녕하세요.
                </p>
                <button class="spt-header-logout" type="button">
                    <router-link :to="{name: 'Login'}">
                        Logout
                    </router-link>
                </button>
            </div>
            <h1 class="spt-page-title">고객 문의</h1>
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
                    <router-link :to="{ name: 'SupportDt', params: { id: item.bindIdx } }" v-for="item in copyOfData" class="spt-item-line">
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
                <button type="button">
                    <font-awesome-icon icon="fa-chevron-left" />
                </button>
                <ul class="spt-pager-list">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul>
                <button type="button">
                    <font-awesome-icon icon="fa-chevron-right" />
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

        })
        .catch (error => { 
            toast.success('정보를 가져오던 도중 오류가 발생했습니다.')
            return
        })

</script>
<style lang="scss" scoped>
    .spt-texts-head, .spt-item-line {
        grid-template-columns: 3rem 5rem 3fr 8rem 5rem 4rem;
    }

</style>