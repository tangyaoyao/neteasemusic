<template>
  <div id="sidebar">
    <div class="sb_container">
      <!-- 头像 -->
        <div class="avatar">
          <img @click="login" src="../../assets/avatar2.jpg" width="80px" height="80px" alt>
        </div>
      <div class="userName">{{userName}}</div>
      <div class="tips personalFm">私人FM</div>
      <div class="tips myMusic">我的音乐</div>
      <div class="tips mv">MV</div>
      <div class="tips friends">朋友</div>
      <div class="songs createdMusicList">
        <span>创建的歌单</span>
        <div class="controlMl">
          <img src="../../assets/sidebar/plus.png" alt width="16" height="16">
          <img src="../../assets/sidebar/htb－Arrow right02.png" alt width="16" height="16">
        </div>
        <div class="decorativeRib"></div>
        <!--  修饰条  -->
        <div class="musicList">
          <img src="../../assets/sidebar/love.png" alt width="16" height="16">
          <span class="musicLIstItem">我喜欢的音乐</span>
        </div>
      </div>
      <div class="songs createdMusicList collectionOfSongs">
        <span>收藏的歌单</span>
        <div class="controlMl">
          <img src="../../assets/sidebar/plus.png" alt width="16" height="16">
          <img src="../../assets/sidebar/htb－Arrow right02.png" alt width="16" height="16">
        </div>
        <div class="decorativeRib"></div>
        <!--  修饰条  -->
        <div class="musicList">
          <img src="../../assets/sidebar/love.png" alt width="16" height="16">
          <span class="musicLIstItem">延时拍摄的BGM</span>
        </div>
      </div>
      <playBar id="playBar"></playBar>
    </div>
  </div>
</template>

<script>
import playBar from "./playBar";

export default {
  name: "sidebar",
  components: {
    playBar
  },
  data() {
    return {
      userName: "elperli",
    };
  },
  methods: {
    login() {
        let loginWin = new this.$BrowserWindow({
        width: 350,
        height: 500,
        frame:false,
        resizable:false,
        show:false,
        // backgroundColor:'#fff'
        transparent:true
        });
        //loginWin.webContents.openDevTools()    //openDevTools()要在页面正常的加载出来后才有作用
        loginWin.loadURL('http:localhost:8080/#/login')
        loginWin.on('closed', () => {
            loginWin = null
        })
        loginWin.once('ready-to-show', () => {
          loginWin.show()
        })
      //   this.$axios.get("http://localhost:3000/login/cellphone?phone=15283822720&password=60684014800")
      //         .then( res => {

      //             console.log(res);

      //         })
    }
  }
};
</script>

<style scoped>
* {
  outline: none;
}
#sidebar {
  position: relative;
  width: 200px;
  height: 820px;
  border: 1px solid gainsboro;
  border-width: 0px 1px 0px 0px;
  border-left: none;
  box-sizing: border-box;
  background: rgb(245, 245, 247);
} 
.sb_container {
  overflow: hidden;
}
.avatar {
  width: 80px;
  height: 80px;
  border: 1px solid gray;
  border-radius: 50%;
  margin-left: calc(50% - 40px);
  margin-top: 15px;
  background-size: 100% 100%;
  overflow: hidden;
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
  background: linear-gradient(to left top, #43cbff, #9708cc);
}
.myMusic {
  background: linear-gradient(to left top, #f97794, #623aa2);
}
.mv {
  background: linear-gradient(to left top, #a0fe65, #fa016d);
}
.friends {
  background: linear-gradient(to left top, #fff3b0, #9708cc);
}
.createdMusicList {
  width: 100%;
  height: auto;
  border: 1px solid red;
  border-left: none;
  margin-top: 2px;
}
.createdMusicList span {
  font-size: 12px;
  color: #6e6a6a;
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
  background: linear-gradient(left, #81ffef, #f067b4);
}
.musicList {
  padding: 3px 0px 3px 20px;
}
.musicList span {
  color: #241b1b;
  vertical-align: bottom;
}
.musicList img {
  /* margin-top: 1px; */
  vertical-align: bottom;
}

#playBar {
  position: absolute;
  bottom: 0px;
  outline: none;
  box-sizing: border-box;
}
</style>
