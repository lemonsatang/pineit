<template>
    <SubPageHero />

    <div class="container mt-20 mx-auto">
        <section id="solution-box">
            <div class="solution-top-img">
                <article class="basis-3/6">
                    <div class="M-title">
                        <span>솔루션 개발</span>
                        <h3 class="font-bold pb-6 pt-1">Solution Development</h3>
                    </div>
                    <img src="@/assets/images/main-category-web.jpg" class="solution-in-img"/>
                </article>
                <article class="basis-3/6">
                    <span class="D-title">솔루션 개발</span>
                    <h3 class="D-title font-bold pb-6 pt-1">Solution Development</h3>
                    <p>
                        <strong class="solution-definition-subTitle">개요</strong>
                        <p class="solution-definition-text">모든 솔루션의 기본적인 목적은 수집된 데이터를 활용하여 기업의 운영현황을 파악하고, 분석하여 업무를 개선할 수 있는 실질적인 정보를 제공하는 것이다.</p>
                        <strong class="solution-definition-subTitle">소나무 정보기술은..</strong>
                        <p class="solution-definition-text">기업의 문제점과 수준 확인하고, 1:1 맞춤형 시스템 구축을 통하여 기업에 수익의 최대화, 공장운영의 최적화를 지원하고, 시스템 구축보다 중요한것이 지속가능한 유지보수시스템의 구현입니다.
                            자사는 국내 제조업의 공장 운영용 솔루션개발 구축한 다양한 경험을 가지고 있으며, 기업을 위한 최적의 IT솔루션 및 컨설팅을 제공 할 수 있습니다</p>
                        <strong class="solution-definition-subTitle"></strong>
                        <p class="solution-definition-text"></p>
                    </p>
                    <article class="solution-tag">
                        <p>MES</p>
                        <p>ERP</p>
                        <p>PRMS</p>
                        <p>PLM</p>
                        <p>EMS</p>
                    </article>
                </article>
            </div>

            <div class="solution-mid-result">
                <h4 class="font-bold pb-6">도입효과</h4>
                <div class="solution-result-list">
                    <article class="solution-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>신뢰도 있는 공정관리</strong>
                            <p class="result-explain">수기로 작성은 이제그만~! </p>
                        </div>
                    </article>
                    <article class="solution-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>생산성 향상 및 비용절감</strong>
                            <p class="result-explain">재고관리 및 데이터수집과 분석의 자동화</p>
                        </div>
                    </article>
                    <article class="solution-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>실시간 모니터링</strong>
                            <p class="result-explain">신속한 정보파악 및 불량 문제점 해결</p>
                        </div>
                    </article>
                    <article class="solution-result-text">
                        <span class="dot"></span>
                        <div>
                            <strong>모바일 지원</strong>
                            <p class="result-explain">PC뿐 아니라 언제 어디서나 모바일로 관리 및 모니터링 가능</p>
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
        </section><!--Solution-box-->
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'

    const tempGroup = ref({
        solutions: {
            linkTo: '/portfolio/solutions/',
            cate: 'solutions',
            children: [

                {
                    bindIndex: 1,
                    name: '철스크랩 제조 D사',
                    serviceText: '폐자원을 재창조하여 산업의 꽃으로 승화시켜 깨끗한 환경을 조성하는 철스크랩 전문기업',
                    mainImg: '/image/DJ/Steel.jpg',//1000*580
                    tag:'ERP'
                },
                {
                    bindIndex: 2,
                    name: '수제마카롱 제조 D사',
                    serviceText: '온라인과 MES연동으로 생산과 출고를 한번에 가능하게 한 통합시스템 관리 프로그램',
                    mainImg: '/image/doublesweet/ds.jpg',
                    tag:'MES'
                },
                {
                    bindIndex: 3,
                    name: '인쇄 제조 P사',
                    serviceText: '인쇄업에 모든 프로세스를 전산화한 프로그램',
                    mainImg: '/image/pb/pb.jpg',
                    tag:'ERP'
                },
                {
                    bindIndex: 4,
                    name: '자동차 부품 사출성형 H사',
                    serviceText: '사출성형공장의 생산정보 관리 및 모니터링하는 프로그램',
                    mainImg: '/image/HI/HI.jpg',
                    tag:'MES'
                }
            ]
        }
    })
</script> <!-- Logic Ends -->

<style lang="scss">
    /** SolutionDev.css*/

    .M-title{
        display:none;
    }

    .solution-definition-subTitle{
        @apply inline-block py-3 ;

        font-size: var(--fnt-lg);
    }

    .solution-definition-text{
        @apply leading-relaxed
    }

    .solution-top-img {
        @apply flex gap-10 items-start;
    }

    .solution-in-img {
        @apply rounded-md object-cover;
        aspect-ratio: 16/9;
    }

    .solution-tag {
        @apply flex mt-4;

        > p{
            @apply p-2 m-2 ;

            background-color: rgb(var(--clr-id-02));
            color: rgb(var(--clr-inter-pane));
        }
    }

    .solution-mid-result {
        @apply my-16;

        font-family: 'NS-Neo', sans-serif;
    }

    .solution-result-list {
        @apply grid gap-4;

        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }

    .solution-result-text {
        @apply py-7 px-5 rounded-sm flex items-center gap-8;

        background-color: rgba(var(--clr-id-01), .6);
        font-size: var(--fnt-title-sm);
    }

    .dot {
        @apply w-3 h-3 inline-block flex-shrink-0 ;

        background-color: rgb(var(--clr-id-02));
    }

    .result-explain {
        @apply pt-2.5 ;

        font-size: var(--fnt-lg);
    }

    /*SolutionDev 반응형*/
    @media screen and (max-width: 1024px) {
        .D-title{
            display: none
        }

        .M-title{
            display: block
        }

        .solution-top-img{
            @apply flex-col gap-3;
        }
    }

    @media screen and (max-width: 720px) {
        .solution-result-text{
            @apply py-4 px-3 gap-5;

            font-size: var(--fnt-md);

            .result-explain{
                font-size: var(--fnt-md);
                line-height: 1.4;
            }
        }

        .solution-result-list{
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        }
    }

    @media screen and (max-width: 425px) {
        .solution-tag{

            > p {
                @apply p-1 m-1 ;
            }
        }
    }
</style> <!-- Stylesheet Ends -->