<template>
    <div id="login">
        <div class="top">
            <img @click="closeLoginWindow" class="loginClose" src="../../../assets/login/loginClose.svg" alt="">
        </div>
        <div class="centerContainer">
            <div @click='goToPhoneLogin' class="loginButton phoneLogin">{{loginway[0].phoneLogin}}</div>
            <div class="loginButton emailLogin">{{loginway[0].emailLogin}}</div>
        </div>
    </div>
</template>

<script>
export default {    
    name:'login',    
    data() {
        return {
            loginway:[
                {
                    phoneLogin:'手机号登陆',
                    emailLogin:'邮箱登陆'
                }
                
            ]
            
        }
    },
    methods: {
        goToPhoneLogin() {
            this.$router.push({name:'phoneLogin'})
        },
        closeLoginWindow() {
            this.$BrowserWindow.getFocusedWindow().close()
        }
    }
}
</script>

<style scoped>

    #login {
        cursor: default;
        width: 350px;
        height: 500px;
        background: url('../../../assets/login/loginbg.jpg');
        overflow: hidden;
    }
    .loginClose {
        margin-right: 5px;
        margin-top: 5px;
        float: right;
    }
    .centerContainer {
        display: inline-block;
        margin-top: 1px;
        padding-top: 1px;
        overflow: hidden;       /* 解决与子元素顶部边距重合  */
        margin-top: calc(50% + 32px);
        margin-left: calc(50% - 100px)
    }
    .loginButton {   
        width: 200px;
        height: 25px;
        /* border: 1px solid yellow; */
        border-radius: 13px;
        background: rgb(225, 225, 225);
        color: red;
        text-align: center;
        line-height: 25px;
    }
    .emailLogin {
        margin-top: 15px;
    }

</style>
