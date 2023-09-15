<template>
    <section :class="{'login-background': useRoute().name == 'Login'}" id="loginWrap">
        <div id="loginBody">
            <hgroup>
                <h1><span class="color-impact">P</span>INEIT</h1>
                <h1>LOGIN<span class="color-impact">.</span></h1>
            </hgroup>

            <p class="login-sub-header">Sign in and Start your solution management</p>
            <!--<form method="post" action="/login"> -->
                <div class="login-input-body">
                    <input type="text" name="username" placeholder="ID..." v-model="userData.username" @keyup.enter="loginChk()" maxlength="30">
                    <input @keyup.enter="loginChk()" type="password" name="password" placeholder="PASSWORD..." v-model="userData.password" maxlength="30">
                </div>
                <div class="common-button-container">
                    <button @click="loginChk()" class="gradient-button" type="button"><p>Login</p></button>
                    <button @click="backButton()" class="line-gradient-button" type="button"><p>Back</p></button>
                </div>
                <div class="login-msg-body">
                    <span v-if="loginMsg">
                        <font-awesome-icon icon="fa-circle-exclamation" />
                        아이디 또는 비밀번호가 일치하지 않습니다. 입력하신 사항을 다시 확인해 주세요.
                    </span>
                </div>
            <!--</form> -->
            <p class="login-sub-bottom">Copyright © 2023 소나무정보기술, All Rights Reserved.</p>
        </div>
    </section>
</template>

<script setup>
    import { useRouter, useRoute } from 'vue-router'
    import { toast } from 'vue3-toastify'
    import axios from 'axios'

    const router = useRouter()
    // 사용자 정보
    const userData = ref({})
    const { username, password } = userData.value
    // 로그인 메세지
    const loginMsg = ref(false)

    // 로그인 버튼
    async function loginChk() {
        if(!!userData.value.username === false) {
            return toast.error('아이디를 입력해주세요.', { position: 'top-center' })
        } else if(!!userData.value.password === false) {
            return toast.error('비밀번호를 입력하세요.', { position: 'top-center' })
        }

        try {
            loginMsg.value = ''

            const response = await axios({
                method: 'post',
                url: '/api/loginChk',
                params: {
                    username: userData.value.username,
                    password: userData.value.password
                }
            })

            if (response.status === 200) {
                if (response.data.result == "Success") {
                    // 로그인에 성공한 사용자를 스토어에 저장

                    toast.success('로그인에 성공했습니다.')

                    // 로그인 정보 가져오기
                    axios.post('/api/login/getUserInfo')
                    .then(res => {
                        console.log(res.data.info)
                        // 여기서 url 이동(uslvl이 0일시 관리자, 나머지는 고객사)
                        if ( res.data.info.uslvl == '0' ) {
                            router.push({
                                name: 'SupportAdm'
                            })
                            console.log('관리자 로그인')
                        } else {
                            router.push({
                                name: 'SupportCs'
                            })
                            console.log('고객사 로그인')
                        }
                    })
                    .catch (error => { // 로그인 정보 가져오기 실패시, 페이지 이동 X
                        toast.success('로그인 정보를 가져오던 도중 오류가 발생했습니다.')
                        return
                    })
                } else {
                    loginMsg.value = true
                    setTimeout(() => {
                        loginMsg.value = false
                    }, 5000)

                    return toast.error('로그인에 실패하였습니다.', { position: 'top-center' })
                }
            }
        } catch (error) {
            console.warn('Error : ' + error)
        }
    }

    // 뒤로가기
    function backButton() {
        router.go(-1)
    }
</script>

<style lang="scss" scoped>
    #loginBody {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(var(--white), .75);
        border-radius: 1rem;
        padding: 4.5rem 2rem 1.5rem;
        min-width: 15.5rem;

        hgroup {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            margin-bottom: 1.35rem;
        }

        h1 {
            font-size: var(--fnt-st);
        }
    }

    .login-sub-header {
        opacity: .7;
        margin-bottom: 3rem;
        line-height: 1.5;
    }

    .login-sub-bottom {
        opacity: .7;
        margin-top: 2rem;
        line-height: 1.5;
    }

    .common-button-container {
        flex-direction: column;
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

    .login-msg-body {
        height: 1.5rem;
        margin-top: .75rem;

        span {
            display: block;
            line-height: 1.5;
            color: rgba(var(--alertred), 1);

            svg {
                margin-right: .25rem;
            }
        }
    }

    .login-input-body {
        display: flex;
        gap: .35rem;
    }

    #loginBody input {
        font-size: var(--fnt-lg);
        background-color: rgba(var(--deepblue), .15);

        &::placeholder {
            color: rgba(var(--deepblue), .35);
        }
    }

    @media screen and (max-width: 1024px) {
        #loginBody {
            padding: 3.5rem 1rem 1.5rem;

            h1 {
                font-size: var(--fnt-subt);
            }
        }

        .login-input-body {
            flex-direction: column;
        }
    }
</style>