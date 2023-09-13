<template>
    <div v-for="item in usrData" class="spt-header">
        <p>
            <font-awesome-icon icon="fa-circle-user" />
            <span class="spt-header-usrname">{{ item.usrnm }}</span> 님 안녕하세요.
        </p>
        <button class="spt-header-logout" type="button">
            <router-link :to="{name: 'Login'}">
                Logout
            </router-link>
        </button>
    </div>
</template>
<script setup>
    import { toast } from 'vue3-toastify'
    import axios from 'axios'
    const usrData = ref([])

    axios.post('/api/login/getUserInfo')
        .then(res => {
            console.log(res.data.info)

            usrData.value.push(res.data.info)// let userData = ({...res.data.info})

            console.log(usrData.value)
            return
        })
        .catch (error => { 
            toast.success('정보를 가져오던 도중 오류가 발생했습니다.')
            return
        })
</script>
<style lang="scss" scoped>

</style>