<template>
    <SubPageHero />

    <section v-if="newsGroup[0].children[getId]" class="container div-main-text">
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

        <div id="divNewsDetail">
            <div id="divDetailTitle"><!-- 제목영역 -->
                <p data-News-detail-title>{{ newsGroup[0].children[getId]?.title }}</p>
                <div id="divTitleBottom">
                    <p data-title-date>{{newsGroup[0].children[getId]?.date}}</p>
                    <p data-title-hits>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                        {{newsGroup[0].children[getId]?.views}}
                    </p>
                </div>
            </div>

            <div id="divDetailText"><!-- 본문영역 -->
                <div id="imgContainers">
                    <swiper-container ref="swiperEl" v-bind="swiperOptions01" class="recent-article-slider"> 
                        <swiper-slide v-for="subImg in newsGroup[0].children[getId]?.imgAll" class="div-work-ing">
                            <img :src="subImg.img" />
                            
                        </swiper-slide>
                        
                        <div class="arr-right-report"></div>
                        <div class="arr-left-report"></div>
                    </swiper-container>

                    <div class="recent-article-pagination">
                        <button type="button">
                            <i class="ri-arrow-left-s-line arr-left-news"></i>
                        </button>

                        <button type="button">
                            <i class="ri-arrow-right-s-line arr-right-news"></i>
                        </button>
                    </div>
                </div>
                <!-- <div class="grid grid-cols-3 gap-1">
                    <div v-for="subImg in newsGroup[0].children[getId]?.imgAll" class="div-work-ing">
                        <img :src="subImg.img" />
                    </div>
                </div> -->

                <p v-html="newsGroup[0].children[getId]?.textAll">
                    
                </p>
                
            </div>

            <div id="divMileStone">
                <a href="#" v-if="0 > prevArticle" ref="prevLink">
                    <div id="divMilePrev">
                        <p>이전 글</p>
                        <p data-milestone-prev-title>이전 글이 없습니다.</p>
                        <p data-milestone-prev-date>-</p>
                    </div>
                </a>

                <a :href="'/news/' + (getId - 1)" v-else ref="prevLink">
                    <div id="divMilePrev">
                        <p>이전 글</p>
                        <p data-milestone-prev-title>{{ newsGroup[0].children[getId - 1]?.title }}</p>
                        <p data-milestone-prev-date>{{ newsGroup[0].children[getId - 1]?.date }}</p>
                    </div>
                </a>

                <a :href="'/news/' + (getId + 1)" v-if="nextArticle < dataAmount" ref="nextLink">
                    <div id="divMileNext">
                        <p>다음 글</p>
                        <p data-milestone-next-title>{{ newsGroup[0].children[getId + 1]?.title }}</p>
                        <p data-milestone-next-date>{{ newsGroup[0].children[getId + 1]?.date }}</p>
                    </div>
                </a>

                <a href="#" v-else ref="nextLink">
                    <div id="divMileNext">
                        <p>다음 글</p>
                        <p data-milestone-next-title>다음 글이 없습니다.</p>
                        <p data-milestone-next-date>-</p>
                    </div>
                </a>
            </div>
        </div>

        <div class="detail-btm-buttons"><!-- 목록 하단 버튼라인 -->
            <router-link :to="{name: 'News'}">
                <button class="button-white">
                    <p>목 록</p>
                </button>
            </router-link>
            <!-- <router-link :to="{name: 'NewsWr', params: {id: newsGroup[0].children[getId - 1].number}}">
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
    import { useNewsStore } from '@/stores/newsSt'
    import { storeToRefs } from 'pinia';

    const newsStore = useNewsStore()
    const { newsGroup } = storeToRefs(newsStore)

    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, Autoplay, Controller, Thumbs } from 'swiper';

    // Import Swiper
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/controller';
    import 'swiper/css/autoplay';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/thumbs';

    const swiperOptions01 = {
        // Install modules
        // modules: [Navigation, Pagination, Scrollbar, Autoplay],
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.arr-right-news',
            prevEl: '.arr-left-news',
        },
        breakpoints: {
            1024: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2,
            }
        }
    }


    const swiperEl = ref()
    console.log(swiperEl)
    
    function testChk() {
        swiperEl.value.slidesPerView = 3;
    }

    // const swiper = new Swiper(swiperEl, {
    //     slidesPerView: 3,
    // })

    onMounted(() => {
        
    })
    

    

    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
        // thumbsSwiper.value = swiper;
    };

    const getParams = useRoute()
    const getId = parseInt(getParams.params.id)
    
    console.log(newsGroup.value)

    const nextArticle = parseInt(getId + 1);
    const prevArticle = parseInt(getId - 1);

    const currentArray = newsGroup.value[0].children;
    // const currentChildren = currentArray['children'];
    const getValue = currentArray[getId];
    const getNumber = parseInt(getValue.number);

    console.log(currentArray)

    const dataAmount = currentArray.length;
</script>

<style lang="scss" scoped>
    #divNewsDetail {
        @apply w-full border-black border-t-2;

        margin-top: 2.5rem;
    }

/* 본문 */

    #divDetailText {
        @apply pt-4 pb-8;

        > img {
            @apply mb-2 mx-auto w-full;
        }

        > p {
            font-size: var(--fnt-md);
            color: rgba(var(--clr-inter-shade), 1);

            @apply py-1;
        }
    }

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

    [data-News-detail-title] {
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

    #divDetailText {
        .swiper-slide {
            img {
               max-width: 100%;
            }
        }
        
    }
</style>