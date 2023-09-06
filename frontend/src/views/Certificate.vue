<template>
    <SubPageHero />

    <div class="container mt-20 mx-auto">
        <section id="certificate-box">
            <div class="certificate-img-list" >
                <article>
                    <img src="@/assets/images/program.png" >
                    <p class="certificate-label">프로그램 등록증</p>
                </article>
                <article>
                    <img src="@/assets/images/gs.png" >
                    <p class="certificate-label">GS인증 소프트웨어 품질인증서 </p>
                </article>
                <article>
                    <img src="@/assets/images/iso.png" >
                    <p class="certificate-label">ISO 9001:2015 인증서</p>
                </article>
                <article>
                    <img src="@/assets/images/kc.png" >
                    <p class="certificate-label">KC인증 충격센서 전자파인증</p>
                </article>
                <article>
                    <img src="@/assets/images/sw.png" >
                    <p class="certificate-label">SW직접생산확인증명서</p>
                </article>
                <article>
                    <img src="@/assets/images/rsch.png" >
                    <p class="certificate-label">기업부설연구소 인정서</p>
                </article>
            </div>
        </section> <!--certificate-box-->
    </div>
</template> <!-- Template Ends -->

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
</script> <!-- Logic Ends -->

<style lang="scss">
    #certificate-box {

    }

    .certificate-img-list {
        @apply grid gap-4 pr-2;

        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        
        > article {
            filter: drop-shadow(0 0 8px rgba(var(--clr-text), .2));
        }

        @media screen and (max-width: 1024px) {
            @apply gap-x-2 gap-y-6;

            grid-template-columns: 50% 50%;
        }

        @media screen and (max-width: 400px) {
            @apply pr-0;
            
            grid-template-columns: 1fr;
        }
    }

    .certificate-label {
        @apply p-2 mt-1 text-center;

        background-color: rgba(var(--clr-id-02), .8);
        color: rgb(var(--clr-inter-pane));
        font-size: var(--fnt-lg);

        @media screen and (max-width: 1024px) {
            @apply break-keep leading-3 flex items-center justify-center;

            font-size: var(--fnt-md);
            height: 2.5rem;
        }
    }
</style> <!-- Stylesheet Ends -->