<template>
    <SubPageHero />

    <section class="container div-main-text">
        <div id="divSearchLine">
            <!-- <select data-totalsearch-select>
                <option value="cd-total">전체</option>
                <option value="cd-title">제목</option>
                <option value="cd-day">날짜</option>
            </select> -->

            <div class="line-vr"></div>
            <input class="total-search-input" type="text" @keyup.enter="searchNt()">
            <button data-search-button @click="searchNt()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            </button>
        </div>

        <!-- 모든 게시글 -->
        <div class="div-notice-board">
            <div class="table-title">
                <div>번호</div>
                <div>제목</div>
                <div>등록일</div>
            </div>

            <div id="divTextLines" class="notice-main-board">
                <div v-for="subitem in noticeGroup.children.slice().reverse()" data-board-title-line> <!--916- 글 목록 -->
                    <router-link :to="{name: 'NoticeDetail', params: {id: subitem.bindIndex}}"><!-- 글 한줄 시작 -->
                        <div class="table-text">
                            <div> {{ subitem.bindIndex + 1 }} </div>
                            <div class="board-titles-div">{{ subitem.title }}</div>
                            <div> {{ subitem.date }} </div>
                        </div>
                    </router-link><!-- 글 한줄 끝 -->
                </div>
            </div>
        </div>

        <!-- 검색결과전용 -->
        <div id="divTextLines">
            <div v-for="subitem in resultList" data-board-title-line> <!--916- 글 목록 -->
                <router-link :to="{name: 'NoticeDetail', params: {id: subitem.bindIndex}}"><!-- 글 한줄 시작 -->
                    <div class="table-text">
                        <div> {{ subitem.bindIndex + 1 }} </div>
                        <div class="board-titles-div">{{ subitem.title }}</div>
                        <div> {{ subitem.date }} </div>
                    </div>
                </router-link><!-- 글 한줄 끝 -->
            </div>
        </div>

        <div class="list-btm-buttons"><!-- 목록 하단 버튼라인 -->
            <!-- <router-link :to="{name: 'NoticeWr'}">
                <button class="button-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
                    <p>글쓰기</p>
                </button>
            </router-link> -->
        </div>
    </section>

    <div class="pager-set">
        <i class="pager-arrow arr-left-end">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
        </i>
        <i class="pager-arrow arr-left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg> -->
        </i>
        <ul class="pager-numbers">
            <li data-each-pager>1</li>
        </ul>
        <i class="pager-arrow arr-right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg> -->
        </i>
        <i class="pager-arrow arr-right-end">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
        </i>
    </div>
</template>

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'

    // store에서 영역별 데이터 import
    import { useNoticeStore } from '@/stores/noticeSt'
    import { storeToRefs } from 'pinia'

    const noticeStore = useNoticeStore()
    const { noticeGroup } = storeToRefs(noticeStore)

    // 검색230622
    let resultList = ref()

    async function searchNt() {
        await nextTick()

        const srchValue = document.querySelector('.total-search-input').value
        const allWr = document.querySelector('.notice-main-board')

        if ( srchValue != null ) {
            resultList.value = noticeGroup.value.children.filter((f) => f.title.toString().toUpperCase().includes(srchValue) || f.textAll.toString().toUpperCase().includes(srchValue))
            allWr.style.display = "none"
        } else {
            allWr.style.display = "block"
        }
    }
</script>

<style lang="scss" scoped>

</style>

<!-- 고객센터 / 전역 공통스타일 -->