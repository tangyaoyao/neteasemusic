<template>
  <div id="sidebar">
    <div class="sb_container">
        <div class="avatar"></div>
        <div class="userName">{{userName}}</div>
        <div class="tips personalFm">私人FM</div>
        <div class="tips myMusic">我的音乐</div>
        <div class="tips mv">MV</div>
        <div class="tips friends">朋友</div>
        <div class="songs createdMusicList">
            <span>创建的歌单</span>
            <div class="controlMl">
                <img src="../../assets/sidebar/plus.png" alt="" width="16" height="16">
                <img src="../../assets/sidebar/htb－Arrow right02.png" alt="" width="16" height="16">
            </div>
            <div class="decorativeRib"></div> <!--  修饰条  --> 
            <div class="musicList">
                <img src="../../assets/sidebar/love.png" alt="" width="16" height="16">
                <span class="musicLIstItem">我喜欢的音乐</span>
            </div>
        </div>
        <div class="songs createdMusicList collectionOfSongs">
            <span>收藏的歌单</span>
            <div class="controlMl">
                <img src="../../assets/sidebar/plus.png" alt="" width="16" height="16">
                <img src="../../assets/sidebar/htb－Arrow right02.png" alt="" width="16" height="16">
            </div>
            <div class="decorativeRib"></div> <!--  修饰条  --> 
            <div class="musicList">
                <img src="../../assets/sidebar/love.png" alt="" width="16" height="16">
                <span class="musicLIstItem">延时拍摄的BGM</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
        userName: 'elperli',

    };
  }
};
</script>

<style scoped>

#sidebar {
  width: 200px;
  height: 870px;
  border: 1px solid red;
  border-left: none

}
.avatar {
    width: 80px;
    height:80px;
    border: 1px solid gray;
    border-radius: 50%;
    margin-left: calc(50% - 40px);
    margin-top: 18px;
    background: url("../../assets/avatar2.jpg");
    background-size: 100% 100%;
}
.userName {
    text-align: center;
    font-size: 20px;
}
.tips {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 34px;
    /* border:1px solid red; */
    border-radius: 40px;
    margin-top: 15px;
    margin-left: calc(50% - 70px);
}
.personalFm {
    background: linear-gradient(left top,#43CBFF,#9708CC)
}
.myMusic {
    background: linear-gradient(left top,#F97794,#623AA2)
}
.mv {
    background: linear-gradient(left top,#A0FE65,#FA016D)
}
.friends {
    background: linear-gradient(left top,#FFF3B0,#9708CC)
}
.createdMusicList {
    width: 100%;
    height: auto;
    border: 1px solid red;
    border-left: none

}
.createdMusicList span {
    font-size: 12px;
    color: #6E6A6A;
    margin-left: 8px;
}
.controlMl {
    float: right;
    margin-top: 3px;
    margin-right: 3px;

}
.controlMl img {
    padding-right: 3px;
}
.decorativeRib {
    height: 2px;
}
.decorativeRib {
    width: 186px;
    height: 2px;
    margin-top: 2px;
    margin-left: 5px;
    /* border: 1px solid red; */
    border-radius: 1px;
    background: linear-gradient(left, #81FFEF, #F067B4)
}
.musicList {
    padding-top:3px;
    padding-left: 20px;
    padding-bottom: 3px;
}
.musicList span {
    color: #241B1B;
}jm,
    float: left;
    margin-top: 1px;
}


</style>
