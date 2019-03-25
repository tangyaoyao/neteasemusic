<template>
    <div id="phoneLogin">
        <div class="phoneLogin_top" @click="backToLogin">{{back}}</div>
        <img class="phonePic" src="../../../assets/login/phone.svg" alt="">
        <div class="phoneLoginContainer">
            <input class="phoneLoginItem phoneNumber" type="text" placeholder="请输入手机号">
            <input class="phoneLoginItem password" type="password" placeholder="请输入密码">
        </div>
        <div class="confirm">登陆</div>
    </div>
</template>

<script>
export default {
    name:'phoneLogin',
    data() {
        return {
        back:'< 返回其他登陆'
        }

    },
    methods: {
        backToLogin() {
            this.$router.push({name:"login"})
        }
        
    }
}
</script>

<style scoped>
    #phoneLogin {
        width: 350px;
        height: 500px;
        overflow: hidden;
    }
    .phoneLogin_top {
        float: left;
        margin-left: 5px;
        margin-top: 13px;
        font-size: 13px;
        color:rgb(102, 102, 102)
    }
    .phonePic {
        position: absolute;
        margin-top: calc(30% - 32px);
        margin-left: calc(50% - 32px)
    }
    .phoneLoginContainer {
        display: inline-block;
        margin-top: calc(50%);
        margin-left: calc(50% - 130px)
    }
    .phoneLoginItem {
        width: 260px;
        height: 40px;
        border: 1px solid red;
        outline: none;
        box-sizing: border-box;
        padding-left: 10px;
    }
    .phoneNumber {
        border-radius: 3px 3px 0px 0px;
    } .password {
        border-radius: 0px 0px 3px 3px;
    }

    /* 合并两个input框的边线 */
    .phoneLoginItem~.phoneLoginItem {   
        border-top: none;
    }
    input::placeholder {
        color: darkgrey
    }
    .confirm {
        width: 260px;
        height: 40px;
        background: rgb(234, 72, 72);
        margin-top: 30px;
        margin-left: calc(50% - 130px);
        font-size: 16px;
        color: azure;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        letter-spacing: 10px;
        font-weight:200;
    }
    .confirm:hover {
        background: rgb(199, 46, 46)
    }

</style>
