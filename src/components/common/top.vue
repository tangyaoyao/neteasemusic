<template>
    <div id="c_topbar">
        <div class="iconAndName">
            <img src="../../assets/netEaseIcon.png" alt="" >
            <img src="../../assets/netEaseName.png" alt="" height="32">
        </div>

        <!-- <div class="backAndFoward">
            <img src="../../assets/top/down.png" alt="">
            <img src="../../assets/top/down.png" alt="">
        </div> -->

        <div class="search">
            <img src="" alt="">
        </div>

        <div class="skinAndSetting">
            <img src="../../assets/top/换肤.png" alt="">
            <img src="../../assets/top/set.png" alt="">
        </div>

        <div class="minimizeAndClose">
            <img src="../../assets/top/Minimize.png" alt="">
            <img src="../../assets/top/LC_icon_close_fill_circle.png" alt="">
        </div>
      
    </div>

</template>

<script>
export default {
    name: 'common',
    data() {
        return {

        }
    },
    methods: {
        quitApp() {

        }
    }
}
</script>


<style scoped>

    #c_topbar {
        width: 100%;
        height: 50px;
        background: rgb(198,47,47);
        margin: 0px;
        padding: 0px;
    }
    .iconAndName {
        float: left;
        margin-top: 10px;
        margin-left: 5px;
        
    }

    .skinAndSetting {
        float: left;
        margin-left: 950px;
        margin-top: -7px;
    }

    .skinAndSetting img:nth-of-type(2) {
        margin-left: 10px; 
    }

    .minimizeAndClose {
        float: right;
        margin-top: -8px;
    }
    .minimizeAndClose img:nth-of-type(2) {
        margin-right: 10px;
        margin-left: 10px;
    }
    
</style>