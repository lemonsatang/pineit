<template>
    <div id="tempSubPageHero">
        <div id="divHeroSubline">
            <ul id="ulBreadCrumbs">
                <li>
                    <slot name="routeName"></slot>
                </li>
            </ul>
        </div>
    </div>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #tempSubPageHero{
        @apply relative w-full flex items-end bg-cover;

        height: 30vh;
        background-image: url('@/assets/images/subHeroBack.png');
        background-position: center;
    }

    #divHeroSubline{
        @apply flex container mx-auto;

        > ul {
            @apply flex;
        }
    }

    #ulHeroSub{
        > li {
            @apply w-48 h-10 flex justify-center items-center hover:opacity-100 hover:text-black cursor-pointer opacity-50;
            // background:rgba(255,255,255, .5);
            background-color: rgb(var(--clr-base));
            font-family: 'NS-Neo';
            font-size: var(--fnt-lg);

            &.tab-recent-active {
                @apply opacity-100 text-black;
            }
        }
    }

    #ulBreadCrumbs{
        @apply items-center ml-auto drop-shadow-lg pointer-events-none;

        > li {
            @apply text-white;

            font-size: var(--fnt-md);

            & + li:before {
                content: '>';
                @apply pr-2 pl-2;
            }
        }
    }
</style> <!-- Stylesheet Ends -->