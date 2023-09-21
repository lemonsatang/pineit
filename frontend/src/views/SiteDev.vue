<template>
    <SubPageHero />

    <div class="container mt-20 mx-auto">
        <section id="site-box">
            <div class="site-top-img">
                <article class="basis-3/6">
                    <div class="M-title">
                        <span>기업 사이트 구축</span>
                        <h3 class="font-bold pb-6 pt-1">Corporate Home Page</h3>
                    </div>
                    <img src="@/assets/images/webapp.jpg" class="site-in-img"/>
                </article>
                <article class="basis-3/6">
                    <span class="D-title"> 기업 사이트 구축</span>
                    <h3 class="D-title font-bold pb-6 pt-1">Corporate Home Page</h3>
                    <p>
                        <strong class="site-definition-subTitle">개요</strong>
                        <p class="site-definition-text">홈페이지는 온라인상에서의 브로슈어이자 카탈로그입니다. 물리적인 광고 매체보다 쉽고 빠르게 정보를 업데이트할 수 있습니다. 새로운 제품이나 서비스, 이벤트 등과 같은 내용을 보다 효과적으로 전달 가능합니다.</p>
                        <strong class="site-definition-subTitle">소나무 정보기술은..</strong>
                        <p class="site-definition-text"> 잘만든 홈페이지가 있는 것 만으로도 고객에게 신뢰감을 줄 수 있습니다.</p>
                        <p class="site-definition-text">1:1 맞춤형 구축, 사업 본연의 목적에 맞는 홈페이지 제공으로 기업의 가치를 올려드립니다.</p>

                        <strong class="site-definition-subTitle"></strong>
                        <p class="site-definition-text"></p>
                    </p>
                    <article class="site-tag">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>VUE</p>
                        <p>Javascript</p>
                        <p>MS-SQL</p>
                    </article>
                </article>
            </div>

            <div class="site-mid-result">
                <h4 class="font-bold pb-6">도입효과</h4>
                <div class="site-result-list">
                    <article class="site-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>비지니스 홍보</strong>
                            <p class="result-explain">예전에 비해 많은 사람들이 온라인으로 활동을 함으로 탄탄한 웹사이트는 필수요소입니다.</p>
                        </div>
                    </article>
                    <article class="site-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>디지털 마케팅</strong>
                            <p class="result-explain">웹 기반 채널을 활용하여 회사 브랜드, 제품 또는 서비스에 대한 메시지를 잠재 고객에게 전파가능합니다.</p>
                        </div>
                    </article>
                    <article class="site-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>접근성 및 신뢰성 </strong>
                            <p class="result-explain">홈페이지는 24시간 정보를 제공합니다, 항상 열려 있기에 언제든지 상품 및 서비스 검색이 가능합니다.</p>
                        </div>
                    </article>
                    <article class="site-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>고객 서비스 향상</strong>
                            <p class="result-explain">장소나 시간에 구애받지 않고 FAQ, 뉴스레터 등을 통해 고객의 궁금증 해결 및 고객서비스 질 향상 됩니다.</p>
                        </div>
                    </article>
                </div>
            </div>

            <div class="site-bottom-portfolio">
                <h4 class="font-bold pb-6">구축사례</h4>
                <div class="portfolio-contents webApp" v-for="item in tempGroup" >
                    <article class="portfolio-list" >
                        <figure class="portfolio-img-box" v-for="subItem in item.children">
                            <router-link :to="{name: 'PortfolioDetail', params: {id: subItem.bindIndex, category: item.cate }}">
                                <div class="portfolio-img">
                                    <img :src="subItem.mainImg">
                                    <figcaption data-portfolio-text>
                                        {{ subItem.serviceText }}
                                    </figcaption>
                                </div>
                                <div class="portfolio-title">
                                    <h4>{{subItem.name}}</h4>
                                    <span data-portfolio-subTitle-tag>{{subItem.tag}}</span>
                                </div>
                            </router-link>
                        </figure>
                    </article>
                </div>
            </div>
        </section><!--site-box-->
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'

    const tempGroup = ref({
        web: {
            linkTo: '/portfolio/web/',
            cate: 'web',
            children: [
                {
                    bindIndex: 1,
                    name: '통합예약 커뮤니티 D사',
                    serviceText: '리조트와 교육을 동시에 간편한 스킨스쿠버예약 플랫폼',
                    mainImg: '/image/dive/dive.jpg',//1000*580
                    tag:'반응형'
                },
                {
                    bindIndex: 2,
                    name: '와인커뮤니티 플랫폼 W사',
                    serviceText: '와인 모임과 레스토랑 예약, 플랫폼 서비스',
                    mainImg: '/image/wine/wine.png',
                    tag:'반응형'
                },
                {
                    bindIndex: 3,
                    name: '스마트안전관리 K공사',
                    serviceText: '안전하고 편리하게 스마트한 교통관리 플랫폼',
                    mainImg: '/image/ex/ex.jpg',
                    tag:'반응형'
                },
                {
                    bindIndex: 4,
                    name: '스틸가공 전문 업체 H사',
                    serviceText: '입고, 발주, 조회등 모바일로 관리하는 내손안의 작은 ERP 시스템',
                    mainImg: '/image/HS/HS.jpg',
                    tag:'APP'
                }
            ]
        }
    })
</script> <!-- Logic Ends -->

<style lang="scss">
    /** siteDev.css*/

    .site-definition-subTitle {
        @apply inline-block py-3 ;

        font-size: var(--fnt-lg);
    }

    .site-definition-text {
        @apply leading-relaxed
    }

    .site-top-img {
        @apply flex gap-10 items-start;
    }

    .site-in-img {
        @apply rounded-md object-cover;
        aspect-ratio: 16/9;
    }

    .site-tag{
        @apply flex mt-4;

        > p {
            @apply p-2 m-2 ;

            background-color: rgb(var(--clr-id-02));
            color: rgb(var(--clr-inter-pane));
        }
    }

    .site-top-img {
        @apply flex gap-10 items-start;
    }

    .site-in-img {
        @apply rounded-md object-cover;

        aspect-ratio: 16/9;
    }

    .site-mid-result {
        @apply my-16;

        font-family: 'NS-Neo', sans-serif;
    }

    .site-result-list {
        @apply grid gap-4;

        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }

    .site-result-text {
        @apply py-7 px-5 rounded-sm flex items-center gap-8;

        background-color: rgba(var(--clr-id-01), .6);
        font-size: var(--fnt-title-sm);
    }

    .dot {
        @apply w-3 h-3 inline-block flex-shrink-0;

        background-color: rgb(var(--clr-id-02));
    }

    .result-explain {
        @apply pt-2.5 leading-5;

        font-size: var(--fnt-lg);
    }

    /*siteDev 반응형*/
    @media screen and (max-width: 1024px) {
        .site-top-img{
            @apply flex-col gap-3;
        }
    }

    @media screen and (max-width: 720px) {
        .site-result-text{
            @apply py-4 px-3;

            font-size: var(--fnt-md);

            .result-explain{
                font-size: var(--fnt-md);
                line-height: 1.4;
            }
        }

        .site-result-list{
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        }
    }

    @media screen and (max-width: 425px) {
        .site-tag {

            > p {
                @apply p-1 m-1 ;
            }
        }
    }
</style> <!-- Stylesheet Ends -->