<template>
    <SubPageHero />

    <section v-for="item in newsList" class="container div-main-text">
        <div id="divSearchLine">
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
        </div>

        <div id="divNews">
            <div v-for="subItem in item.children">
                <router-link :to="{name: 'NewsDetail', params: {id: subItem.number}}"><!-- 반복구간 시작 -->
                    <div class="div-item">
                        <img data-item-img :src="subItem.thumImg" alt="">
                        <ul>
                            <li data-item-category>{{ subItem.category }}</li>
                            <li data-item-title>{{ subItem.title }}</li>
                            <li data-item-etc>
                                <p data-item-date>{{ subItem.date }}</p>
                                <p data-item-hits>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                                    <span>{{ subItem.views }}</span>
                                </p>
                            </li>
                        </ul>
                        <button class="button-item-detail">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </router-link><!-- 반복구간 종료 -->
            </div>
        </div>

        <div class="list-btm-buttons"><!-- 목록 하단 버튼라인 -->
            <router-link to="/csnotice/소식/wr">
                <button class="button-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
                    <p>글쓰기</p>
                </button>
            </router-link>
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
            <li data-each-pager>2</li>
            <li data-each-pager>3</li>
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

    const newsList = ref([
        {
            url: '/news/',
            children: [
                {
                    number: '5',
                    thumImg: '/src/assets/images/news/news_05_01.jpg',
                    category: '회의',
                    title: '커브길 스마트 가드레일 우수조달신청 진행을 위한 조달청 주최 컨설팅 회의',
                    date: '2022.10.16',
                    views: '77'
                },
                {
                    number: '4',
                    thumImg: '/src/assets/images/news/news_04.jpg',
                    category: '행사',
                    title: '[3분기 워크샵]늦여름밤이 저물어가는 워크샵 현장에서',
                    date: '2022.07.03',
                    views: '120'
                },
                {
                    number: '3',
                    thumImg: '/src/assets/images/news/news_03.jpg',
                    category: '기타',
                    title: '22년도 산업안전보건교육',
                    date: '2022.08.20',
                    views: '105'
                },
                {
                    number: '2',
                    thumImg: '/src/assets/images/news/news_02.jpg',
                    category: '행사',
                    title: '22년도 하반기 스마트가드레일 성과공유회 워크샵 with 동의과학대학교 산학협력단',
                    date: '2022.07.03',
                    views: '148'
                },
                {
                    number: '1',
                    thumImg: '/src/assets/images/news/news_01.jpg',
                    category: '행사',
                    title: '22년도 1분기 워크샵-캠프파이어가 있는 밤',
                    date: '2022.03.20',
                    views: '172'
                }
            ]
        }
    ])
</script>

<style lang="scss" scoped>
    /* 본문 */

    #divNews {
        @apply w-full border-black border-t-2 grid py-5 gap-x-4 gap-y-8;

        grid-template-columns: repeat(4, minmax(20%, 1fr));
    }

    /* item 내부 */
    .div-item {
        @apply flex-col border-b-2 border-black relative rounded-br-sm hover:opacity-90 cursor-pointer;
    }

    [data-item-img] {
        @apply rounded;

        aspect-ratio: 3/2;
    }

    [data-item-category] {
        @apply mt-4 mb-2;

        color: rgba(var(--clr-inter-shade), .35);
        font-size: var(--fnt-lg);
    }

    [data-item-title] {
        @apply leading-6 h-12 text-ellipsis overflow-hidden mb-7;

        font-size: var(--fnt-lg);
        color: rgba(var(--clr-inter-shade), 1);
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }

    [data-item-etc] {
        @apply flex gap-2 mb-4;

        font-size: var(--fnt-lg);
        color: rgba(var(--clr-inter-shade), 1);
    }

    [data-item-hits] {
        @apply flex items-center;

        &:before {
            @apply inline-block h-2 w-px mr-2;

            content:'';
            background: rgba(var(--clr-inter-shade), .25);
        }

        > svg {
            @apply w-3.5 mr-1;
        }
    }

    .button-item-detail {
        @apply absolute w-10 h-10 bg-black right-0 -bottom-px rounded-t-sm rounded-br-sm;

        > span {
            @apply absolute w-px h-3 bg-white flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;

            &:last-child {
                @apply rotate-90
            }
        }
    }
</style>
