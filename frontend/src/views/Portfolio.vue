<template>
    <SubPageHero />

    <div class="container mt-20 mx-auto" v-bind="itemObject">
        <section id="portfolio-box">
            <div class="portfolio-contents webApp" :class="containerClass" v-for="item in tempGroup" ref="itemContainer">
                <h3 class="sub-title">{{item.name}} </h3>
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
                <!-- <button @click="viewMores">더보기</button> -->
            </div>
        </section><!--portfolio-box-->
    </div>
</template> <!-- Template Ends -->

<script setup>

    import SubPageHero from '@/components/SubPageHero.vue'

    const tempGroup = ref({
        solutions: {
            name: '솔루션 개발',
            linkTo: '/portfolio/solutions/',
            cate: 'solutions',
            children: [

                {
                    bindIndex: 1,
                    name: '철스크랩 제조 D사',
                    serviceText: '철스크랩 재사용 할 수 있게 만든 프로그램',
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
                },
                {
                    bindIndex: 5,
                    name: '모빌리티 및 신재생 에너지 전문기업 I사',
                    serviceText: '주문과 출하를 통합 시스템으로 관리하기 위한 프로그램',
                    mainImg: '/image/IN/IN.jpg',
                    tag:'MES'
                },
                // {
                //     bindIndex: 6,
                //     name: '방산전문업체 Q사',
                //     serviceText: '인력, 비용, 일정등 전반적 인원을 하나로 관리하는 전략전 프로젝트 프로그램',
                //     mainImg: '/image/prms/prms.jpg',
                //     tag:'PRMS'
                // },
                {
                    bindIndex: 7,
                    name: '자동차와이퍼 전문 제조업체 Y사',
                    serviceText: '와이퍼 품질 향상을 위한 스마트 물류 관리 구축을 위한 프로그램',
                    mainImg: '/image/YI/YI.jpg',
                    tag:'MES'
                },
                {
                    bindIndex: 8,
                    name: '전통주류 제조 G사',
                    serviceText: '제품 생산과 출고를 하나의 통합시스탬으로 관리하기 위한 프로그램',
                    mainImg: '/image/GY/GY.jpg',
                    tag:'MES'
                },
                {
                    bindIndex: 9,
                    name: '자동차 플라스틱 부품 제조 업체 H사',
                    serviceText: '생산 작업자들의 편의성 및 효율성 향상을 위한 생산관리 프로그램',
                    mainImg: '/image/HDmes/HDmes.jpg',
                    tag:'MES'
                },
                {
                    bindIndex: 10,
                    name: '고품질 유리 및 샷시 제조 S사',
                    serviceText: '실시간 생산관리 환경 구축, 효율적 재고관리를 위한 프로그램',
                    mainImg: '/image/SW/SW.jpg',
                    tag:'MES'
                },
                {
                    bindIndex: 11,
                    name: '식품과 화학사업을 함께 성장시키는 S사 ',
                    serviceText: '운송관리시스템 ',
                    mainImg: '/image/SYS/SYS.jpg',
                    tag:'MES'
                }
            ]
        },
        web: {
            name:'WEB · APP',
            linkTo: '/portfolio/web/',
            cate: 'web',
            children: [
                {
                    bindIndex: 1,
                    name: '통합예약 커뮤니티 D사',
                    serviceText: '한곳에서 리조트와 교육까지 한번에~ 간편한 스킨스쿠버예약 플랫폼',
                    mainImg: '/image/dive/dive.jpg',//1000*580
                    tag:'반응형'
                },
                {
                    bindIndex: 2,
                    name: '와인커뮤니티 플랫폼 W사',
                    serviceText: '와인 모임과 레스토랑 예약까지 도입된 플랫폼 서비스',
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
                    serviceText: '입고, 발주, 조회등 모바일로 관리하는 내손안의 작은 ERP ',
                    mainImg: '/image/HS/HS.jpg',
                    tag:'APP'
                },
                {
                    bindIndex: 5,
                    name: '자동차 플라스틱 부품 제조 업체 H사',
                    serviceText: '실시간 재고, 출고 관리 모바일 MES ',
                    mainImg: '/image/HD/HD.jpg',
                    tag:'APP'
                },
                {
                    bindIndex: 6,
                    name: '네트워크 플랫폼 W사',
                    serviceText: '농장체험과 지역특산품 구매까지 한번에 해결한 플랫폼 서비스',
                    mainImg: '/image/WF/WF.jpg',
                    tag:'반응형'
                },
                {
                    bindIndex: 7,
                    name: '무인주문 태블릿 주문관리 M사',
                    serviceText: '간편한 터치로 부담없이 주문 및 결제 이용가능 테이블오더',
                    mainImg: '/image/menu/menu.jpg',
                    tag:'반응형'
                },
                {
                    bindIndex: 8,
                    name: '디지털 아카이브 J사 ',
                    serviceText: '조선통신사 기록물을 디지털로 간편하게 볼 수 있는 플랫폼 서비스',
                    mainImg: '/image/JS/JS.jpg',
                    tag:'반응형'
                },
                {
                    bindIndex: 9,
                    name: '교육망 전산관리 S사',
                    serviceText: '교육기관의 안정적인 인터넷 사용환경을 위한 사이트',
                    mainImg: '/image/net/net.jpg',
                    tag:'반응형'
                }
            ]
        },
        etc: {
            name:'기타',
            linkTo: '/portfolio/etc/',
            cate: 'etc',
            children: [
                {
                    bindIndex: 1,
                    name: '스마트가드레일',
                    serviceText: '도로구간 차량사고 발생 골든타임 사수 프로그램 ',
                    mainImg: '/image/guardeail/guardrail.jpg',//1000*580
                    tag:'모니터링'
                },
                {
                    bindIndex: 2,
                    name: '디지털 아카이브 J사',
                    serviceText: '온라인 가상 3D 전시 프로그램',
                    mainImg: '/image/JS/JS3D.jpg',//1000*580
                    tag:'3D 모델링'
                }
            ]
        }
    })

</script> <!-- Logic Ends -->

<style lang="scss">
    /** Portfolio.css*/

    #portfolio-box {
        @apply flex flex-col ;
    }

    .totalSol {
        @apply mt-6
    }

    .sub-title {
        @apply pb-3 mt-14 font-bold;

        font-family: 'NS-Neo', sans-serif;
    }
</style> <!-- Stylesheet Ends -->