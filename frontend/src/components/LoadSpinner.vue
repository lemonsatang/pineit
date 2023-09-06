<template>
    <div id="loadSpinner" v-if="isLoading">
        <div>로딩중...</div>
    </div>
</template> <!-- Template Ends -->

<script setup>
    const isLoading = true
</script> <!-- Logic Ends -->

<style lang="scss">
    #loadSpinner {
        @apply grid place-items-center fixed m-auto inset-0 w-16 h-16;
    }
</style> <!-- Stylesheet Ends -->