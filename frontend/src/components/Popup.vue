<template>
    <aside id="noticePopup" v-if="new Date() <= popupDuration" v-show="popupShow === true">
        <div class="popup-title-bar">
            <span>{{ popupTitle }}</span>
        </div>

        <div class="popup-content-container">
            <slot>
                기본값
            </slot>
        </div>

        <div class="popup-control-group">
            <button class="popup-close-button" @click="popupShow = false">닫기</button>
        </div>
    </aside>
</template> <!-- Template Ends -->

<script setup>
    defineProps({
        popupTitle: String,
        popupDuration: Date
    })

    const popupShow = ref(true)
</script> <!-- Logic Ends -->

<style lang="scss">
    #noticePopup {
        position: absolute;
        top: 5rem;
        left: .5rem;
        width: min(100% - 1rem, 20rem);
        border: 1px solid rgb(0 0 0 / .15);
        background-color: white;
        box-shadow: 0 1rem 2.5rem -.5rem rgb(0 0 0 / .25);
        z-index: 30;
    }

    .popup-title-bar {
        padding: 1rem;
        text-align: center;
    }

    .popup-content-container {
        border-block: 1px solid rgb(0 0 0 / .15);
    }

    .popup-control-group {
        display: flex;
        justify-content: flex-end;
        padding: .5rem 1rem;
    }

    .popup-close-button {
        padding: .25rem .5rem;
        border: 1px solid rgb(0 0 0 / .15);
    }
</style> <!-- Stylesheet Ends -->