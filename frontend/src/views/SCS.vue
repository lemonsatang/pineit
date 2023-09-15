<template>
    <SubPageHero />

    <div class="container mt-20 mx-auto">
        <section>
            <div class="scs-top-box">
                <article class="basis-3/6 flex-shrink-0">
                    <div class="M-title">
                        <span>스마트 커팅</span>
                        <h3 class="font-bold pb-6 pt-1">Smart Cutting</h3>
                    </div>
                    <img src="/image/scs/main_img1.jpg" class="scs-in-img"/>
                </article>
                <article class="basis-3/6">
                    <span class="scs-title D-title">스마트 커팅</span>
                    <h3 class="scs-title font-bold pb-6 pt-1 D-title">Smart Cutting</h3>
                    <p>
                        <strong class="scs-definition-subTitle">개요</strong>
                        <p class="scs-definition-text ">스마트커팅은 CNC 기계 가공에서 생산성 혁신을 창출하는 Digital Transformnation 솔루션입니다. 스마트커팅은 CNC공작기계로부터 가공조건 데이터 등과 |oT로 가공상태/장비 데이터를 모니터링하여 데이터분석/진단/최적를 수행하고, 데이터학습을통해서 최적작업을 수행하도록 장비와 공정조건을 제어할 수 있습니다</p>
                        <br />
                        <p class="scs-definition-text">많은 고객사에서 스마트커팅을 제조현장에 적용함으로써 가공 부하기반 이송속도 적응제어와 공구파손인지 후공구자동교환등을 통해서 생산시간 단축과 함께 품질향상을 이루어 냈습니다. 또한 고객사가 기존에 구축한 PoP, MES, ERP 등과도 데이터 호환을 지원함으로써 제조업의 디지털 전환을 적극적으로 지원하고 있습니다.</p>
                        <strong class="scs-definition-subTitle"></strong>
                        <p class="scs-definition-text"></p>
                    </p>
                    <h4 class="font-bold mb-3">흐름도</h4>
                    <img src="/image/scs/cutting-Flow.png" />

                    <article class="scs-tag">
                        <p>파손진단</p>
                        <p>이송속도</p>
                        <p>가공부하</p>
                        <p>최적화</p>
                        <p>상태진단</p>
                        <p>모니터링</p>
                    </article>
                </article>
            </div>

            <div class="scs-mid-point ">
                <h4 class="font-bold pb-6 mt-10">주요기능</h4>
                <div class="scs-mid-box">
                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5"><span class="dot"></span><strong>데이터학습을 통한 최적가공(이송속도 적응제어)</strong></p>
                            <p class="point-explain">데이터학습 기반으로 개선된 레퍼런스데이터(Reference data)생성 </p>
                            <p class="point-explain">적용사례에서 레퍼런스데이터 적용후 가공시간 11.5% 단축, 가공부하 38.2% 감소, 이송속도 12.2% 향상</p>
                            <img src="/image/scs/data1.jpg" class="mt-3.5"/>
                            <img src="/image/scs/data2.jpg" />
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5 "><span class="dot"></span><strong>이송속도 적응제어</strong></p>
                            <p class="point-explain">가공부하를 최적 범위 내에서 유지하도록 이송속도를 적응제어 </p>
                            <p class="point-explain">과부하 구간에서 이송속도 감소를 통한 가공부하 저감 등 가공품질 향상</p>
                            <p class="point-explain">저부하 구간에서 이송속도 증가를 통한 가공시간 단축과 생산성 향샹</p>
                            <img src="/image/scs/Speed1.jpg" class="my-3.5"/>
                            <img src="/image/scs/Speed2.jpg" />
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5"><span class="dot"></span><strong>채터(Chatter)진단 및 제거</strong></p>
                            <p class="point-explain">가공 중에 채터가 발생할 때 진동테이터와 커팅다이나믹스 기반의 채터 진단과 최적RPM으로 제어하여 채터제거 및 가공품질 향상 </p>
                            <img src="/image/scs/Chatter1.jpg" class="my-3.5"/>
                            <img src="/image/scs/Chatter2.jpg" />
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5 "><span class="dot"></span><strong>공구파손 검출</strong></p>
                            <p class="point-explain">가공부하 데이터의 패턴 비교를 통해서 공구파손을 검출 </p>
                            <p class="point-explain">가공부하 정상가공부하 범위를 벗어나는 경우 공구파손 알람 </p>
                            <img src="/image/scs/Broken.jpg" class="my-3.5"/>
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5 "><span class="dot"></span><strong>공구마모 검출</strong></p>
                            <p class="point-explain">가공부하 데이터 학습을 통해서 공구마모를 진단 </p>
                            <p class="point-explain">공구별 수명 상한 레퍼런스를 산출 및 공구수명 예측 </p>
                            <p class="point-explain">공구별 적정한 공구교환 시점을제공 </p>
                            <img src="/image/scs/worn_out.jpg" class="my-3.5"/>
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5 "><span class="dot"></span><strong>소경공구 파손 검출</strong></p>
                            <p class="point-explain">소경공구(∅1mm 이하)의 파손을 실시간 검출하여 알람 및 자동 Feed-hold를 하며, 파손 위치를 기억하여 재가공 시 공구의 가공위치 셋팅을 지원함 </p>
                            <img src="/image/scs/s-tool.jpg" class="my-3.5"/>
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5 "><span class="dot"></span><strong>NC코드 최적화</strong></p>
                            <p class="point-explain">가공이력 데이터를 분석하여 가공이력데이터 내에 있는 채터와 과부하 등의 불량작업의 원인이 된 가공조건의 수정 및 가공시간 단축을 위해 절삭조건 최적화를 수행하는 NC코드를 생성</p>
                            <img src="@/assets/images/scs/NC1.jpg" class="my-3.5"/>
                            <img src="/image/scs/NC2.jpg" />
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5 "><span class="dot"></span><strong>Data Analysis</strong></p>
                            <p class="point-explain">가공이력데이터를 분석하여 불량발생 위치와원인 등을 분석</p>
                            <p class="point-explain">품질불량이 발생한 가공위치, 가공조건, 가공부하 데이터의 상관관계에 기반한 정상상태/이상상태등을 축출</p>
                            <p class="point-explain">공구수명 전주기 동안 시계열에 따른 가공부하 패턴 및 툴카운트 축출</p>
                            <img src="/image/scs/analysis.jpg" class="my-3.5"/>
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5 "><span class="dot"></span><strong>Data Reference</strong></p>
                            <p class="point-explain">적응제어, 공구마모/파손 진단율 위한 reference data 생성 </p>
                            <p class="point-explain">공상태/공구상태 진단을 위한 reference data 생성</p>
                            <p class="point-explain">이송속도 적응제어와 공구상태 진단을 동시에 수행하는 최적 reference 생성</p>
                            <img src="/image/scs/reference.jpg" class="my-3.5"/>
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5 "><span class="dot"></span><strong>스핀들 상태진단</strong></p>
                            <p class="point-explain">스핀들 모듈의 모터,베어링,기어 등의 진동 데이터를 분석하여 스핀들 상태를 실시간으로 모니터링하고 장비의 고장 및 이상상태를 조기에 감지</p>
                            <img src="/image/scs/Spindle.jpg" class="my-3.5"/>
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5 "><span class="dot"></span><strong>가공공정관리 모니터링</strong></p>
                            <p class="point-explain">장비 가동상태의 정보와 장비별 가공횟수, 가공상태, 가공중단등을 가시화하며, MES에서 상기 정보를 사용할 수 있도록 데이터 호환을 지원</p>
                            <img src="/image/scs/Monitoring.jpg" class="my-3.5"/>
                        </div>
                    </article>
                </div>
            </div>

            <div class="scs-device">
                <h4 class="font-bold mt-20 mb-5">엣지 디바이스</h4>
                <div class="scs-mid-box">
                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5"><span class="dot"></span><strong>Cutting Edge(Advance2/4)</strong></p>
                            <img src="/image/scs/edge1.jpg" class="mb-3.5"/>
                            <p class="point-explain">CNC데이터를 실시간 모니터링: 실제 이송속도, 실제 RPM 등</p>
                            <p class="point-explain">스핀들모터,이송서보모터 부하의 실시간 모니터링</p>
                            <p class="point-explain">이송속도 최적화를 위한적응제어 (전류센서와스핀둘로드 기반) </p>
                            <p class="point-explain">공구 파손 검출 및 진단: 전류센서 기반</p>
                        </div>
                    </article>

                    <article class="scs-point-text">
                        <div>
                            <p class="flex items-center mb-2.5"><span class="dot"></span><strong>Cutting Edge(Premium2/4)</strong></p>
                            <img src="/image/scs/edge2.jpg" class="mb-3.5"/>
                            <p class="point-explain">CNC데이터를 실시간 모니터링: 실제 이송속도, 실제 RPM 등</p>
                            <p class="point-explain">스핀들모터/이송모터 부하 및 가공상태의 실시간 모니터링</p>
                            <p class="point-explain">이송속도 최적화를 위한적응제어, 채터 검출 및 제거 </p>
                            <p class="point-explain">공구마모 진단(전류센서 기반) 및 소경공구 파손 검출(가속도센서 기반)</p>
                        </div>
                    </article>
                </div>
            </div>

            <div class="scs-product">
                <h4 class="font-bold mt-20 mb-5">제품군</h4>
                <div class="scs-mid-box">
                    <article class="scs-point-text">
                        <p class="flex items-center pb-2.5"><span class="dot"></span><strong>Cutting Edge</strong></p>
                        <img src="/image/scs/sc1.jpg" class="my-3.5"/>
                    </article>
                    <article class="scs-point-text">
                        <p class="flex items-center pb-2.5"><span class="dot"></span><strong>학습시스템 & 데이터활용 SW</strong></p>
                        <img src="/image/scs/sc2.jpg" class="my-3.5"/>
                    </article>
                </div>
            </div>

            <div  class="card">
                <img src="/image/logo.png">
                <div class="card_in">
                    <p class="phone">프로젝트담당자</p>
                    <p class="name">송낙명 <span>전략기획팀 / 부장</span></p>
                    <p class="phone">010-5054-0122</p>
                    <p class="e-mail">spenguin@pineit.co.kr</p>
                </div>
            </div>
        </section>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
</script> <!-- Logic Ends -->

<style lang="scss">
    .M-title {
        display: none;
    }

    .scs-in-img {
        @apply rounded-md object-cover;

    }
    .scs-top-box{
        @apply flex gap-5 items-start;
    }
    .scs-mid-box{
        @apply flex flex-wrap gap-4;
    }

    .scs-definition-subTitle {
        display: inline-block;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-size: var(--fnt-lg);
    }

    .scs-definition-text {
        @apply leading-relaxed;

        font-size: var(--fnt-mlg);
    }

    .scs-tag {
        @apply flex mt-4;

        > p {
            @apply p-2;

            background-color: rgb(var(--clr-id-02));
            color: rgb(var(--clr-inter-pane));
            margin: 1rem .5rem 0;
        }
    }

    .scs-mid-point {
        margin: 4rem auto;
    }

    .dot {
        @apply w-3 h-3 inline-block flex-shrink-0  mr-5;

        background-color: rgb(var(--clr-id-02));
    }

    .scs-point-text {
        @apply py-7 px-5 rounded-md;

        flex-basis: 49.3%;
        font-size: var(--fnt-title-sm);
        background-color: rgb(var(--clr-inter-pane));

        > div{
            line-height: 1.5
        }
    }

    .point-explain {

        font-size: var(--fnt-mlg);
        text-indent: -11px;
        padding-left: 11px;

        &::before{
            content: "-  "
        }
    }

    .card {
        @apply flex gap-4 px-4 py-7 rounded-md my-20 mx-auto;

        width: 320px;
        background-color: #fff;
        box-shadow: -18px 22px 27px 0 rgba(0, 0, 0, .4);
    }

    .card_in {
        .name {
            @apply font-bold py-2;

            font-size: var(--fnt-lg);

            >span {
                color: rgba(0, 0, 0, .5);
                font-weight: normal;
                font-size: var(--fnt-sm);
            }
        }
    }

    /*scs 반응형*/

    @media screen and (max-width: 1550px) {
        .scs-mid-point,
        .scs-device,
        .scs-product {
            @apply mx-auto;

            max-width: 960px;
        }

        .scs-mid-box {
            @apply flex flex-col mx-auto;
        }
    }

    @media screen and (max-width: 1300px) {
        .scs-top-box {
            @apply flex-col;
        }

        .D-title {
            display: none
        }

        .M-title {
            display: block
        }

        .scs-in-img {
            aspect-ratio: 16/9;
            width: 100%;
        }
    }

    @media screen and (max-width: 1023px) {
        .scs-tag {
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width: 720px) {

    }

    @media screen and (max-width: 425px) {
        .card {
            width: 310px;
            box-shadow: -10px 8px 19px 0 rgba(0, 0, 0, .4);
        }

        .scs-point-text{
            font-size: var(--fnt-mlg);
        }

        .point-explain,
        .scs-definition-text{
            font-size: var(--fnt-md);
        }
    }
</style> <!-- Stylesheet Ends -->