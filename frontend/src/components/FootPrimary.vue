<template>
    <div id="bizContact" :class="{'common-ui-hide': useRoute().name == 'Login', 'common-cs-footer': useRoute().path.split('/')[1] == 'admin' || 'cs'}">
        <div class="flex flex-col justify-center items-center gap-8 container mx-auto">
            <h4>문의하실 내용을 메일로 남겨 주세요. <span data-line-break>빠른 시일 내에 연락 드리겠습니다.</span></h4>

            <button type="button" id="btnContactForm">support@pineit.co.kr</button>
        </div>
    </div>

    <footer id="footPrimary" :class="{'common-ui-hide': useRoute().name == 'Login'}">
        <div class="flex gap-20 container mx-auto">
            <h1 id="footLogo">
                <img src="/src/assets/images/logo.svg" alt="" data-foot-logo>
            </h1>

            <div id="footTexts">
                <!--
                <ul class="flex gap-5 mb-8">
                    <li class="opacity-50">
                        개인정보처리방침
                    </li>
                    <li>|</li>
                    <li class="opacity-50">
                        공지사항
                    </li>
                    <li>|</li>
                    <li class="opacity-50">
                        오시는 길
                    </li>
                </ul>
                -->

                <dl class="foot-lines">
                    <dt>회사명</dt>
                    <dd>주식회사 소나무정보기술</dd>
                </dl>

                <dl class="foot-lines">
                    <dt>대표자</dt>
                    <dd>최재영</dd>
                </dl>

                <dl class="foot-lines">
                    <dt>사업자등록번호</dt>
                    <dd>735-86-01813</dd>
                </dl>

                <dl class="foot-lines">
                    <dt>개발센터</dt>
                    <dd>부산광역시 사상구 대동로 303 부산디지털밸리 1203호</dd>
                </dl>

                <dl class="foot-lines">
                    <dt>연락처</dt>
                    <dd>(051) 714-0034</dd>
                </dl>

                <dl class="foot-lines">
                    <dt>본사</dt>
                    <dd>부산광역시 부산진구 엄광로 176 331호 (동의대학교 산학협력단)</dd>
                </dl>

                <p class="mt-8 opacity-50">Copyright © {{ currentYear }} 소나무정보기술, All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <div class="hidden flex justify-end gap-2 m-5">
        <div class="color-chip" style="background-color: rgb(var(--clr-id-main))"></div>
        <div class="color-chip" style="background-color: rgb(var(--clr-id-sub))"></div>
        <div class="color-chip" style="background-color: rgb(var(--clr-id-01))"></div>
        <div class="color-chip" style="background-color: rgb(var(--clr-id-02))"></div>
        <div class="color-chip" style="background-color: rgb(var(--clr-inter-neutral))"></div>
        <div class="color-chip" style="background-color: rgb(var(--clr-inter-agree))"></div>
        <div class="color-chip" style="background-color: rgb(var(--clr-inter-warn))"></div>
        <div class="color-chip" style="background-color: rgb(var(--clr-inter-error))"></div>
        <div class="color-chip" style="background-color: rgb(var(--clr-inter-disable))"></div>
        <div class="color-chip" style="background-image: linear-gradient(to top left, rgb(16, 27, 110), rgb(0, 78, 255))"></div>
        <div class="color-chip" style="background-image: linear-gradient(to top left, rgb(66, 0, 255), rgb(0, 255, 108))"></div>
        <div class="color-chip" style="background-image: linear-gradient(to top left, rgb(40, 65, 255), rgb(202, 255, 247))"></div>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import { useRoute} from 'vue-router'
    const currentYear = ref(new Date().getFullYear())
    let chk = useRoute().path.split('/')[1]
    console.log(chk)
</script> <!-- Logic Ends -->

<style lang="scss">
    #bizContact {
        @apply relative py-24;

        margin-top: 7rem;
        background-color: rgb(var(--clr-inter-pane));
        background-image: url('@/assets/images/contact.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        color: rgb(var(--clr-text-anti));

        &::before {
            @apply block absolute inset-0 content-none;

            display: block;
            position: absolute;
            inset: 0;
            background-color: rgba(var(--clr-inter-shade), .5);
            content: '';
        }

        h4 {
            font-size: var(--fnt-title-lg);
            text-shadow: 0 0 .25rem rgb(var(--clr-inter-shade));
            isolation: isolate;
            color: rgba(var(--white), .6);
        }
    }

    #bizContact.common-ui-hide {
        display: none;
    }

    #btnContactForm {
        @apply px-10 py-4 rounded-sm;

        background-image: linear-gradient(to top left, rgb(66, 0, 255), rgb(0, 255, 108) 50%, rgb(var(--clr-inter-neutral)));
        background-size: 400% 400%;
        background-position: 0 0;
        color: rgb(var(--clr-text-anti));
        font-weight: 600;
        transition: background-position .15s, box-shadow .15s, scale .15s;
        isolation: isolate;

        &:hover {
            background-position: 100% 100%;
            box-shadow: 0 1rem 2rem rgba(var(--clr-inter-shade), .25);
            scale: 1.1;
        }
    }

    #footPrimary {
        @apply mt-auto px-2 py-10;

        background-color: rgba(var(--clr-inter-shade), .05);
    }

    #footPrimary.common-ui-hide {
        display: none;
    }

    [data-foot-logo] {
        height: 2rem;
        aspect-ratio: 100 / 19;
        // filter: grayscale(1);
        opacity: .5;
    }

    #footTexts {
        @apply flex flex-col gap-4;
    }

    .foot-lines {
        @apply flex gap-2;

        @media screen and (max-width: 1024px) {
            display:grid;
            grid-template-columns: 5rem 1fr;
        }
    }

    .color-chip {
        width: 2rem;
        height: 2rem;
        border-radius: .15rem;
    }

    #bizContact.common-cs-footer {
        margin-top: 0;
    }

    @media screen and (max-width: 1024px) {
        #footLogo {
            display: none;
        }

        #bizContact {

            h4 {
                @apply text-base break-keep text-center;
            }

            [data-line-break] {
                @apply inline-block;
            }
        }
    }
</style> <!-- Stylesheet Ends -->