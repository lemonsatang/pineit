<template>
    <SubPageHero />

    <div class="container mt-20 mx-auto">
        <h2 class="mb-8">연혁</h2>

        <section id="historyContainer">
            <div class="history-decades-item">
                <div class="history-decades-prefix">
                    <div data-decades-prefix-scroller>
                        20
                    </div>
                </div>

                <div class="history-decades-container">
                    <div class="history-years-item"> <!-- 2022 -->
                        <div class="history-years-prefix">
                            <div data-year-prefix-scroller>
                                22년
                            </div>
                        </div>

                        <article class="history-years-container">
                            <p>와인모임플랫폼 와인투게더 WEB 구축</p>
                            <p>조선통신사 디지털 아카이브 WEB / VR 구축</p>
                            <p>통합예약 커뮤니티 다이브채널 시즌 2</p>
                            <p>현대중공업 표준폼관리 시스템 WEB 구축</p>
                            <p>대지에스택 모바일 WEB 구축</p>
                            <p>메뉴판 주문앱 WEB/APP 구축</p>
                            <p>영인하이텍 홈페이지 구축</p>
                            <p>한국도로공사 경남본부 현장관리시스템 WEB 구축</p>
                            <p>울산광역교육연구정보원 스쿨넷 교육망 전산관리 WEB 구축</p>
                            <!-- <p>큐에스 XR, 3D 모델링</p> -->

                            <dl class="history-group">
                                <dt>ERP 모바일 APP</dt>
                                <dd class="detail-text">
                                    현대스틸, 화인, 이호기획, SNC, 대성테크윈, 현대오토솔루션
                                </dd>
                            </dl>

                            <dl class="history-group">
                                <dt>스마트팩토리 지원사업 - MES 구축</dt>
                                <dd class="detail-text">
                                    주)한동산업, 주)더블스윗, 이호기획, 주)가야양조, 주)영인하이텍, 주)프리비,
                                    주)삼화기업 주)금강에스엠, 주)화인, SNC, 주)태동스틸
                                </dd>
                            </dl>
                        </article>
                    </div>

                    <div class="history-years-item"> <!-- 2021 -->
                        <div class="history-years-prefix">
                            <div data-year-prefix-scroller>
                                21년
                            </div>
                        </div>

                        <article class="history-years-container">
                            <p>스마트 세이프 가드레일 2021-2022</p>
                            <p>통합예약 커뮤니티 다이브채널 구축</p>
                            <p>네트워크 플랫폼 윗팜 구축</p>
                            <p>DRONOUS 드론관제시스템 개발 참여</p>
                            <p>ISO 9001:2015 인증 획득</p>
                            <!-- <p>주) 큐에스 PRMS 구축</p> -->

                            <dl class="history-group">
                                <dt>스마트팩토리 지원사업 - MES 구축</dt>
                                <dd class="detail-text">
                                    주)이레콘텍, 주)KDA, 주)삼화기업, 주)대흥콘크리트, 주)화인, 주)프리비, 주)대지에스텍,
                                    주)이노메카닉스, 주)현대스틸, 주)현대스틸인천공장, 주)대성테크윈, SNC
                                </dd>
                            </dl>
                        </article>
                    </div>

                    <div class="history-years-item"> <!-- 2020 -->
                        <div class="history-years-prefix">
                            <div data-year-prefix-scroller>
                                20년
                            </div>
                        </div>

                        <article class="history-years-container">
                            <p>주) 소나무정보기술 설립</p>
                            <p>주) 코넥 테슬라 LHS라인 LMS시스템 구축</p>
                            <p>주) 코넥 테슬라 RHS라인 LMS시스템 구축</p>
                            <p>주) 제이소프트 기술 용역계약</p>
                            <p>주) THE SAFETY PMS시스템 구축</p>
                            <p>주) 부산철강 MES 구축</p>
                            <p>주) 웰스테크 MSS 기술지원계약</p>
                            <p>AR기반 양식장 수중모니터링 증강현실 (부산테크노파크)</p>
                            <p>SPSYSTEMS 5G AR기반 스마트갠트리로더 개발 (부산경제진흥원)</p>
                            <p>주) 엔케이 Batch프로그램 구축</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
</script> <!-- Logic Ends -->

<style lang="scss">
    /** history.css*/
    #historyContainer {
        padding-inline-end: 1rem;
    }

    .history-decades-item {
        @apply flex;
    }

    .history-years-item {
        @apply flex gap-8;

        & + & {
            padding-block-start: 2.5rem;
            border-block-start: 1px solid rgba(var(--clr-id-02), .25);
        }

        &:not(:last-child) {
            padding-block-end: 2.5rem;
        }
    }

    .history-decades-prefix,
    .history-years-prefix {
        flex: 0 0 4ex;
        font-size: min(12rem, 4vmax);
        font-weight: 100;
        overflow: clip;
    }

    .history-decades-prefix {
        color: rgb(var(--clr-id-02));
        font-weight: 300;
        text-align: end;
    }

    .history-years-prefix {
        font-weight: 100;
        text-align: start;

    }

    [data-decades-prefix-scroller],
    [data-year-prefix-scroller] {
        @apply sticky top-20;
    }

    [data-decades-prefix-scroller] {
        &::before {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: .5rem;
            border-radius: .15rem;
            background-color: rgb(var(--clr-inter-warn));
            z-index: -1;
            content: '';
        }
    }

    .history-years-container {
        @apply flex flex-col gap-4;

        > p {
            font-weight: 750;
        }
    }

    .history-group {
        @apply p-2 rounded;

        background-color: rgba(var(--clr-id-02), .1);

        > dt {
            @apply mb-2;

            font-weight: 750;
        }
    }

    @media screen and (max-width: 1024px) {
        .history-decades-prefix,
        .history-years-prefix {
            flex: 0 0 4ex;
            font-size: var(--fnt-title-md);
        }

        .history-years-item {
            @apply gap-4;
        }
    }

    @media screen and (max-width: 720px) {

    }

    @media screen and (max-width: 425px) {

    }
</style> <!-- Stylesheet Ends -->