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
                    <p class="spt-dt-wrinfo">
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
                <h1 class="spt-progress-header" @click="showProgSetting">
                    <font-awesome-icon icon="fa-bars-progress" />
                    진행현황 설정
                </h1>
                
                <button class="common-list-button" @click="goList" type="button">
                    목  록
                </button>
                <button type="button" class="reply-comp-button">
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

    <!-- 진행현황 설정 팝업창 -->
    <dialog id="sptProgSetting" ref="showProgMd">
        <section id="progMdContainer" ref="innerProgMd">
            <h1 class="spt-progress-header">
                <font-awesome-icon icon="fa-bars-progress" />
                진행현황 설정
            </h1>
            <div class="spt-pro-input spt-pro-item">  
                <p class="spt-input-title">작업진행률</p>
                <div class="spt-pro-input-inner-container">
                    <input @input="numChk" ref="progressInput" type="text" maxlength="3">
                    <span class="spt-progress-unit">%</span>
                </div>
            </div>
            <div class="spt-pro-item">
                <p class="spt-input-title">진행상태</p>
                <div class="spt-pro-input-inner-container">
                    <select>
                        <option value="pre">확인예정</option>
                        <option value="assign">담당자배정</option>
                        <option value="ing">진행중</option>
                        <option value="comp">처리완료</option>
                    </select>
                </div>
            </div>
            <div class="md-alert-container">
                <p class="prog-over-alert" v-if="overProg == true">
                    <font-awesome-icon icon="fa-circle-xmark" />
                    진행률은 100%를 초과할 수 없습니다.
                </p> 
                <p class="prog-save-alert" v-if="saveProg == true">
                    <font-awesome-icon icon="fa-exclamation" />
                    저장되었습니다.
                </p>
            </div>
            
            <div class="common-button-container">
                <button class="btn-save-green" @click="progressSave" type="button">
                    <font-awesome-icon icon="floppy-disk" />
                    저장
                </button>
                <button @click="closeProgMd" type="button">
                    닫기
                </button>
            </div>
        </section>
        
    </dialog>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router'
    import { toast } from 'vue3-toastify'
    import axios from 'axios'

    const router = useRouter()
    const getParams = useRoute().params.id

    // store에서 영역별 데이터 import
    import { useSptStore } from '@/stores/sptSt'
    import { storeToRefs } from 'pinia';

    // import router from '@/router:';

    const sptStore = useSptStore()
    const { sptAdmGroup, replyGroup } = storeToRefs(sptStore)

    const getData = ref([...sptAdmGroup.value.filter((x) => x.bindIdx == getParams)])
    const nextData = ref([...sptAdmGroup.value.filter((x) => x.bindIdx == getParams + 1)])

    // 현재 페이지의 데이터가 몇번째 데이터인지 구하기
    const getIdx = sptAdmGroup.value.findIndex((e) => e.bindIdx == getParams)

    const prevFiltered = sptAdmGroup.value[getIdx - 1]
    const nextFiltered = sptAdmGroup.value[getIdx + 1]

    const getReply = [...replyGroup.value.filter(x => x.NO === getData.value[0].NO )];

    const progressInput = ref()
    const overProg = ref(false)
    const saveProg = ref(false)
    const showProgMd = ref();
    const innerProgMd = ref();

    // 로긔인한 유저 정보
    const usrData = ref([])

    axios.post('/api/login/getUserInfo')
        .then(res => {
            console.log(res.data.info)

            usrData.value.push(res.data.info)

            console.log(usrData.value[0])

        })
        .catch (error => {
            toast.success('정보를 가져오던 도중 오류가 발생했습니다.')
            return
        })

    function goList() {
        console.log(usrData.value)

        if( usrData.value[0].uslvl == '0' ) {
            router.push({
                name: 'SupportAdm'
            })
        } else {
            router.push({
                name: 'SupportCs'
            })
        }
    }

    function progressSave() {
        console.log(progressInput.value.value)
        // 이 값을 악-시오스로 보내시오


        progressInput.value.value = progressInput.value.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')

        if (progressInput.value.value > 100) {
            saveProg.value = false
            overProg.value = true

            setTimeout(function () {
                overProg.value = false
            }, 3000)
        } else {
            overProg.value = false
            saveProg.value = true
            setTimeout(function () {
                saveProg.value = false
            }, 3000)
        }

        
        
        
    }

    function numChk(e) {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')

        if (e.target.value > 100) {
            saveProg.value = false
            overProg.value = true

            setTimeout(function () {
                overProg.value = false
            }, 3000)
        } else {

        }
    }

    //진행현황설정 팝업창
    function showProgSetting() {
        showProgMd.value.showModal()
        console.log(showProgMd.value)
    }

    function closeProgMd(e) {
        showProgMd.value.close();
       
        
    }
</script>

<style lang="scss" scoped>
    .common-button-container {
        margin-top: .5rem;
        justify-content: space-between;

        button {
            background-color: transparent;
            font-weight: 700;
            outline: 2px solid rgb(var(--darkblue));
            outline-offset: -2px;
            color: rgba(var(--darkblue), 1);

            &.reply-comp-button {
                background-color: rgba(var(--darkblue), 1);
                outline: 0;
                color: rgba(var(--white), 1);
                font-weight: normal;
            }
        }
    }

</style>