<template>
    <div id="wrap" :class="{'spt-white-back': useRoute().name.includes('Support')}">
        <HeadPrimary />

        <main id="contentView" :class="{'login-background': useRoute().name == 'Login'}">
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
    import { useRoute} from 'vue-router'
    import HeadPrimary from './components/HeadPrimary.vue'
    import FootPrimary from './components/FootPrimary.vue'

    const gotoTop = function() {
        window.scrollTo(0, 0)
    }

    const getName = useRoute().name
    console.log(getName)
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

    .login-background:after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        display: block;
        width: 100vw;
        background-image: url(/public/image/login_back_temp0.jpg);  
        background-size: cover;
        background-position: top center;
        height: 100vh;
        z-index: -1;
    }

    @media screen and (width < 720px) {
        #floatButtons {
            display: none;
        }
    }
</style> <!-- Stylesheet Ends -->