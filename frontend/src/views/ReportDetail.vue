<template>
    <SubPageHero />

    <section v-if="reportGroup[getId]" class="container div-main-text">
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

        <div id="divReportDetail">
            <div id="divDetailTitle"><!-- 제목영역 -->
                <p data-Report-detail-title>{{ reportGroup[getId].title }}</p>
                <div id="divTitleBottom">
                    <p data-title-date>{{ reportGroup[getId].date }}</p>
                    <p data-title-hits>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                        {{ reportGroup[getId].views }}
                    </p>
                </div>
            </div>

            <div id="divDetailText"><!-- 본문영역 -->
                <img :src="reportGroup[getId].thumImg" />
                <p class="linkTo flex">
                    <font-awesome-icon icon="fa-solid fa-link" />
                    <a :href="reportGroup[getId]?.linkTo">{{ reportGroup[getId]?.linkTo }}</a>
                </p>
                <p>보도내용의 직접적인 외부 게재는 저작권위반에 해당하는 관계로 해당 기사를 열람할 수 있는 링크를 게재합니다.</p>
                <p>상단 링크를 통하여 이동하시면 자세한 내용을 열람하실 수 있습니다.</p>
            </div>
            <div id="divMileStone">
                <a href="#" v-if="0 > prevArticle" ref="prevLink">
                    <div id="divMilePrev">
                        <p>이전 글</p>
                        <p data-milestone-prev-title>이전 글이 없습니다.</p>
                        <p data-milestone-prev-date>-</p>
                    </div>
                </a>

                <a :href="'/reportdata/' + (getId - 1)" v-else ref="prevLink">
                    <div id="divMilePrev">
                        <p>이전 글</p>
                        <p data-milestone-prev-title>{{ reportGroup[getId - 1]?.title }}</p>
                        <p data-milestone-prev-date>{{ reportGroup[getId - 1]?.date }}</p>
                    </div>
                </a>

                <a href="#" v-if="dataAmount < nextArticle" ref="nextLink">
                    <div id="divMileNext">
                        <p>다음 글</p>
                        <p data-milestone-next-title v-if="dataAmount < nextArticle">다음 글이 없습니다.</p>
                        <p data-milestone-next-date v-if="dataAmount < nextArticle">-</p>
                    </div>
                </a>

                <a :href="'/reportdata/' + (getId + 1)" v-else ref="nextLink">
                    <div id="divMileNext">
                        <p>다음 글</p>
                        <p data-milestone-next-title>{{ reportGroup[getId + 1]?.title }}</p>
                        <p data-milestone-next-date>{{ reportGroup[getId + 1]?.date }}</p>
                    </div>
                </a>
            </div>
        </div>

        <div class="detail-btm-buttons"><!-- 목록 하단 버튼라인 -->
            <router-link :to="{name: 'ReportData'}">
                <button class="button-white">
                    <p>목 록</p>
                </button>
            </router-link>
            <!-- <router-link :to="{name: 'ReportWr', params: {id: reportGroup[getId - 1].number}}">
                <button class="button-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
                    <p>수 정</p>
                </button>
            </router-link> -->
        </div>
    </section>
</template>

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
    import { useRoute } from 'vue-router'

    //store에서 영역별 데이터 import
    import { useReportStore } from '@/stores/reportSt'
    import { storeToRefs } from 'pinia';

    const reportStore = useReportStore()
    const { reportGroup } = storeToRefs(reportStore)



    const getParams = useRoute()
    const getId = parseInt(getParams.params.id)



    const dataAmount = parseInt(reportGroup.value.length);
    const nextArticle = parseInt(getId + 2);
    const prevArticle = parseInt(getId - 1);

    const currentArray= reportGroup.value[getId];
    const nextTitle = currentArray["title"];
</script>

<style lang="scss" scoped>
    #divReportDetail {
        @apply w-full border-black border-t-2;

        margin-top: 2.5rem;
    }

/* 본문 */

    #divDetailText {
        @apply pt-4 pb-8;

        > img {
            @apply mb-2 object-cover;

            max-height:50vh;
        }

        > p {
            font-size: var(--fnt-md);
            color: rgba(var(--clr-inter-shade), 1);

            @apply py-1 leading-5;

            &.linkTo{
                @apply mb-8 flex items-center gap-1 hover:font-bold;

                > svg{
                    width:.7rem;
                }
            }
        }
    }

    #divMileStone {
        @apply border-y-2 border-black flex flex-col;
    }

    #divMilePrev, #divMileNext {
        @apply grid py-2 cursor-pointer;

        grid-template-columns: 5rem 1fr 7rem;
        font-size: var(--fnt-md);
        color: rgba(var(--clr-inter-shade), 1);

        & + div {
            border-top: 1px solid rgba(var(--clr-inter-shade), .15);
        }
    }

    [data-milestone-prev-title], [data-milestone-next-title] {
        @apply pl-4;
    }

    [data-Report-detail-title] {
        font-size: var(--fnt-title-sm);

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
            content: '';
            background: rgba(var(--clr-inter-shade), .25);

            @apply inline-block h-2 w-px mx-2;
        }

        > svg {
            @apply w-3 mr-2;
        }
    }

    [data-milestone-prev-date], [data-milestone-next-date] {
        @apply text-center;
    }

    .div-work-ing {
        @apply w-full bg-slate-100 flex items-center justify-center mb-6;

        font-size: var(--fnt-title-sm);
        min-height: 5rem;
    }
</style>