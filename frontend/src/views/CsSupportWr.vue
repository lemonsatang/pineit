<template>
    <section class="common-board-wrap div-main-text">
        <div class="common-board-container">
            <h1 class="spt-page-title">고객 문의</h1>
            
            <div>
                <jodit-editor v-model="content" />
            </div>
        </div>
    </section>
    
</template>
<script setup>
    import 'jodit/es2021/jodit.min.css'
    import { JoditEditor } from 'jodit-vue'
    
</script>
<style lang="scss" scoped>
    
</style>