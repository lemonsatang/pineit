<template>
    <div id="wrap">
        <HeadPrimary />

        <main id="contentView">
            <router-view :key="$route.path"></router-view>
        </main>

        <FootPrimary />
    </div>

    <aside id="floatButtons">
        <button type="button" id="btnRemote">
            <a href="/public/client.exe">
                <i class="ri-customer-service-line"></i>
            </a>
        </button>

        <button type="button" id="btnGotoTop" @click="gotoTop">
            <i class="ri-arrow-up-s-line"></i>
        </button>
    </aside>
</template> <!-- Template Ends -->

<script setup>
    import HeadPrimary from './components/HeadPrimary.vue'
    import FootPrimary from './components/FootPrimary.vue'

    const gotoTop = function() {
        window.scrollTo(0, 0)
    }
</script> <!-- Logic Ends -->

<style lang="scss">
    #floatButtons {
        @apply flex flex-col gap-4 fixed bottom-4 right-4 z-50;

        > button {
            @apply p-4 rounded-full shadow-xl;

            background-color: rgb(var(--clr-inter-pane));
            font-size: var(--fnt-title-lg);
        }
    }

    @media screen and (width < 720px) {
        #floatButtons {
            display: none;
        }
    }
</style> <!-- Stylesheet Ends -->