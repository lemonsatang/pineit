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
                    <input type="text" name="password" placeholder="PASSWORD..." v-model="userData.password" maxlength="30">
                </div>
                <div class="common-button-container">
                    <button @click="loginChk()" class="gradient-button" type="button"><p>Login</p></button>
                    <button @click="backButton()" class="line-gradient-button" type="button"><p>Back</p></button>
                </div>
                <div>
                    <span v-if="loginMsgState">아이디 또는 비밀번호가 일치하지 않습니다. 입력하신 사항을 다시 확인해 주세요.</span>
                </div>
            <!--</form> -->
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
const loginMsg = ref('')
const loginMsgState = ref(false)

// 로그인 버튼
async function loginChk() {
    if(!!userData.value.username === false) {
        return toast.error('아이디를 입력해주세요.', { position: 'top-center' })
    } else if(!!userData.value.password === false) {
        return toast.error('비밀번호를 입력하세요.', { position: 'top-center' })
    }

    console.log(userData)

    try {
        loginMsg.value = ''

        console.log(userData.value.username)

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

                    axios.post('/api/login/test')
                    .then(res => console.log(res.data))
                } else {
                    loginMsg.value = true
                    setTimeout(() => {
                        loginMsg.value = false
                    }, 4000)

                    return toast.error('로그인에 실패하였습니다.', { position: 'top-center' })
                }
            }

        // axios.post('/api/loginChk', {
        //     username: userData.value.username,
        //     password: userData.value.password
        // })
        // .then(res => {
        //     if(res.data.result == 'Success') {
        //         console.log(res.data)
        //         // 세션 작업 필요
        //         //router.push({ name: 'SupportAdm' })
        //     } else {
        //         loginMsg.value = true
        //         setTimeout(() => {
        //             loginMsg.value = false
        //         }, 4000)

        //         return toast.error('로그인에 실패하였습니다.', { position: 'top-center' })
        //     }
        // })
        // .catch(error => {toast.error('로그인하던 도중 오류가 발생하였습니다.'); console.warn('Error : ' + error)}
        // )
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
        border-radius: 2rem;
        padding: 4.5rem 2rem;

        hgroup {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            margin-bottom: 2rem;
        }

        h1 {
            font-size: var(--fnt-st);

        }
    }

    .login-sub-header {
        opacity: .7;
        margin-bottom: 3rem;
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
</style>
