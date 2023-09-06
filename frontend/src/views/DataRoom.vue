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
            <input class="total-search-input" type="text" @keyup.enter="searchDt()">
            <button data-search-button @click="searchDt()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            </button>

        </div>

        <!-- 모든 게시글 -->
        <div class="div-data-room">
            <div class="table-title">
                <div>번호</div>
                <div>제목</div>
                <div>등록/수정일</div>
            </div>

            <div id="divTextLines" class="dataroom-main-board">
                <div v-for="subitem in sortedList" data-board-title-line>
                    
                    <router-link :to="{name: 'DataRoomDetail', params: {id: subitem.bindIndex}}">
                        <div class="table-text">
                            <div>{{ subitem.bindIndex + 1 }}</div>
                            <div class="board-titles-div">{{ subitem.title }}</div>
                            <div>{{ subitem.date }}</div>
                        </div>
                    </router-link>
                                
                </div>
            </div>
            
        </div>

        <!-- 검색결과전용 -->
        <div class="div-data-room">

            <div v-for="subitem in resultList">
                <div data-board-title-line>
                    
                    <router-link :to="{name: 'DataRoomDetail', params: {id: subitem.bindIndex}}">
                        <div class="table-text">
                            <div>{{ subitem.bindIndex + 1 }}</div>
                            <div class="board-titles-div">{{ subitem.title }}</div>
                            <div>{{ subitem.date }}</div>
                        </div>
                    </router-link>
                                
                </div>
            </div>
            
        </div>
        
        <div class="list-btm-buttons"><!-- 목록 하단 버튼라인 -->
            <!-- <router-link to="/dataroom/wr">
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
    import router from '@/router';

    //store에서 영역별 데이터 import
    import { useDataRoomStore } from '@/stores/dataRoomSt'
    import { storeToRefs } from 'pinia';

    const dataRoomStore = useDataRoomStore()
    const { dataGroup } = storeToRefs(dataRoomStore)

    //DB에서 가져온 원본이 아닌 사본을 데이터로 활용
    const copyOfData = [...dataGroup.value]

    //날짜별 정렬 sorting / date 예시 : '2022.11.12'
    const sortedList = copyOfData.sort((x, y) => x.date < y.date ? 1 : -1);
    console.log(sortedList)

    //검색기능 230621
    let resultList = ref()

    async function searchDt() {
        await nextTick()

        let srchValue = document.querySelector('.total-search-input').value;
        let allWr = document.querySelector('.dataroom-main-board');

        if ( srchValue != null ) {
            resultList.value = dataGroup.value.filter((f) => f.title.toString().toUpperCase().includes(srchValue) || f.texts.toString().toUpperCase().includes(srchValue))
            allWr.style.display = "none";
        } else {
            allWr.style.display = "block";
            resultList.value = null;
        }
    }

</script>

<style lang="scss" scoped>

    .div-data-room {
        @apply w-full border-black;

    }

    .table-text {
        @apply grid text-center cursor-pointer;

        grid-template-columns:6rem 1fr 10rem;
        border-bottom:1px solid rgba(0,0,0, .15);

        > div {
            @apply text-black py-3;
        }
    }

    .board-titles-div {
        @apply text-start px-2;
    }

    //비밀번호 확인창

    [data-pw-check-modal] {
        @apply top-0 left-0;

        z-index: 999;
    }

    [data-pw-check-body] {
        @apply fixed flex flex-col;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem 1.25rem;
        background-color: rgb(var(--clr-inter-pane));
        filter: drop-shadow(0 0 18px rgba(var(--clr-inter-shade), .15));
        border: 1px solid rgb(var(--clr-inter-shade));
        width: 15rem;

        input {
            border: 1px solid rgb(var(--clr-inter-shade));
            padding: 0.25rem .25rem .25rem 1.5rem;
            margin-top: 0.75rem;
            background-image: url(/image/lock-fill.svg);
            background-position: .35rem;
            background-repeat: no-repeat;
        }

        > div {
            @apply grid w-full;

            margin-top: 1rem;
            gap: .5rem;
            grid-template-columns: 1fr 1fr;
        }

        button {
            @apply w-full;

            background-color: rgb(var(--clr-inter-shade));
            padding: .5rem .75rem;
            color: rgb(var(--clr-inter-pane));
        }

        [data-pw-check-incorrect] {
            margin-top:.25rem;
            color: rgb(var(--clr-inter-error));
        }

        [data-pw-check-plzInput] {
            margin-top:.25rem;
            color: rgb(var(--clr-inter-error));
        }
    }
</style>