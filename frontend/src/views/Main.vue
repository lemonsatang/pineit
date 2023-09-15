<template>
    <div class="overflow-hidden">
        <section id="mainHero">
            <div class="hero-overlay">
                <div class="container mx-auto">
                    <p class="hero-text-small">전문가들이 신뢰하는 IT 기업</p>
                    <h2 class="hero-text-large">
                        <span>소나무</span><span>정보기술</span>
                    </h2>
                </div>
            </div>

            <video class="hero-video" autoplay loop muted playsinline>
                <source src="/src/assets/misc/main-fhd.mp4" type="video/mp4">
            </video>
        </section>

        <section id="mainCatchPhrase">
            <div class="container">
                <h2 class="catch-phrase-header">소나무정보기술은...</h2>
                <p class="catch-phrase-1">고객사의 경쟁력 향상을 위한 최적의 IT 솔루션을 제공하는 기업입니다.</p>
                <p class="catch-phrase-2">국내외 우수 벤더들과의 전략적 제휴와 다양한 산업 분야에서 축적된 노하우를 기반으로 최신 기술 트렌드 및 비즈니스 요구사항을 반영하여 최고의 서비스를 제공합니다.</p>
            </div>
        </section>

        <section id="mainPortfolio">
            <article class="portfolio-category">
                <dl class="portfolio-description">
                    <dd data-pf-category-subtext>생산관리시스템</dd>
                    <dt data-pf-category-name>
                        <h2 data-main-headTitles>MES</h2>
                    </dt>
                    <dd data-pf-category-maintext>
                        인력, 장비, 자재 등의 생산 자원 흐름 및 공정 진행 과정 등을 실시간으로 확인 및 기록할 수 있도록 시스템을 전산화 및 자동화하여 생산성을 극대화할 수 있습니다.
                    </dd>
                    <dd data-pf-category-tag>
                        <p class="portfolio-tag">스마트 공장</p>
                        <p class="portfolio-tag">스마트 공방</p>
                        <p class="portfolio-tag">제조업</p>
                    </dd>
                </dl>

                <div class="portfolio-picture">
                    <img src="/src/assets/images/main-category-mes.jpg" alt="" data-pf-category-image>
                </div>
            </article> <!-- 사업분야 아이템 -->

            <article class="portfolio-category">
                <dl class="portfolio-description">
                    <dd data-pf-category-subtext>전사적자원관리시스템</dd>
                    <dt data-pf-category-name>
                        <h2 data-main-headTitles>ERP</h2>
                    </dt>
                    <dd data-pf-category-maintext>
                        조직이 최적의 능력을 발휘할 수 있는 체계화된 시스템을 구축합니다.
                    </dd>
                    <dd data-pf-category-tag>
                        <p class="portfolio-tag">인사관리</p>
                        <p class="portfolio-tag">사업관리</p>
                        <p class="portfolio-tag">프로젝트 관리</p>
                    </dd>
                </dl>

                <div class="portfolio-picture">
                    <img src="/src/assets/images/main-category-erp.jpg" alt="" data-pf-category-image>
                </div>
            </article> <!-- 사업분야 아이템 -->

            <article class="portfolio-category">
                <dl class="portfolio-description">
                    <dd data-pf-category-subtext>온라인 사이트 및 서비스 구축</dd>
                    <dt data-pf-category-name>
                        <h2 data-main-headTitles>WEB · APP</h2>
                    </dt>
                    <dd data-pf-category-maintext>
                        보다 높은 접근성으로 고객에게 다가가는 웹 사이트를 제공합니다.
                    </dd>
                    <dd data-pf-category-tag>
                        <p class="portfolio-tag">랜딩 페이지</p>
                        <p class="portfolio-tag">웹 사이트</p>
                        <p class="portfolio-tag">SaaS</p>
                    </dd>
                </dl>

                <div class="portfolio-picture">
                    <img src="/src/assets/images/main-category-web.jpg" alt="" data-pf-category-image>
                </div>
            </article> <!-- 사업분야 아이템 -->
        </section>

        <section id="mainIntro">
            <div id="mainIntroContainer" class="flex flex-row gap-10 container mx-auto h-96 container-intro">
                <div class="intro-title">
                    <h2>소나무정보기술은</h2>

                    <p>젊은 패기와 유연한 사고로 무한한 성장 가능성을 갖고 있는 기업입니다.</p>
                    <p></p>
                </div>

                <div class="intro-sections">
                    <div class="intro-parts-container">
                        <!-- <div class="intro-part main">
                            <p data-intro-part-name>인사의 글</p>
                        </div> -->

                        <div class="intro-inner-part">
                            <div id="historyPart" class="intro-part">
                                <router-link :to="{name: 'History'}">
                                    <p data-intro-part-name>연혁</p>
                                    <!-- <img src="/src/assets/images/history.jpg" alt=""> -->
                                    <p data-intro-mob>소나무정보기술의 history를 소개합니다</p>
                                    <p data-intro-mob-button>바로가기</p>
                                </router-link>
                            </div>

                            <div id="mapPart" class="intro-part">
                                <router-link :to="{name: 'Map'}">
                                    <p data-intro-part-name>오시는 길</p>
                                    <!-- <img src="/src/assets/images/welcome.jpg" alt=""> -->
                                    <p data-intro-mob>소나무정보기술 찾아오시는 길 </p>
                                    <p data-intro-mob-button>바로가기</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="intro-background-image">
                <video class="w-full h-full" autoplay loop muted playsinline style="transform: rotateY(180deg)">
                    <source src="/src/assets/misc/office.mp4" type="video/mp4">

                    <img src="" alt="" class="w-full h-full" data-intro-background-image>
                </video>
            </div>
        </section>

        <section id="mainNews" class="container mx-auto mb-14">
            <div class="recent-article">
                <div class="recent-article-header flex flex-col justify-between">
                    <div>
                        <span data-main-sub-headTitles>PINE Report</span>
                        <h2 data-main-headTitles>보도자료</h2>
                    </div>

                    <div class="recent-article-pagination">
                        <button type="button">
                            <i class="ri-arrow-left-s-line arr-left-report"></i>
                        </button>

                        <button type="button">
                            <i class="ri-arrow-right-s-line arr-right-report"></i>
                        </button>
                    </div>
                </div>

                <swiper-container v-bind="swiperOptions01" class="recent-article-slider">
                    <swiper-slide v-for="reportItem in reportGroup" class="recent-article-item">
                        <router-link :to="{name: 'ReportDetail', params: {id: reportItem.number}}">
                            <div class="recent-article-picture">
                                <img :src="reportItem.thumImg" alt="" data-recent-article-image-report>
                            </div>

                            <dl class="recent-article-post">
                                <dt data-recent-article-title>
                                    <h4>{{ reportItem.title }}</h4>
                                </dt>
                                <dd data-recent-article-info>
                                    <span data-recent-article-author>{{ reportItem.site }}</span>
                                    <hr>
                                    <span data-recent-article-date>{{ reportItem.date }}</span>
                                </dd>
                            </dl>
                        </router-link>
                    </swiper-slide>
                </swiper-container>
            </div>
        </section>

        <section id="mainGallery" class="container mx-auto">
            <div class="recent-article">
                <div class="recent-article-header flex flex-col justify-between">
                    <div>
                        <span data-main-sub-headTitles>PINE News</span>
                        <h2 data-main-headTitles>소나무 소식</h2>
                    </div>

                    <div class="recent-article-pagination">
                        <button type="button">
                            <i class="ri-arrow-left-s-line arr-left-news"></i>
                        </button>

                        <button type="button">
                            <i class="ri-arrow-right-s-line arr-right-news"></i>
                        </button>
                    </div>
                </div>

                <swiper-container v-for="item in getNewsData" v-bind="swiperOptions01" class="recent-article-slider">
                    <swiper-slide v-for="newsItem in item.children" class="recent-article-item">
                        <router-link :to="{name: 'NewsDetail', params: {id:newsItem.number}}">
                            <div class="recent-article-picture">
                                <img :src="newsItem.thumImg" alt="" data-recent-article-image-news>
                            </div>

                            <dl class="recent-article-post">
                                <dt data-recent-article-title>
                                    <h4>{{ newsItem.title }}</h4>
                                </dt>
                                <dd data-recent-article-info>
                                    <span data-recent-article-author>{{ newsItem.category }}</span>
                                    <hr>
                                    <span data-recent-article-date>{{ newsItem.date }}</span>
                                </dd>
                            </dl>
                        </router-link>
                    </swiper-slide>
                </swiper-container>
            </div>
        </section>

        <Popup popupTitle="공지사항" :popupDuration="new Date('2023-08-02')">
            <img src="/image/2023_vacation_summer.svg" alt="">
        </Popup>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import { useRoute } from 'vue-router'

    //store에서 영역별 데이터 import
    import { useReportStore } from '@/stores/reportSt'
    import { useNewsStore } from '@/stores/newsSt'
    import { storeToRefs } from 'pinia';

    import Popup from '@/components/Popup.vue'

    const reportStore = useReportStore()
    const { reportGroup } = storeToRefs(reportStore)

    const newsStore = useNewsStore()
    const { newsGroup } = storeToRefs(newsStore)
    const getNewsData = [...newsGroup.value]

    // import Swiper core and required modules
    // import { Navigation, Pagination, Scrollbar, Autoplay, Controller } from 'swiper';

    // Import Swiper
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
        slidesPerView: 3,
        loop: true,
        navigation: true,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.arr-right-report',
            prevEl: '.arr-left-report',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            }
        }
    }

    const swiperOptions02 = {
        // Install modules
        // modules: [Navigation, Pagination, Scrollbar, Autoplay],
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.arr-right-news',
            prevEl: '.arr-left-news',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            }
        }
    }

    const getParams = useRoute()
    const getId = getParams.params.id

    //※주의 : 보도자료 = reportGroup, 소나무 소식 = newsGroup

    console.log(newsGroup.value)
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    h2 {
        font-size: var(--fnt-subt);
        margin-top: .5rem;
    }
    .recent-article-item {
        width: 33% !important;

    }

    #mainNews, #mainGallery {
        overflow: hidden;
    }

    .recent-article-slider {
        width: 100%;
    }

    #bizContact.common-cs-footer {
        margin-top: 7rem !important;
    }

    .overflow-hidden {
        padding-bottom: 7rem;
    }
</style> <!-- Stylesheet Ends -->