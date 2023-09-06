<template>
    <header id="headPrimary" :class="{'common-ui-hide': useRoute().name == 'Login'}">
        <div class="container flex justify-between items-center px-2 h-full">
            <h1 id="mainLogo">
                <router-link to="/">
                    <img v-if="isThisMobile" src="/src/assets/images/logo-mobile.svg" alt="" data-main-logo>
                    <img v-else src="/src/assets/images/logo.svg" alt="" data-main-logo>
                </router-link>
            </h1>

            <nav id="navPrimary" class="contents ">
                <div id="mobileBurger">
                    <div class="hamburger-wrap" >
                        <button class="hamburger" type="button" @click="menuOpen = !menuOpen">
                        <span class="hamburger__line"></span>
                        <span class="hamburger__middle"></span>
                        <span class="icon-bar hamburger__line"></span>
                        </button>
                    </div>

                    <div class="row dropdown" :class="{ 'dropdown-after' : menuOpen }">
                        <ul class="navlist">
                            <li v-for="navItem in navGroup" class="navitem mb-10">
                                <router-link :to="navItem.linkTo" class="nav-link-method nav-parent mb-4"  @click="menuOpen = false">
                                    <span>{{ navItem.navText }}</span>
                                </router-link>
                                <ul v-if="navItem.childrens" class="sub-item-box">
                                    <li v-for="subItem in navItem.childrens" class="subitem">
                                        <router-link :to="subItem.subTo" class="" @click="menuOpen = false">
                                            <span>{{ subItem.subName }}</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <ul class="nav-list">
                    <li v-for="navItem in navGroup" class="nav-item">
                        <router-link :to="navItem.linkTo" class="nav-link-method nav-parent">
                            <span>{{ navItem.navText }}</span>
                        </router-link>

                        <ul v-if="navItem.childrens" class="sub-list">
                            <li v-for="subItem in navItem.childrens" class="sub-item">
                                <router-link :to="subItem.subTo" class="nav-link-method">
                                    <span>{{ subItem.subName }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template> <!-- Template Ends -->

<script setup>
    import { useRoute} from 'vue-router'

    const menuOpen = ref(false)
    const navGroup = ref([
        {
            bindIndex: 0,
            linkTo: '/history',
            navText: '회사소개',
            childrens: [
                { subTo: '/history', subName: '연혁' },
                { subTo: '/certificate', subName: '인증 및 자격' },
                { subTo: '/reportdata', subName: '보도자료' },
                { subTo: '/map', subName: '오시는 길' }
            ]
        },
        {
            bindIndex: 1,
            linkTo: '/solutiondev',
            navText: '사업분야',
            childrens: [
                { subTo: '/solutiondev', subName: '솔루션 개발' },
                { subTo: '/sitedev', subName: '기업 사이트 구축' },
                { subTo: '/portfolio', subName: '구축사례' },
                { subTo: '/scs', subName: 'Smart Cutting' }
            ]
        },
        {
            bindIndex: 2,
            linkTo: '/notice',
            navText: '고객센터',
            childrens: [
                { subTo: '/notice', subName: '공지사항' },
                { subTo: '/login', subName: '고객지원' },
                { subTo: '/dataroom', subName: '자료실' },
                { subTo: '/news', subName: '소식' }
            ]
        },
    ])

    const isThisMobile = matchMedia('(max-width: 720px)').matches ? true : false
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #mainLogo {
        color: rgb(var(--clr-text-highlight));
        font-family: 'NS-Neo', sans-serif;
        font-size: 1.8rem;
        font-weight: 900;
    }

    #headPrimary {
        @apply flex justify-center fixed top-0 left-0 right-0 h-16 z-50;

        border-block-end: 1px solid rgba(var(--clr-inter-shade), .25);
        background-color: rgba(var(--clr-inter-pane), 0);
        color: rgb(var(--clr-text-highlight));
        transition: background-color .15s, backdrop-filter .15s, box-shadow .15s;
        backdrop-filter: blur(2px);

        &::before {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 0;
            background-color: rgba(var(--clr-inter-pane), .75);
            backdrop-filter: blur(.5rem);
            transition: height .15s;
            z-index: -1;
            content: '';
        }

        &:hover {
            box-shadow: 0 0 0 10000vmax rgba(0, 0, 0, .5);

            &::before {
                height: 20rem;
            }

            .sub-list {
                @apply h-min;
            }
        }
    }

    #headPrimary.common-ui-hide {
        display: none;
    }

    [data-main-logo] {
        height: 2rem;
        aspect-ratio: 100 / 19;
    }

    #navPrimary {
        position: relative;
    }

    #mobileBurger {
        display: none;
    }

    .nav-list {
        @apply flex items-center gap-2 h-full;

        &.mobile {
            display: none;
        }
    }

    .nav-item {
        @apply relative h-full;

        &:hover {
            background-image: linear-gradient(to top, rgb(var(--clr-inter-shade)) .1rem, transparent .1rem);
        }

        &:has(.router-link-active) {
            background-image: linear-gradient(to top, rgb(var(--clr-inter-shade)) .1rem, transparent .1rem);

            .nav-parent {
                color: rgb(var(--clr-text-highlight));
            }
        }
    }

    .nav-link-method {
        @apply w-28 h-full;

        color: rgba(var(--clr-inter-shade), .5);

        &.nav-parent {
            @apply grid place-items-center;

            font-family: 'NS-Neo', sans-serif;
            font-size: var(--fnt-lg);
            font-weight: 900;
        }
    }

    .sub-list {
        @apply absolute top-full h-0 overflow-hidden;
    }

    .sub-item {
        @apply rounded-sm;

        height: 3rem;
        background: {
            image: linear-gradient(to right, rgb(var(--clr-id-02)), rgb(var(--clr-id-02)));
            repeat: no-repeat;
            position: left;
            size: .1rem 0;
        }
        transition: background-size .15s;

        &:hover {
            background-size: .1rem 50%;

            > .nav-link-method {
                color: rgb(var(--clr-id-02));
            }
        }

        > .nav-link-method {
            @apply flex items-center px-4;
        }

        &:has(.router-link-active) {
            background: {
                image: linear-gradient(to right, rgb(var(--clr-id-02)), rgb(var(--clr-id-02)));
                repeat: no-repeat;
                position: left;
                size: .1rem 50%;
            }
            color: rgb(var(--clr-id-02));
            font-weight: 900;
        }
    }

    //모바일 햄버거 메뉴

    .navlist{
        color: rgba(var(--clr-inter-pane), 1);

        a {
            color: rgba(var(--clr-inter-pane), 1);
        }
    }

    .sub-item-box{
        @apply flex flex-col items-start gap-4;

        a {
            &:hover{
                @apply font-bold;

            }
        }
    }
    .hamburger-wrap {
        width: 100px;
        height: 100%;
        margin-left: 50px;
        display: flex;
        align-items: center;
    }

    .hamburger-wrap {
        justify-content: flex-end;
    }

    .hamburger {
        width: 40px;
        height: 40px;
        background-color: rgba(var(--clr-id-02));
        border-radius: 4px;
        z-index: 1;
    }

    .hamburger:focus {
        outline: none;
    }

    .hamburger__line,
    .hamburger__middle {
        display: block;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: rgba(var(--clr-inter-pane), 1);
        margin-top: 7px;
        margin-bottom: 7px;
    }

    .hamburger__middle {
        width: 20px;
        margin-left: 10px;
    }

    .dropdown {
        position: fixed;
        background: rgb(var(--clr-id-02));
        top: 0;
        left: 0;
        width: 100%;
        height: 0%;
        opacity: 0;
        visibility: hidden;
        transition: visibility 0.35s, height 0.35s;
        overflow: hidden;
    }

    .dropdown-after {
        width: 100%;
        height: 100vh;
        opacity: .9;
        visibility:visible;
        transition: opacity .35s, visibility 0.35s, height .35s;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding-left: 1.6rem;
    }

    @media screen and (max-width: 1024px) {
        #mobileBurger{
            display: block;
        }

        .nav-list {
            display: none;
        }

        #headPrimary:hover::before{
                display: none;
            }

        #headPrimary:hover{
            box-shadow: none
        }

        .nav-link-method {
            @apply w-20;

            &.nav-parent {
                @apply grid place-items-start;
            }

        }
    }

    @media screen and (max-width: 720px) {
        [data-main-logo] {
            height: 3rem;
            aspect-ratio: 1 / 1;
        }
    }
</style> <!-- Stylesheet Ends -->