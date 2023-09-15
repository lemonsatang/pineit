<template>
    <SubPageHero />

    <section class="container div-main-text">
        <!-- <div id="divSearchLine">
            <select data-totalsearch-select>
                <option value="cd-total">전체</option>
                <option value="cd-title">제목</option>
                <option value="cd-day">날짜</option>
            </select>

            <div class="line-vr"></div>
            <input data-totalsearch-input type="text">
            <button data-search-button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            </button>
        </div> -->

        <article v-if="dataGroup[getId]">
            <div id="divDataRoomDetail">
                <div id="divDetailTitle"><!-- 제목영역 -->
                    <p data-DataRoom-detail-title>{{dataGroup[getId]?.title}}</p>

                    <div id="divTitleBottom">
                        <p data-title-date>{{dataGroup[getId]?.date}}</p>
                        <p data-title-hits>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                            {{dataGroup[getId]?.views}}
                        </p>
                    </div>
                </div>
                <div id="divDetailText"><!-- 본문영역 -->
                    <p v-if="pwChkComplete">{{ dataGroup[getId]?.texts }}</p>
                    <p v-else>글 내용은 비밀번호 입력 후 확인하실 수 있습니다.</p>

                    <div id="divUploadedFiles">
                        <p>Uploaded file list</p>
                        <ul data-uploaded-list>
                            <li data-uploaded-file v-for="link in dataGroup[getId]?.uploaded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z"/></svg>
                                <p v-if="pwChkComplete">
                                    <a :href="link.fileName" download>{{ link.name }}</a>
                                </p>
                                <p v-else>첨부파일은 비밀번호 입력 후 확인하실 수 있습니다.</p>
                            </li>

                        </ul>
                    </div>
                </div>
                <div id="divMileStone">
                    <a href="#" v-if="0 > prevArticle" ref="prevLink">
                        <div id="divMilePrev">
                            <p>이전 글</p>
                            <p data-milestone-prev-title>이전 글이 없습니다.</p>
                            <p data-milestone-prev-date>-</p>
                        </div>
                    </a>

                    <router-link :to="{name: 'DataRoomDetail', params: {id: getId - 1}}" v-else ref="prevLink">
                        <div id="divMilePrev">
                            <p>이전 글</p>
                            <p data-milestone-prev-title>{{ dataGroup[getId - 1]?.title }}</p>
                            <p data-milestone-prev-date>{{ dataGroup[getId - 1]?.date }}</p>
                        </div>
                    </router-link>

                    <a href="#" v-if="dataAmount < nextArticle" ref="nextLink">
                        <div id="divMileNext">
                            <p>다음 글</p>
                            <p data-milestone-next-title>다음 글이 없습니다.</p>
                            <p data-milestone-next-date>-</p>
                        </div>
                    </a>
                    <router-link :to="{name: 'DataRoomDetail', params: {id: getId + 1}}" v-else ref="nextLink">
                        <div id="divMilePrev">
                            <p>다음 글</p>
                            <p data-milestone-prev-title>{{ dataGroup[getId + 1]?.title }}</p>
                            <p data-milestone-prev-date>{{ dataGroup[getId + 1]?.date }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </article>
        <div class="detail-btm-buttons"><!-- 목록 하단 버튼라인 -->
            <router-link to="/dataroom">
                <button class="button-white">
                    <p>목 록</p>
                </button>
            </router-link>
            <!-- <router-link to="">
                <button class="button-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
                    <p>수 정</p>
                </button>
            </router-link> -->
        </div>
    </section>
    <dialog data-pw-check-modal ref="checkModal">
            <div data-pw-check-body>
                <p>비밀번호를 입력해주세요.</p>
                <p data-pw-check-plzInput v-if="plzInput">비밀번호가 입력되지 않았습니다.</p>
                <p data-pw-check-incorrect v-if="pwAlert">비밀번호를 다시 확인해주세요.</p>
                <input type="password" ref="inputValue" @keyup.enter="chkPw(dataGroup[getId].modals)">
                <div>
                    <button type="button" @click="chkPw(dataGroup[getId].modals)">확인</button>
                    <router-link :to="{name: 'Dataroom'}" @click="initPw(dataGroup[getId].modals), [dataGroup[getId].modals = false]">
                        <button type="button">뒤로가기</button>
                    </router-link>
                </div>
            </div>
        </dialog>
</template>

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
    import { useRoute } from 'vue-router'
    import router from '@/router';

    //store에서 영역별 데이터 import
    import { useDataRoomStore } from '@/stores/dataRoomSt'
    import { storeToRefs } from 'pinia';

    const pwChkComplete = ref(false)

    const dataRoomStore = useDataRoomStore()
    const { dataGroup } = storeToRefs(dataRoomStore)

    const getParams = useRoute();
    const getId = parseInt(getParams.params.id)

    const dataAmount = parseInt(dataGroup.value.length);
    const nextArticle = parseInt(getId + 2);
    const prevArticle = parseInt(getId - 1);

    const currentArray= dataGroup.value[getId];

    const checkModal = ref(null)

    //입장시 비밀번호 체크

    onMounted(() => {
        let thisPw = dataGroup.value[getId].password

        if ( thisPw != null ) {
            checkModal.value.showModal()

        } else {
            pwChkComplete.value = true
        }
    })

    //비밀번호 체크 함수

    let pwAlert = ref(false)
    let plzInput = ref(false)

    const inputValue = ref(null)

    function chkPw(g) {
        let inputPass = inputValue.value.value
        let thisPassword = dataGroup.value[getId].password

        if ( thisPassword == inputPass ) {
            pwChkComplete.value = true
            checkModal.value.close()
        } else if ( inputPass == '' ) {
            pwAlert.value = false
            plzInput.value = true
        } else if ( inputPass != '' && thisPassword != inputPass ) {
            plzInput.value = false
            pwAlert.value = true
        }
    }

    //비밀번호 확인창 닫기
    function initPw(e) {
        checkModal.value.close()

        //경고문구 초기화
        plzInput.value = false
        pwAlert.value = false

        //입력한 비번 초기화
        inputValue.value.value = null
    }
</script>

<style lang="scss" scoped>
    *:focus {
        outline: 0;
    }

    #divDataRoomDetail {
        @apply w-full border-black border-t-2;

        margin-top: 2.5rem;
    }

/* 본문 */

    #divDetailText {
        @apply pt-4 pb-2;

        > img {
            @apply mb-2 mx-auto w-full;
        }

        > p {
            font-size: var(--fnt-md);
            color: rgba(var(--clr-inter-shade), 1);
        }
    }

/* 이전글/다음글 */

    #divMileStone {
        @apply border-y-2 border-black flex flex-col;

        > div {
            @apply grid py-2 cursor-pointer;

            grid-template-columns: 5rem 1fr 7rem;
            font-size: var(--fnt-md);
            color: rgba(var(--clr-inter-shade), 1);

            & + div {
                border-top: 1px solid rgba(var(--clr-inter-shade), .15);
            }
        }
    }

    [data-milestone-prev-title], [data-milestone-next-title] {
        @apply pl-4;
    }

    [data-DataRoom-detail-title] {
        font-size:var(--fnt-title-sm);

        @media screen and (width < 1024px) {
            @apply font-bold;

            font-size:var(--fnt-md);
        }
    }

    #divTitleBottom {
        @apply flex mt-2;
    }

    [data-title-hits] {
        @apply flex items-center;

        &:before {
            @apply inline-block h-2 w-px mx-2;

            content: '';
            background: rgba(var(--clr-inter-shade), .25);
        }
        > svg {
            @apply w-3 mr-2;
        }
    }

    [data-milestone-prev-date], [data-milestone-next-date] {
        @apply text-center;
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
            margin-top: 1rem;
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