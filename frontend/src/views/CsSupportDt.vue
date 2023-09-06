<template>
    <section class="common-board-wrap div-main-text">
        <div class="common-board-container">
            <h1 class="spt-page-title">고객 문의</h1>

            <!-- 본문 -->
            <section v-for="item in getData" class="spt-dt-mainbody">
                <div class="spt-dt-head">
                    <h1 class="spt-dt-title">
                        <span class="spt-dt-status">{{ item.STATUS }}</span>
                        {{ item.TITLE }}
                    </h1>
                    <p>
                        <span class="spt-dt-username">{{ item.WRITER }}</span>
                        <span class="spt-dt-date">{{ item.DATE }} {{ item.TIME }}</span>
                    </p>
                </div>
                <div v-html="item.TEXTS" class="spt-dt-text">
                    
                </div>
                <div class="spt-dt-milestone">
                    <router-link :to="{name: 'SupportDt', params: { id: getIdx - 1}}" v-if="getIdx > 0" class="spt-dt-mile-line">
                        <p class="spt-dt-mile-subtitle">이전글</p>
                        <p class="spt-dt-mile-title">{{ prevFiltered.TITLE }}</p>
                        <p class="spt-dt-mile-date">{{ prevFiltered.DATE }}</p>
                    </router-link>
                    <a v-else href="#" class="spt-dt-mile-line">
                        <p>이전글이 없습니다.</p>
                        <p class="spt-dt-mile-date">-</p>
                    </a>
                    <router-link :to="{name: 'SupportDt', params: { id: getIdx + 1}}" v-if="getIdx < sptAdmGroup.length - 1" class="spt-dt-mile-line">
                        <p class="spt-dt-mile-subtitle">다음글</p>
                        <p class="spt-dt-mile-title">{{ nextFiltered.TITLE }}</p>
                        <p class="spt-dt-mile-date">{{ nextFiltered.DATE }}</p>
                    </router-link>
                    <a v-else href="#" class="spt-dt-mile-line">
                        <p>다음글이 없습니다.</p>
                        <p class="spt-dt-mile-date">-</p>
                    </a>
                </div>
            </section>

            <!-- 버튼영역 -->
            <div class="common-button-container">
                <button type="button">
                    <router link :to="{name: 'SupportAdm'}">
                        목록
                    </router>
                </button>
                <button type="button">
                    <router-link :to="{name: 'SupportWr'}">
                        <font-awesome-icon icon="fa-pen" />
                        답변글 작성
                    </router-link>
                </button>
            </div>

            <!-- 댓글영역 -->
            <section class="spt-reply-container">
                <div class="spt-reply-writer">
                    <h2 class="spt-reply-subtitle">댓글 작성</h2>
                    <textarea maxlength="1000" placeholder="내용을 입력해주세요."></textarea>
                    <button class="common-single-button" type="button">
                        <font-awesome-icon icon="fa-check" />
                        작성완료
                    </button>
                </div>
                <ul class="spt-reply-list">
                    <li v-for="item in getReply" class="spt-reply-line">
                        <p class="spt-reply-username">
                            {{ item.WRITER }}
                            <span class="spt-reply-date">{{ item.DATE }}</span><span class="spt-reply-time">{{ item.TIME }}</span>
                        </p>
                        <p v-html="item.TEXTS" class="spt-reply-texts"></p>
                    </li>
                </ul>
            </section>
            
        </div>
    </section>
</template>
<script setup>
    import { useRoute } from 'vue-router'

    const getParams = useRoute().params.id

    //store에서 영역별 데이터 import
    import { useSptStore } from '@/stores/sptSt'
    import { storeToRefs } from 'pinia';

    const sptStore = useSptStore()
    const { sptAdmGroup, replyGroup } = storeToRefs(sptStore)

    // const getData = ref(sptAdmGroup.value[getParams])
    const getData = ref([...sptAdmGroup.value.filter((x) => x.bindIdx == getParams)])

    // const prevData = ref([...sptAdmGroup.value.filter((x) => x.bindIdx == getParams - 1)])
    const nextData = ref([...sptAdmGroup.value.filter((x) => x.bindIdx == getParams + 1)])

    //현재 페이지의 데이터가 몇번째 데이터인지 구하기
    const getIdx = sptAdmGroup.value.findIndex((e) => e.bindIdx == getParams)
    
    const prevFiltered = sptAdmGroup.value[getIdx - 1]
    const nextFiltered = sptAdmGroup.value[getIdx + 1]
    
    const getReply = [...replyGroup.value.filter(x => x.NO === getData.value[0].NO )];

    
    console.log(getReply)
    
    

</script>
<style lang="scss" scoped>
    .common-button-container {
        margin-top: .5rem;
    }
</style>