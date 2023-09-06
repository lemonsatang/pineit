<template>
    <SubPageHero />

    <div class="container mt-20 mx-auto">
        <section v-for="item in thisRoute">
            <div v-if="pageId()" id="portfolio-detail-box">
                <h4 data-company-name>{{ pageId().name }}</h4>
                <div class="Pdetail-first-box">
                    <div >
                        <img :src="pageId().mainImg" class="Pdetail-company-img" />
                        <div class="titleText-box">
                            <strong data-point-titleText>{{ pageId().explanationTitle }}</strong>
                            <p data-point-bodyText>{{ pageId().explanationText }}</p>
                        </div>
                    </div>
                    <div class="Pdetail-skill-text">
                        <article class="service-text skill-text-list">
                            <span>서비스 설명</span>
                            <p>{{ pageId().serviceText }}</p>
                        </article>
                        <article class="skill-tool skill-text-list">
                            <span>사용기술</span>
                            <p>{{ pageId().skillText }}</p>
                        </article>
                        <article class="funtion-text skill-text-list">
                            <span>주요기능</span>
                            <p v-for=" text in pageId().features"> {{text.Text }} </p>
                        </article>
                    </div>
                </div>

                <div class="Pdetail-second-box">
                    <h4 class=" Pdetail-title">요구사항</h4>
                    <div class="Pdetail-demand-list">
                        <article class="Pdetail-demand-box" v-for=" demandTitle in pageId().demand">
                            <span class="dot"></span>
                            <div class="Pdetail-demand-text" >
                                <strong>{{demandTitle.Title }}</strong>
                                <p class="demand-explain" >{{demandTitle.Text}}</p>
                            </div>
                        </article>
                    </div>
                </div>

                <div class="Pdetail-third-box">
                    <h4 class="Pdetail-title">솔루션</h4>
                    <div class="Pdetail-solution-list">
                        <article class="Pdetail-solution-text">
                            <strong>As-is</strong>
                            <p v-for="asis in pageId().asIs">{{ asis.text }}</p>
                        </article>
                        <article class="Pdetail-solution-text">
                            <strong>To-be</strong>
                            <p v-for="tobe in pageId().toBe">{{ tobe.text }}</p>
                        </article>
                    </div>
                </div>

                <div class="Pdetail-last-box">
                    <h4 class="Pdetail-title"> UI 화면</h4>
                    <div class="Pdetail-ui-list">
                        <article class="Pdetail-ui-imgBox">
                            <!-- <div class="ui-left-img">
                                <img :src="pageId().leftImg" />
                            </div> -->
                            <div class="ui-right-img">
                                <img :src="pageId().leftImg" />
                                <img v-for="rImg in pageId().rightImg" :src="rImg.img" />
                            </div>
                        </article>
                    </div>
                </div>

               <div class="detail-btm-buttons">
                    <router-link :to="{name: 'Portfolio'}">
                        <button class="button-white p-button-white">
                            <p>목 록</p>
                        </button>
                    </router-link>
                </div> 
            </div>
        </section>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
    import { useRoute } from 'vue-router';

    const getParams = useRoute();
    const tmpId = getParams.params.id;
    const getCate = getParams.params.category;
    const portfolioGroup = [
        {
            category: 'solutions',
            submenu: [
                {
                    bindIndex: 1,
                    name: '철스크랩 제조 D사',
                    serviceText: '폐자원을 재창조하여 시용할 수 있게 만든 프로그램',
                    skillText: 'C#, Spring, Javascript, PHP, HTML, CSS, MSSQL',
                    mainImg: '/image/DJ/Steel.jpg', //1000*580
                    features: [
                        { Text: 'ERP 구축' },
                        { Text: '무인계근프로그램' },
                        { Text: '검수프로그램' },
                        { Text: '모바일 통합관리 프로그램' },
                        { Text: 'SCM' }
                    ],
                    explanationTitle: '폐자원을 재창조하여 산업의 꽃으로 승화시켜 깨끗한 환경을 조성하는 철스크랩 전문기업',
                    explanationText: '친환경적 신기술 개발, 공조설계 및 컨설팅, ICR/BCR, 유지보수 및 관리, 다양한 크린 장비 제작',
                    demand: [
                        { Title: '모바일연동', Text: '영업 시 모바일 웹을 통해 실시간으로 단가표 조회 하도록 함' },
                        { Title: '실시간 검수', Text: '웹 검수프로그램을 통해 무인계근으로 올라온 계근데이터를 실시간으로 검수' },
                        { Title: '무인계근시스템', Text: 'indicator와 연동하여 실시간 무게정보를 가져오고 cctv 캡쳐를 통해 차량 및 indicator 무게 이미지와 계근데이터 저장' },
                    ],
                    asIs: [
                        { text: '인사, 급여, 회계 등 기존 수기 작성' },
                        { text: '기존 비상업용 DATABASE 의한 시스템의 불안정' },
                        { text: '노후화된 펌프 점검에 따른 위험 요소 발생' },
                        { text: '매입/출고 단가 수기 작성' }
                    ],
                    toBe: [
                        { text: 'ERP 구축' },
                        { text: '상업용 DATABASE MSSQL DB 도입' },
                        { text: '길로틴 펌프 압력센서, 작동유 레벨게이지, 설비 I/F 도입' },
                        { text: '모바일 앱 연동 및 태블릿 PC 도입' }
                    ],
                    leftImg: '/image/DJ/main.jpg',
                    rightImg: [
                        { img: '/image/DJ/img1.jpg' },//1920*1040
                        { img: '/image/DJ/img2.jpg' },
                        { img: '/image/DJ/img3.jpg' },
                        { img: '/image/DJ/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 2,
                    name: '수제마카롱 제조 D사',
                    serviceText: '온라인 쇼핑몰과 MES 프로그램을 연동하여 제품의 생산과 출고를 하나의 통합 시스템으로 관리하기 위한 프로그램',
                    skillText: 'C#, MSSQL, Mobile(Android)',
                    mainImg: '/image/doublesweet/ds.jpg',
                    features: [
                        { Text: 'MES 구축' },
                        { Text: '쇼핑몰 API 연동' },
                        { Text: '실시간 설비 모니터링 프로그램' },
                        { Text: '자동계량 프로그램' }
                    ],
                    explanationTitle: '최상의 퀄리티를 자부하는 수제 마카롱 생산 업체!',
                    explanationText: '최고의 맛을 위한 균일한 계량시스템, 엄선된 재료의 보관을 위한 온습도 관리시스템, 실시간모니터링으로 최고의 품질을 유지하는 시스템 ',
                    demand: [
                        { Title: '쇼핑몰 API 연동', Text: '업체에서 사용중인 쇼핑몰의 정보를 MES 프로그램에 융합시켜 통합관리' },
                        { Title: '실시간 설비 모니터링', Text: '각 작업위치별 온도 및 습도정보를 실시간으로 모니터링' },
                        { Title: '자동계량', Text: '제품 생산을 위한 원재료 투입량을 전자저울로 자동계량' },
                    ],
                    asIs: [
                        { text: '생산, 입고, 출고 둥 기존 수기 작성' },
                        { text: '현재 쇼핑몰과 ERP 프로그램을 사용하여 중복 업무 발생' },
                        { text: '식품업체 특성상 작업장소별 온, 습도가 중요하나 파악 어려움' },
                        { text: '원재료의 투입량 및 재고를 수기 관리' }
                    ],
                    toBe: [
                        { text: 'MES 구축' },
                        { text: '쇼핑몰 API를 통해 MES 프로그램에서 통합관리' },
                        { text: '온, 습도센서 설비 도입' },
                        { text: '전자저울 자동계량 기능 도입' }
                    ],
                    leftImg: '/image/doublesweet/main.jpg',
                    rightImg: [
                        { img: '/image/doublesweet/img1.jpg' },
                        { img: '/image/doublesweet/img2.jpg' },
                        { img: '/image/doublesweet/img3.jpg' },
                        { img: '/image/doublesweet/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 3,
                    name: '인쇄 제조 P사',
                    serviceText: '기획, 편집, 홍보, 인쇄, 납품등 모든 프로세스를 전산화한 프로그램',
                    skillText: 'Delphi, C#, Python, Adroid, MSSQL',
                    mainImg: '/image/pb/pb.jpg',
                    features: [
                        { Text: 'ERP 구축' },
                        { Text: '근태관리 시스템에 일부 전자결재 시스템 도입' },
                        { Text: '아이디 관리 (인터넷 공용 아이디 관리를 권한을 통한 공유관리)' },
                        { Text: '택배사 송장관리 ' },
                        { Text: '프린트 인쇄 관제  ' },
                        { Text: '모바일 앱 관리 (주문 진행상상황 확인 등) ' },
                    ],
                    explanationTitle:'35년간 신뢰와 품질을 자부해온 인쇄전문업체',
                    explanationText: '각종 프로모션에 필요한 패키지, 쇼핑백,  포스터, 배너, 초대장, 카렌다, 다이어리 등 자체 개발한 스마트 토탈 ERP제작시스템과 함께 ONE - STOP SYSTEM 으로 자체 인쇄 장비를 보유하고 있어 기획 및 디자인과 제작까지 한번에 모든 해결가능 한 시스템',
                    demand: [
                        { Title: '업체별 담당자 등록', Text: '업체에서 사용중인 쇼핑몰의 정보를 MES 프로그램에 융합시켜 통합관리' },
                        { Title: '실시간 주문 인쇄관리', Text: '실시간으로 생산에서 어떤 주문이 인쇄공정을 거치고 있는지 확인' },
                        { Title: '공정진행과정 및 담당자 관리', Text: '고객사의 주문이 어떠한 공정으로 진행되는지, 혹은 어떤 작업자에게 지시되어 진행여부 확인' },
                        { Title: '부서별 전달사항 공유', Text: '작업지시에 대해서 부서별 전달사항을 전산화하여 공유하고 한번에 쉽게 볼수 있게 확인.' },
                        { Title: '모바일', Text: ' 외근자 및 영엽사원이 고객사의 주문진행상황을 실시간으로 확인.' },
                    ],
                    asIs: [
                        { text: '체계화된 코드관리 부재' },
                        { text: '주문에 대한 상태파악이 불가능' },
                        { text: '수금 및 세금 계산서발행 유무 불투명' },
                        { text: '주문관리 수기작성' }
                    ],
                    toBe: [
                        { text: 'ERP 구축' },
                        { text: '영업사원별 세금 계산서 미발행 및 수금관리가 용이' },
                        { text: '주문관리 전산화를 통한 주문 및 현재 공정 확인 용이' },
                        { text: '직원 휴가 및 잔업관리 용이' },
                        { text: '주문별 손익 파악 가능' }
                    ],
                    leftImg: '/image/pb/main.jpg',
                    rightImg: [
                        { img: '/image/pb/img1.jpg' },
                        { img: '/image/pb/img2.jpg' },
                        { img: '/image/pb/img3.jpg' },
                        { img: '/image/pb/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 4,
                    name: '자동차 부품 사출성형 H사',
                    serviceText: '사출성형공장의 생산정보 관리 및 모니터링하는 프로그램',
                    skillText: 'C#, MSSQL',
                    mainImg: '/image/HI/HI.jpg',
                    features: [
                        { Text: 'MES 구축' },
                        { Text: '실시간 설비 모니터링 프로그램' },
                        { Text: '근태관리 시스템' }
                    ],
                    explanationTitle:'우수한 품질을 인증받은 사출전문 제조 업체',
                    explanationText: '자동차, 전자제품에 들어가는 부품을 다루는 사출성형 공장의 생산 정보를 모니터링 및 관리 등 모든 프로세스를 통합한 MES',
                    demand: [
                        { Title: '자재 및 재고 관리', Text: '재고 조회 및 입출고 정보 실시간 확인하도록 통합관리' },
                        { Title: '인사, 근태, 급여 관리시스템', Text: '수기가 아닌  체계적인 관리로 통합' },
                        { Title: '실시간 등록 및  모니터링 관리', Text: '생산현장에 설치된 터치패널을 이용하여 실시간 등록 및 모니터링 관리' }
                    ],
                    asIs: [
                        { text: '불량제품으로 인한 재고부족,납기' },
                        { text: '자재발주 시 추가적인 자재소모, 불필요한 자원낭비 발생' },
                        { text: '수기를 통한 불량정보 수집, 낮은 신뢰도와 느린 전달과정' }
                    ],
                    toBe: [
                        { text: '불량 및 클레임감소' },
                        { text: '기업신뢰도 상승및 작업자의 품질의식 고취' },
                        { text: '생산량 대비 불량 감소, 자재소모 최소화' },
                        { text: '실시간 불량정보 수집 및 원인 분석' }
                    ],
                    leftImg: '/image/HI/main.jpg',
                    rightImg: [
                        { img: '/image/HI/img1.jpg' },
                        { img: '/image/HI/img2.jpg' },
                        { img: '/image/HI/img3.jpg' },
                        { img: '/image/HI/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 5,
                    name: '모빌리티 및 신재생 에너지 전문기업 I사',
                    serviceText: '주문과 출하를 하나의 통합 시스템으로 관리하기 위한 프로그램',
                    skillText: 'C#, MSSQL',
                    mainImg: '/image/IN/IN.jpg',
                    features: [
                        { Text: 'MES 구축' },
                        { Text: '쇼핑몰 API 연동' },
                        { Text: '실시간 주문정보 모니터링 프로그램' }
                    ],
                    explanationTitle:'자동차용 소재 부품, 전기자동차량 및 부품 개발 전문 기업',
                    explanationText: '온라인 쇼핑몰과 MES 프로그램을 연동하여 주문과 출하를 하나의 통합 시스템으로 관리하기 위한 프로그램',
                    demand: [
                        { Title: '쇼핑몰 API 연동', Text: '쇼핑몰 주문정보를 실시간으로 수집하여 DB에 저장하는 프로그램' },
                        { Title: '실시간 주문정보 모니터링', Text: '오프라인 매장에 설치된 디스플레이로 쇼핑몰 주문정보를 실시간으로 모니터링' }
                    ],
                    asIs: [
                        { text: '생산, 입고, 출고 둥 기존 수기 작성' },
                        { text: '현재 쇼핑몰과 ERP 프로그램을 사용하여 중복 업무 발생' },
                        { text: '여러 곳의 쇼핑몰을 하나하나 관리하고 있어 업무가 어려움' },
                        { text: '주문, 매출, 수입 등의 정보를 수치로만 기록' }
                    ],
                    toBe: [
                        { text: 'MES 구축' },
                        { text: '쇼핑몰 API를 통해 MES 프로그램에서 통합관리' },
                        { text: '프로그램 내에서 출하 처리하여 자동으로 쇼핑몰에 반영' },
                        { text: '막대, 파이 그래프 등 시각화하여 정보 파악 용이' }
                    ],
                    leftImg: '/image/IN/main.jpg',
                    rightImg: [
                        { img: '/image/IN/img1.jpg' },
                        { img: '/image/IN/img2.jpg' },
                        { img: '/image/IN/img3.jpg' },
                        { img: '/image/IN/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 6,
                    name: '방산전문업체 Q사',
                    serviceText: '인력, 비용, 일정등 전반적 인원을 하나로 관리하는 전략전 프로젝트 프로그램',
                    skillText: 'C#, MSSQL',
                    mainImg: '/image/prms/prms.jpg',
                    features: [
                        { Text: 'PRMS 구축' },
                        { Text: '전자결재' },
                        { Text: 'FTP 탐색기' }
                    ],
                    explanationTitle:'다양한 제품군에서 원할한 소통을 위한 프로그램',
                    explanationText: '프로젝트 수행 시 인력, 비용, 일정 등 전반적인 자원을 하나의 프로그램으로 관리하는 전략적 프로젝트 통합 자원관리 솔루션',
                    demand: [
                        { Title: '전자결재', Text: '기존 서면으로 작성하던 문서들을 프로그램 내에서 작성하여 결재받는 모듈' },
                        { Title: 'FTP 탐색기', Text: '새 프로젝트에 대해 FTP 서버에 프로젝트 자원을 만들어 관리' },
                        { Title: '팀 협업', Text: '프로젝트에 참여하는 인원에 대해 업무배분, 진행상황, 이벤트 관리' }
                    ],
                    asIs: [
                        { text: '기존 프로젝트 투입 자원에 대해 관리하지 않음' },
                        { text: '프로젝트별 작업, 계약, 공문 자료 문서로 관리' },
                        { text: '작업일보와 작업시간을 비교하며 프로젝트 진행상황을 하나하나 확인' },
                        { text: '프로젝트 일정 부분 즉각적 확인 어려움' }
                    ],
                    toBe: [
                        { text: 'PRMS 구축' },
                        { text: '프로그램 문서함에 결재문서양식을 등록 후 사용' },
                        { text: '전사적 프로젝트 진행 과정 확인 및 작업일보 기반 업무 수행 실적 관리' },
                        { text: '협업을 통한 프로젝트 효율성 향상 및 비용 실시간 관리' }
                    ],
                    leftImg: '/image/prms/main.jpg',
                    rightImg: [
                        { img: '/image/prms/img1.jpg' },
                        { img: '/image/prms/img2.jpg' },
                        { img: '/image/prms/img3.jpg' },
                        { img: '/image/prms/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 7,
                    name: '자동차와이퍼 전문 제조업체 Y사',
                    serviceText: '와이퍼 품질 향상을 위한 스마트 물류 관리 구축을 위한 프로그램',
                    skillText: 'C#, MSSQL',
                    mainImg: '/image/YI/YI.jpg',
                    features: [
                        { Text: 'MES 구축' },
                    ],
                    explanationTitle:'한국뿐 아니라 세계시장을 목표를 하고 있는 기업 ',
                    explanationText: '특허받은 상품의 품질 향상과 유지를 위해 불량관리 및 물량정보를 통합관리 하기 위한 시스템 ',
                    demand: [
                        { Title: '실시간 생산정보 관리', Text: '실시간 생산 실적 모니터링으로 관리' },
                        { Title: '물류 정보 통합 관리', Text: 'LOT-NO 추적에 따른 제조 이력의 정보 파악' }
                    ],
                    asIs: [
                        { text: '생산, 입고, 출고 등 기존 수기 작성' },
                        { text: '시간 생산 정보의 가시성 확보 미흡' },
                        { text: '부정확한 이력관리' }
                    ],
                    toBe: [
                        { text: 'MES 구축' },
                        { text: '재공재고의 실시간 관리' },
                        { text: 'LOT 단위의 정확한 제조 이력 정보제공' }
                    ],
                    leftImg: '/image/YI/main.jpg',
                    rightImg: [
                        { img: '/image/YI/img1.jpg' },
                        { img: '/image/YI/img2.jpg' },
                        { img: '/image/YI/img3.jpg' },
                        { img: '/image/YI/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 8,
                    name: '전통주류 제조 G사',
                    serviceText: '제품 생산과 출고를 하나의 통합시스탬으로 관리하기 위한 프로그램',
                    skillText: 'C#, MSSQL',
                    mainImg: '/image/GY/GY.jpg',
                    features: [
                        { Text: 'MES 구축' },
                        { Text:'실시간 설비 모니터링 프로그램' }
                    ],
                    explanationTitle:'품질경영시스템의 국제규격으로 제품의 품질을 유지하고 인공감미료를 사용하지 않는 기업',
                    explanationText: 'MES 프로그램을 연동하여 제품의 생산과 출고를 하나의 통합 시스템으로 관리하기 위한 프로그램 ',
                    demand: [
                        { Title: '실시간 설비 모니터링', Text: '각 작업위치별 온도 및 습도정보를 실시간으로 모니터링' },
                        { Title: '재고관리', Text: '각 공정별 생산량, 원재료 소모량 관리' }
                    ],
                    asIs: [
                        { text: '기존 충진을 수작업으로 진행함에 따라 많은 시간적 낭비와 위생적 부분이 발생' },
                        { text: '불량률에 따른 제조리드타임의 증가' },
                        { text: '발효실/숙성실 온/습도 센스 모니터링 불가로 인한 작업공수의 증가' }
                    ],
                    toBe: [
                        { text: 'MES 구축' },
                        { text: '충진 반자동화 설비를 도입' },
                        { text: '온/습도 센서 도입' }
                    ],
                    leftImg: '/image/GY/main.jpg',
                    rightImg: [
                        { img: '/image/GY/img1.jpg' },
                        { img: '/image/GY/img2.jpg' },
                        { img: '/image/GY/img3.jpg' },
                        { img: '/image/GY/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 9,
                    name: '자동차 플라스틱 부품 제조 업체 H사',
                    serviceText: '생산 작업자들의 편의성 및 효율성 향상을 위한 생산관리 프로그램',
                    skillText: 'C#, MSSQL',
                    mainImg: '/image/HDmes/HDmes.jpg',
                    features: [
                        { Text: 'MES 구축' },
                        { Text:'생산관리 프로그램' },
                        { Text:'모니터링' },
                    ],
                    explanationTitle:'자동차 조립용 플라스틱제조 및 기계장비 조립용 플라스틱제품 전문 제조업체',
                    explanationText: '수작업으로 인한 불필요 업무시간 감소 및 제품, 재고 추적관리 시스템 ',
                    demand: [
                        { Title: '생산관리시스템', Text: '시스템 도입으로 실시간 생산정보 파악' },
                        { Title: '모바일연동', Text: '모바일 앱을 통해 출고 및 불량관리' }
                    ],
                    asIs: [
                        { text: '작업지시 및 생산내역을 수기작성' },
                        { text: '내정보공유 시스템 부족' },
                        { text: '불량 수집을 수기 작성중이며, 관리 및 파악 어려움' },
                        { text: '설비관리가 작업자가 수동으로 관리' },
                        { text: '실시간 생산 진행정보 수기작성' },
                    ],
                    toBe: [
                        { text: '작업지시 및 생산실적 실시간 확인' },
                        { text: '자체 바코드 발행 및 입고정보 실시간 조회' },
                        { text: '불량률, 불량원인 파악 용이' },
                        { text: '설비 고장 예방관리' },
                        { text: '생산 진행정보 실시간 모니터링' },
                    ],
                    leftImg: '/image/HDmes/main.jpg',
                    rightImg: [
                        { img: '/image/HDmes/img1.jpg' },
                        { img: '/image/HDmes/img2.jpg' },
                        { img: '/image/HDmes/img3.jpg' },
                        { img: '/image/HDmes/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 10,
                    name: '고품질 유리 및 샷시 제조 S사',
                    serviceText: '생산 작업자들의 편의성 및 효율성 향상을 위한 생산관리 프로그램',
                    skillText: 'C#, MSSQL',
                    mainImg: '/image/SW/SW.jpg',
                    features: [
                        { Text:'MES 구축' },
                        { Text:'설비 자동화' },
                        { Text:'실시간 설비 모니터링 프로그램' },
                    ],
                    explanationTitle:'고품질의 복층유리를 생산, 납품, 시공하는 전문업체',
                    explanationText: '작업환경 개선과 안전성이 상승할 수 있는 프로그램 및 기계 설비 도입 ',
                    demand: [
                        { Title: '실시간 생산정보 관리', Text: '실시간 생산진행 정보 모니터링' },
                        { Title: '생산지시서 관리', Text: 'FTP서버에 파일 저장, 관리' }
                    ],
                    asIs: [
                        { text: '생산, 입고, 출고 등 기존 수기 작성' },
                        { text: '자재 수급현황 수기 관리' },
                        { text: '피스작업 시 작업피로도와 관절손상, 떨림증후군 등의 위험' },
                        { text: '수작업 관리체계로 인한 누락, 오기 발생' },
                    ],
                    toBe: [
                        { text: 'MES 구축' },
                        { text: '피스체결기 도입' },
                        { text: '대형 현황판 도입' },
                    ],
                    leftImg: '/image/SW/main.jpg',
                    rightImg: [
                        { img: '/image/SW/img1.jpg' },
                        { img: '/image/SW/img2.jpg' },
                        { img: '/image/SW/img3.jpg' },
                        { img: '/image/SW/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 11,
                    name: '식품과 화학사업을 함께 성장시키는 S사',
                    serviceText: '운송관리시스템 ',
                    skillText: 'C# WINFORM, C# WPF, MSSQL ',
                    mainImg: '/image/SYS/SYS.jpg',
                    features: [
                        { Text:'키오스크 차량 입출문 등록 및 RFID 카드 인식' },
                        { Text:'운송관리 시스템' },
                        { Text:'무인계근 시스템' },
                    ],
                    explanationTitle:'화학사업과 식품사업을 영위하고 있으며 해외생산법인과 사무소를 통한 글로벌 경영활동 하는 업체',
                    explanationText: '운송관리시스템을 도입하여, 차량의 정보확인 및 집결지 확인',
                    demand: [
                        { Title: '무인계근시스템', Text: '입력받은 차량정보를 조회하여 지정장소로 위치정보 전송' },
                    ],
                    asIs: [
                        { text: '차량 입출문 엑셀 수기로 작성 ' },
                        { text: '여러개의 프로그램 확인으로 입출문정보를 보고 정리해야함   ' },
                    ],
                    toBe: [
                        { text: '운송관리시스템 구축 ' },
                        { text: '키오스크 도입 으로인해 무인계근시스템구성 ' },
                        { text: '운송관리시스템에서 주문 및 운송정보를 한번에볼수있도록 구축 진행 ' },
                    ],
                    leftImg: '/image/SYS/main.jpg',
                    rightImg: [
                        { img: '/image/SYS/img1.jpg' },
                        { img: '/image/SYS/img2.jpg' },
                        { img: '/image/SYS/img3.jpg' },
                        { img: '/image/SYS/img4.jpg' },
                    ]
                }
            ]
        },
        {
            category: 'web',
            submenu: [
                {
                    bindIndex: 1,
                    name: '통합예약 커뮤니티 D사',
                    serviceText: '국내 다양한 다이브포인트를 제공하기 위한 사이트 구축',
                    skillText: 'JAVA Spring framework, 웹 컴포넌트, HTML5, CSS, Javascript',
                    mainImg: '/image/dive/dive.jpg',
                    features: [
                        { Text: '리조트별 상품관리/예약 관리 프로그램' },
                        { Text: '개별 결제 시스템' },
                        { Text: '다이빙 투어를 이용한 스탬프 수집' },
                        { Text: '강사회원에게 제공하는 FOC' }
                    ],
                    explanationTitle: '전국의 스쿠버다이빙 상품과 리조트를 한 곳에서 검색하고 예약, 결제까지 진행할 수 있는 통합 예약 플랫폼',
                    explanationText: '일반 사이트에선 진행 할 수 없었던 FOC 기능과, 개별결제시스템, 스킨스쿠버 체험 예약 뿐만 아니라, 교육과 매칭 까지 여러 사이트를 돌아다니지 않아도 한번에 슥~ 강사와 스킨스쿠버 업체, 다이브채널관계자들이 모두 만족하는 통합예약 관리 시스템 !',
                    demand: [
                        { Title: 'FOC기능', Text: 'free of charge 할당 인원이 충당되면 강사비용 무료' },
                        { Title: '관리자 전용 페이지 / 대시보드', Text: '전체 리조트와 예약을 통합관리 전용 페이지' },
                        { Title: '투어매칭', Text: '투어에 참여하는 인원별로 각자 결제가 가능한 교육 프로그램' },
                        { Title: '종주 스탬프', Text: '스쿠버 포인트 투어완료시 개인에게 주어지는 스탬트 기능' }
                    ],
                    asIs: [
                        { text: '리조트마다, 혹은 강사마다 제각각 다른 사이트와 결제 방식을 갖고 있어 일일이 조사해야 했음' },
                        { text: '스쿠버다이빙 자격증을 획득하려면 교육을 받아야 하는데, 인증된 자격을 가진 강사를 어디에서 찾아야 하는지 알 수 없음' },
                        { text: '일정 이상의 인원이 모여야 출발이 가능한 투어에 단독으로 신청시 해당 투어가 성사될지 여부 불투명' },
                    ],
                    toBe: [
                        { text: '통합된 검색과 결제 시스템을 통해 간편한 투어 예약이 가능' },
                        { text: '강사 회원에 대한 엄격한 검증을 거쳐 품질 높은 교육 프로그램 제공' },
                        { text: '투어 매칭 서비스 이용시 투어 성사 여부에 대한 부담감 감소' },
                        { text: '단순한 여행을 넘어 성취감을 얻을 수 있는 스탬프 수집 프로그램' }
                    ],
                    leftImg: '/image/dive/main.jpg',
                    rightImg: [
                        { img: '/image/dive/img1.jpg' },
                        { img: '/image/dive/img2.jpg' },
                        { img: '/image/dive/img3.jpg' },
                        { img: '/image/dive/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 2,
                    name: '와인커뮤니티 플랫폼 W사',
                    serviceText: '와인 모임과 레스토랑 예약까지 도입된 플랫폼 서비스',
                    skillText: 'JAVA Spring framework, HTML5, CSS, Javascript',
                    mainImg: '/image/wine/wine.png',
                    features: [
                        { Text: '모임 참여자 개별 결제 시스템' },
                        { Text: '파트너 관리 프로그램' },
                        { Text: 'SSL' },
                        { Text: '나이스페이 결제 ' },
                        { Text: '소셜 계정 로그인 ' },
                    ],
                    explanationTitle: '와인을 함께 즐지고자 하는 사람들을 엄선된 음식으로 초대하는 서비스',
                    explanationText: '기존 인터넷 카페 등에서 단순 게시글로 진행되던 와인 모임에 편리한 결제 시스템과 레스토랑 예약까지 도입된 플랫폼 서비스 제공',
                    demand: [
                        { Title: '충전 결제 시스템', Text: '사이트 내에서 사용되는 캐시' },
                        { Title: '호스트 (모임 주최자) 의 모임에 대한 권한', Text: '유명 호스트 또는 인플루언서의 활동에 충분한 보상과 권한을 주어 만족감 제공, 서비스 이용 의지' },
                        { Title: '구독제 멤버십', Text: '매달 결제를 통한 와투만의 특별한 멤버십 혜택' },
                    ],
                    asIs: [
                        { text: '외부에 잘 노출되지 않는 회원제 카페 활동을 통한 모임 개설' },
                        { text: '호스트는 유명세를 얻기 힘들고, 게스트는 좋은 호스트를 찾기 어려움' },
                        { text: '어떤 보상도 주어지지 않는 단순한 취미 활동으로 끝나는 모임' },
                        { text: '노쇼, 무책임한 모임 파기 등에 의한 시간적 / 금전적 손해' },
                        { text: '모임 인원이 픽스되지 않아 레스토랑 예약이 어려움' },
                    ],
                    toBe: [
                        { text: '한 곳에서 다양한 와인 모임을 찾아볼 수 있는 전문적인 플랫폼' },
                        { text: '적극적인 활동을 하는 회원에게는 그에 따른 보상이 주어지는 등급제도' },
                        { text: '호스트 평가를 통해 객관적인 모임 평가 기준 제공' },
                        { text: '레스토랑과의 파트너십 연계를 통해 모임 장소를 쉽게 찾을 수 있음' },
                        { text: '무책임한 노쇼를 막는 개별 결제 시스템' },
                    ],
                    leftImg: '/image/wine/main.jpg',
                    rightImg: [
                        { img: '/image/wine/img1.jpg' },
                        { img: '/image/wine/img2.jpg' },
                        { img: '/image/wine/img3.jpg' },
                        { img: '/image/wine/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 3,
                    name: '스마트안전관리 K공사',
                    serviceText: '안전하고 편리하게 스마트한 교통관리 플랫폼',
                    skillText: 'JAVA Spring framework, HTML5, CSS, Javascript',
                    mainImg: '/image/ex/ex.jpg',
                    features: [
                        { Text: '로그인 계정에 따라 감독원 / 시공자로 구분' },
                        { Text: '교육 확인 체크' },
                        { Text: '위험성 평가' },
                        { Text: '일자별 작업계획 작성 및 열람 ' },
                    ],
                    explanationTitle: '복잡하기만 했던 인력관리 및 현장관리도 터치한번으로 편하게 관리하자',
                    explanationText: '네이버 밴드에서 일일이 게시물로 작업계획을 만들어 올려야 했던 기존의 업무 프로세스를 자동화, 등록 및 확인 과정을 보다 간편하게',
                    demand: [
                        { Title: '현장별로 시공자 등록 관리', Text: '공사 내용 및 해당 현장 소속 근로자에 대한 현장관리' },
                        { Title: '안전관리 영역', Text: '장비와 공종, 가시설관리등의 관리영역 필요' },
                        { Title: '작업자 서명', Text: '작업자 개인정보 동의에 대한 직접서명영역 필요' },
                    ],
                    asIs: [
                        { text: '종이와 펜으로 작성한 작업계획을 사진으로 찍어 네이버 밴드에 업로드' },
                        { text: '근로자에 대한 안전장구류 등 보급품 지급내역, 손망실 확인이 어려움' },
                        { text: '해당 자료의 장기적인 데이터베이스화 불가능' },
                    ],
                    toBe: [
                        { text: '로그인 후 간단명료하고 직관적인 프로세스를 거쳐 작업계획 전송' },
                        { text: '전산을 통한 관리로 불필요한 인적, 물적 자원 소모 배제' },
                        { text: '각 현장별 데이터베이스 구축과 더불어 엑셀 자료로 다운로드 가능' },
                    ],
                    leftImg: '/image/ex/main.jpg',
                    rightImg: [
                        { img: '/image/ex/img1.jpg' },
                        { img: '/image/ex/img2.jpg' },
                        { img: '/image/ex/img3.jpg' },
                        { img: '/image/ex/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 4,
                    name: '스틸가공 전문 업체 H사',
                    serviceText: '입고, 발주, 조회등 모바일로 관리하는 내손안의 작은 ERP ',
                    skillText: 'Android, Java, MSSQL',
                    mainImg: '/image/HS/HS.jpg',
                    features: [
                        { Text: '바코드스캔을 통한 제품정보조회' },
                        { Text: '실시간 원/부자재 내역관리' },
                        { Text: '모바일 입·출고 프로그램' }
                    ],
                    explanationTitle: '바코드 스캔을 통한 간편한 입.츨고 시스템 ',
                    explanationText: '거래명세표로 일일이 대조하던 방식에서 바코드 스캔을 통한 쉽고 간편한 입.출고 관리, 실시간으로 데이터 조회도 확인 가능',
                    demand: [
                        { Title: 'PDA연동', Text: '산업용 PDA의 바코드스캔 기능을 안드로이드 S/W와 결합하여 현장에서 보다 빠르고 편리하게 작업하도록 함' },
                        { Title: '실시간 데이터 조회', Text: 'PDA 스크린을 통해 원자재 입출고현황, 산적 위치, 재고현황 확인' },
                        { Title: '모바일 입·출고 시스템', Text: '원/부자재 입·출고에 대한 데이터베이스 작업을 PDA를 통해 현장에서 즉시 처리' },
                    ],
                    asIs: [
                        { text: '원/부자재 입·출고 수량을 수기로 작성하여 관리함' },
                        { text: '수기로 작성한 라벨을 부착해서 재공·재고 관리' },
                        { text: 'Paper에 의한 출하관리로 정확한 출고내역 확인 불가' },
                    ],
                    toBe: [
                        { text: '모바일 앱을 연동하여 실시간으로 원/부자재 입출고 내역 관리' },
                        { text: '바코드를 이용하여 실시간으로 재공·재고의 산적위치 등 관리 ' },
                        { text: '제품 출하 전 재고의 실시간 관리' },
                    ],
                    leftImg: '/image/HS/main.jpg',
                    rightImg: [
                        { img: '/image/HS/img1.jpg' },
                        { img: '/image/HS/img2.jpg' },
                        { img: '/image/HS/img3.jpg' },
                        { img: '/image/HS/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 5,
                    name: '자동차 플라스틱 부품 제조 업체 H사',
                    serviceText: '실시간 재고, 출고 관리 모바일 MES ',
                    skillText: 'Android, Java, MSSQL',
                    mainImg: '/image/HD/HD.jpg',
                    features: [
                        { Text: '실시간 재고조정 반영' },
                        { Text: '불량관리 시각화 및 등록' }
                    ],
                    explanationTitle: '출고 현황 및 불량관리를 간편하게 이용하는 모바일 시스템 ',
                    explanationText: '거래명세표로 일일이 대조하던 방식에서 바코드 스캔을 통한 쉽고 간편한 입.출고 관리, 실시간으로 데이터 조회도 확인 가능',
                    demand: [
                        { Title: '재고실사 및 조정', Text: '창고별 재고조회 및 실재고 수량 조정' },
                        { Title: '실시간 출고현황 관리', Text: '출하지시내역을 실시간으로 조회 및 제품출고 등록 처리' },
                        { Title: '불량 정보 실시간 관리', Text: '불량 제품에 대한 정보를 실시간으로 제공하고 불량 발생시 등록 처리' },
                    ],
                    asIs: [
                        { text: '생산관리 및 작업지시 엑셀 시트로 작성' },
                        { text: '실적 실시간 등록 시스템 부재' },
                        { text: '원부자재 입출고 관리 부재 및 업무 비효율화' },
                    ],
                    toBe: [
                        { text: 'MES 시스템 도입으로 인한 재고 입출고의 전산화' },
                        { text: '모니터링 시스템 구축 ' },
                        { text: '압출 공정 연계 MES 구축 및 LOT정보 생성' },
                        { text: '모바일 앱을 통한 불량정보 연계 관리' },
                    ],
                    leftImg: '/image/HD/main.jpg',
                    rightImg: [
                        { img: '/image/HD/img1.jpg' },
                        { img: '/image/HD/img2.jpg' },
                        { img: '/image/HD/img3.jpg' },
                        { img: '/image/HD/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 6,
                    name: '네트워크 플랫폼 W사',
                    serviceText: '농장체험과 지역특산품 구매까지 한번에 해결한 플랫폼 서비스',
                    skillText: 'JAVA Spring framework, HTML5, CSS, Javascript, 결제 API ',
                    mainImg: '/image/WF/WF.jpg',
                    features: [
                        { Text: '연령대별 별도 결제 시스템' },
                        { Text: 'SNS 연동' },
                        { Text: '농장체험상품 확인 및 예약 관리' },
                        { Text: '결제 시스템' },
                    ],
                    explanationTitle: '농가에 대한 관심 증대 및 농장의 수익 증대를 지향하는 네트워크 플랫폼',
                    explanationText: '전국 지역별 특산 농작물에 대한 정보 공유, 체험활동을 통한 농장 알리기, 농장에서 수확하는 농산물에 대한 판매, 부족한 일자리 창출 등을 진행',
                    demand: [
                        { Title: '상품태그 관리기능', Text: '관리자가 직접 상품별 태그를 관리하여 회전율 조절에 기여' },
                        { Title: '인기상품 별도 노출', Text: '판매량 및 예약횟수가 많은 상품을 별도 구분하여 접근성 향상' },
                        { Title: '관리자영역에서 디자인 포함 관리', Text: '로고, 메인페이지, 컨텐츠별 타이틀 등 수정' },
                        { Title: '농장별 스토어 구현', Text: '해당 농장의 설명 및 판매상품 한눈에 파악' },
                        { Title: '사이트 전체관리자 및 농장관리자 별도 구현', Text: '윗팜 전체 관리자뿐만이 아닌 체험상품 및 농산물 판매 농장주가 각종 관리를 직접 수행 가능' },
                    ],
                    asIs: [
                        { text: '소외된 농장지역에 대한 체험, 상품 직거래 등에 대한 정보 제한' },
                        { text: '농장체험 / 산지직송 농산물 구매 / 농장 아르바이트 구인구직 / 지역 특산품 정보 확인 등 기존 각각 찾는 번거로움 발생' },
                        { text: '체험상품 및 농산물 판매 시 거래내역, 통계 등을 수기로 관리' },
                    ],
                    toBe: [
                        { text: '농장체험, 농산물구매, 구인구직, 지역 특산품 정보 수집 등 다양한 활동을 통합된 하나의 네트워크 플랫폼 사이트에서 진행 가능' },
                        { text: '농장체험상품 예약 신청시 모바일에서 즉시 확인 가능 ' },
                        { text: '농장의 상품 거래내역 등의 전산관리로 신뢰도있는 장부관리 및 데이터 수집 가능' }
                    ],
                    leftImg: '/image/WF/main.jpg',
                    rightImg: [
                        { img: '/image/WF/img1.jpg' },
                        { img: '/image/WF/img2.jpg' },
                        { img: '/image/WF/img3.jpg' },
                        { img: '/image/WF/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 7,
                    name: '무인주문 태블릿 주문관리 M사',
                    serviceText: '간편한 터치로 부담없이 주문 및 결제 이용가능 테이블오더서비스',
                    skillText: 'Java, Spring, html, css, scss, Android ',
                    mainImg: '/image/menu/menu.jpg',
                    features: [
                        { Text: '매장 내 포스와 연동하여 주문관리' },
                        { Text: '주문에 대한 선결제 서비스' }
                    ],
                    explanationTitle: '태블릿을 이용한 간편한 주문관리 !!',
                    explanationText: '직원을 기다리는 시대는 끝났다! 간편하게 터치한번으로 주문에서 결제까지 원스톱 프로그램',
                    demand: [
                        { Title: '포스와 연동', Text: '매장 내 포스와 연동하여 앉은 자리에서 주문 함' },
                        { Title: '결제 연동', Text: '매장 이용 고객이 앉은 자리에서 주문한 내역에 대한 선결제 진행' }
                    ],
                    asIs: [
                        { text: '직원 부재시 주문 불가능' },
                        { text: '주문, 서빙, 결제를 진행에 따른 인력 충원' }
                    ],
                    toBe: [
                        { text: '빠른 주문 가능' },
                        { text: '인건비 감소 ' }
                    ],
                    leftImg: '/image/menu/main.jpg',
                    rightImg: [
                        { img: '/image/menu/img1.jpg' },
                        { img: '/image/menu/img2.jpg' },
                        { img: '/image/menu/img3.jpg' },
                        { img: '/image/menu/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 8,
                    name: '디지털 아카이브 J사',
                    serviceText: '조선통신사 기록물을 디지털로 간편하게 볼 수 있는 플랫폼',
                    skillText: 'JAVA Spring framework, HTML5, CSS, Javascript, AR',
                    mainImg: '/image/JS/JS.jpg',
                    features: [
                        { Text: '연구자용 도록과 일반 해설을 별도로 제공' },
                        { Text: '디지털 소장자료를 통한 원문 이미지 제공' },
                        { Text: '음성지원 콘텐츠, 가상 전시 등 조선통신사 기록물을 활용한 콘텐츠를 개발 및 제공' },
                        { Text: '유네스코 세계기록유산으로 등재된 조선통신사 기록물 정보 통합 검색' },
                    ],
                    explanationTitle: '우리네 조선통신사 기록물의 역사적 가치와 우수성을 전하는 디지털 아카이브',
                    explanationText: '국내·외에 분산된 유네스코 세계기록유산 등재 조선통신사 기록물의 통합 정보시스템을 구축하여 조선통신사 기록물의 역사적 가치와 우수성을 전파',
                    demand: [
                        { Title: '관리자 페이지 구현', Text: '도록 및 디지털소장자료를 직접 등록하고 수정, 관리' },
                        { Title: '기록물 소장처 표기', Text: '기록물을 실제 소장하고있는 소장처 정보 구현(Footer)' },
                        { Title: '분류별 기록물 별도 필터링 기능', Text: '등재구분별, 제작시기별, 소장국가별, 형태별, 소장처별' },
                        { Title: '기록물별 해설 제공', Text: '전문가용 기록물(도록) 및 일반인 해설서 별도 제공' },
                        { Title: 'AR 가상전시관 구현', Text: '실제 박물관에 방문하여 전시된 기록물을 읽는듯한 콘텐츠 경험 제공' },
                        { Title: '기록물 전용 Viewer 구현', Text: '기록물, 디지털소장자료 등 각 자료를 온라인상에서 책자를 읽듯이 책장을 넘기며 볼 수 있는 전용 Viewer 제공' },
                    ],
                    asIs: [
                        { text: '책자정보 등의 단편적인 내용으로만 접근할 수 있는 낯설고 어려운 조선통신사 기록물' },
                        { text: '조선통신사 기록물을 일일이 원하는 조건으로 분류하여 원하는 내용만 확인하기 힘듬' },
                        { text: '별도의 텍스트로만 접근이 가능하던 각종 기록물' },
                    ],
                    toBe: [
                        { text: '기록물별 다양한 매체형식의 서비스를 통하여 언제 어디서나 조선통신사 기록물을 접할 수 있음' },
                        { text: '구분별(외교기록, 여정의 기록, 문화교류의 기록), 제작시기별, 형태별 등 원하는 내용의 조선통신사 기록물을 간편하게 모아서 열람 가능' },
                        { text: '가상전시관/텍스트가 아닌 이미지로 구현된 전용 Viewer 등으로 실제 기록물을 읽는 듯이 열람 가능' }
                    ],
                    leftImg: '/image/JS/main.jpg',
                    rightImg: [
                        { img: '/image/JS/img1.jpg' },
                        { img: '/image/JS/img2.jpg' },
                        { img: '/image/JS/img3.jpg' },
                        { img: '/image/JS/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 9,
                    name: '교육망 전산관리 S사',
                    serviceText: '교육기관의 안정적인 인터넷 사용환경을 위한 사이트 ',
                    skillText: 'HTML5, CSS, Javascript, JAVA Spring framework, MYSQL',
                    mainImg: '/image/net/net.jpg',
                    features: [
                        { Text: '전체게시판 공지 및 각 게시판 별도 공지 ' },
                        { Text: '관리자 활성으로 게시글 삭제 및 댓글관리 가능' },

                    ],
                    explanationTitle: '교육기간에서 유해한 사이트 차단!',
                    explanationText: '교육행정기관에 안정된 인터넷을 제공하기 위해 전용회선을 구축하여, 학생과 교사들의 원활한 교수학습과 미래 교육 환경을 위해 관리하는 사이트 ',
                    demand: [
                        { Title: '관리자 페이지 구현', Text: '삭제게시글 및 팝업 관리 페이지 활성' },
                        { Title: '게시글 처리 진행상황', Text: '등록된 게시글의 현재 처리상황을 확인가능' },
                    ],
                    asIs: [
                        { text: '콜센터로 사이트 차단 해제신청의 불편함 '},
                        
                    ],
                    toBe: [
                        { text: '사이트해제신청양식을 통한 관리의 편의성' },
                    ],
                    leftImg: '/image/net/main.jpg',
                    rightImg: [
                        { img: '/image/net/img1.jpg' },
                        { img: '/image/net/img2.jpg' },
                        { img: '/image/net/img3.jpg' },
                        { img: '/image/net/img4.jpg' },
                    ]
                }
            ]
        },
        {
            category: 'etc',
            submenu: [
                {
                    bindIndex: 1,
                    name: '스마트가드레일',
                    serviceText: '도로구간 차량사고 발생 골든타임 사수 프로그램',
                    skillText: ' C#, Python, Yolo, MSSQL',
                    mainImg: '/image/guardeail/guardrail.jpg',
                    features: [
                        { Text: 'RTSP CCTV 실시간 모니터링' },
                        { Text: 'Yolo 영상분석' },
                        { Text: '통합관제 프로그램' },
                        { Text: '전광판 제어 프로그램' }
                    ],
                    explanationTitle: '사고가 자주 발생하는 커브길 도로에서의 사고 예방용 주의문구 안내 및 사고 발생 시 빠른 대처를 위한 프로그램',
                    explanationText: '센서로부터 전달받은 충격정보를 분석하여 원격으로 차량사고 발생여부를 파악하고 사고발생여부 및 현황 알림을 전달 및 후속조치 지원 ',
                    demand: [
                        { Title: 'CCTV 실시간 모니터링', Text: '통합관제 프로그램에서 연결된 CCTV의 영상을 실시간으로 재생' },
                        { Title: 'Yolo 영상분석', Text: '사고 발생 시, 사고 영상을 Yolo 분석하여 사고의 경중을 파악할 수 있도록 도움' },
                        { Title: '전광판 제어', Text: '전광판의 안내 문구를 제어하여 운전자로 하여금 운전에 주의할 수 있도록 함' }
                    ],
                    asIs: [
                        { text: '기존 커브길 사고 내용 수기 관리' },
                        { text: '야간 운행 시, 운전자가 커브길 인지 어려움' },
                        { text: '커브길에서 사고 발생 시, 빠른 대처 어려움' },
                        { text: '사고 규모 파악의 지연으로, 가용인원 배치에 시간 소요' },
                    ],
                    toBe: [
                        { text: '통합관제 프로그램 구축' },
                        { text: '운행주의 전광판 안내 문구 도입' },
                        { text: '실시간 커브길 상황 모니터링 시스템 도입' },
                        { text: 'Yolo 영상분석으로 사고 규모 파악에 용이' },
                    ],
                    leftImg: '/image/guardeail/main.jpg',
                    rightImg: [
                        { img: '/image/guardeail/img1.jpg' },
                        { img: '/image/guardeail/img2.jpg' },
                        { img: '/image/guardeail/img3.jpg' },
                        { img: '/image/guardeail/img4.jpg' },
                    ]
                },
                {
                    bindIndex: 2,
                    name: '디지털 아카이브 J사',
                    serviceText: '온라인 가상 3D 전시 프로그램',
                    skillText: ' 3D Modeling, 360° Panorama Rendering, Panorama Stitching, 3D Vista Virtual Tour',
                    mainImg: '/image/JS/JS3D.jpg',
                    features: [
                        { Text: '국가별 전시관 제작(조선관, 일본관' },
                        { Text: '핫스팟 태그를 이용한 지정된 장소 이동 및 기록물 확대' },
                        { Text: '디지털 소장자료 원문이미지 제공' },
                        { Text: '음성지원 및 가상전시' }
                    ],
                    explanationTitle: '우리네 조선통신사 기록물의 역사적 가치와 우수성을 전하는 디지털 아카이브',
                    explanationText: '부산의 유일한 유네스코 세계기록유산인 조선통신사 기록물을 가상으로 구축한 3D 전시관에서 온라인으로 둘러볼 수 있는 투어 기능 제공 ',
                    demand: [
                        { Title: '가상 3D 전시관 Archinteriors 모델링', Text: '조선관 및 일본관으로 분류 ' },
                        { Title: '360° Panorama image Rendering ', Text: '모델링된 가상 전시관을 파노라마 이미지로 렌더링' },
                        { Title: '3D Vista Virtual Tour ', Text: '렌더링된 파노라마 이미지를 Stitching 작업을 통해 가상 3D 공간 제작 ' },
                        { Title: '태그 지정  ', Text: '각 기록물별 이동 기능 핫스팟 태그 구현 ' },
                        { Title: '기록물 전용 Viewer 구현 ', Text: '열화된 낮은 해상도로 인한 투어 불편을 최소화하는 차원에서 전용 Viewer 제공 (기록물 클릭시 고해상도 원본 이미지 노출)' },
                        { Title: '홈페이지 기능 추가  ', Text: '자사 홈페이지에 가상 전시관으로 분류하여 추가 ' }
                    ],
                    asIs: [
                        { text: '홈페이지에 텍스트 설명문 및 기록물 이미지로만 구성된 한정적 구현 ' }
                    ],
                    toBe: [
                        { text: '3D 형태의 가상전시관을 구축하여 VR 투어 기능을 제공 ' },
                        { text: '국가별 조선관 및 일본관으로 상세 분류 ' },
                        { text: '각 기록물별 위치 이동 태그 지정 및 전용 Viewer 제공' }
                    ],
                    leftImg: '/image/JS/3Dmain.jpg',
                    rightImg: [
                        { img: '/image/JS/3Dimg1.jpg' },
                        { img: '/image/JS/3Dimg2.jpg' },
                        { img: '/image/JS/3Dimg3.jpg' },
                        { img: '/image/JS/img4.jpg' },
                    ]
                }
            ]
        }
    ]

    const thisRoute = portfolioGroup.filter(cat => cat.category === getCate)

    function pageId() {
        for (let i = 0; i < portfolioGroup.length; i ++) {
            let data = portfolioGroup[i];

            if (data.category === thisRoute[0].category) {
                for (let j = 0; j < data.submenu.length; j ++) {
                    let data2 = data.submenu[j];

                    if (data2.bindIndex == tmpId) {
                        return data2;
                    }
                }
            }
        }
    }
</script> <!-- Logic Ends -->

<style lang="scss">
    /** PortfolioDetail.css*/

    .Pdetail-title {
        @apply font-bold pb-6 mt-20;

        font-family: 'NS-Neo', sans-serif;
    }

    [data-company-name] {
        @apply font-bold mb-3;

        font-family: 'NS-Neo', sans-serif;
    }

    .Pdetail-company-img {
        @apply rounded-md;

        aspect-ratio: 16/9;
    }

    .Pdetail-first-box {
        @apply flex gap-10
    }

    .Pdetail-skill-text {
        @apply p-7 rounded-md basis-2/5;

        background-color: rgba(var(--clr-id-02), .05);
    }

    .skill-text-list {
        @apply flex flex-col gap-2 mb-5;

        > span {
            @apply font-bold mb-1;

            font-size: var(--fnt-lg);
        }
    }

    [data-point-titleText] {
        @apply py-1 inline-block;

        font-size: var(--fnt-lg);
    }

    [data-point-bodyText] {
        @apply break-keep mt-1 leading-4;
    }

    .Pdetail-second-box {
        @apply flex flex-col
    }

    .Pdetail-demand-list,
    .Pdetail-solution-list {
        @apply grid gap-4;

        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }

    .Pdetail-demand-box {
        @apply py-7 px-5 rounded-sm flex items-center gap-8;

        background-color: rgba(var(--clr-id-02), .2);
        font-size: var(--fnt-title-sm);
    }

    .Pdetail-demand-text {
        width: calc(100% - 1rem);
    }

    .dot {
        @apply w-3 h-3 inline-block;

        background-color: rgb(var(--clr-id-02));
    }

    .demand-explain {
        @apply pt-2.5;

        font-size: var(--fnt-lg);
    }

    .Pdetail-solution-text {
        @apply py-7 px-5 rounded-sm flex flex-col justify-center gap-5;

        > p{
            @apply leading-4 ml-4;

            text-indent: -14px;
            
            &::before{
                content: '- ';
            }
        }

        background-color: rgba(var(--clr-id-02), .05);
        font-size: var(--fnt-lg);
    }


    .Pdetail-ui-imgBox {
        @apply grid gap-1;

        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }

    .ui-left-img {
        > img {
            @apply rounded-sm object-contain;
        }
    }

    .ui-right-img {
        @apply grid gap-1;

        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

        > img {
            @apply rounded-sm object-contain;
        }
    }
    
    .p-button-white{
        @apply py-1.5 px-6 mt-10;
    }

    /*portfolioDetail 반응형*/
    @media screen and (max-width: 1024px) {
        .Pdetail-first-box{
            @apply flex-col gap-3;
        }

        .titleText-box{
            @apply my-5;
        }
    }

    @media screen and (max-width: 720px) {
        .Pdetail-title{
            @apply mt-10;
        }

        [data-point-titleText]{
            font-size: var(--fnt-md);
        }

        [data-point-bodytext]{
            @apply leading-4
        }

        .Pdetail-demand-list, .Pdetail-solution-list{
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        }

        .Pdetail-demand-box,
        .Pdetail-solution-text{
            @apply py-4 px-3 gap-5;

            font-size: var(--fnt-md);
        }

        .demand-explain{
            font-size: var(--fnt-md);
            line-height: 1.4;
        }

        .Pdetail-skill-text{
            @apply p-4 pt-8;
        }
    }
</style> <!-- Stylesheet Ends -->