<template>
    <div id="playBarLong">
        <!--  播放，开始，暂停按钮 -->
        <div class="playButton">
            <img src="../assets/playbar/music_rewind_button.svg" alt="">
            <img @click="playOrPauseMusic" v-show="musicPaused" id="plauButton" src="../assets/playbar/music_play_button.svg" alt="">
            <img @click="playOrPauseMusic" v-show="!musicPaused" id="pauseButton" src="../assets/playbar/music_pause_button.svg" alt="">
            <img src="../assets/playbar/music_fastforward_button.svg" alt="">
        </div>
        <!-- 播放条 -->
        <div class="progressBarContainer">
            <!-- 歌曲播放进度显示 -->
            <div class="showPlaybackProgress">{{playbackProgress}}</div>
            <div class="progressBar"></div>
            <!-- 歌曲总长度 -->
            <div class="showMusicLenth">{{playbackProgress}}</div>
        </div>
        
        <!-- 音量 循环方式 播放列表 -->
        <div class="volumeAndMusicList">
            <div class="volumeContainer">
                <img src="../assets/playbar/music_volume.svg" alt="">
                <div class="volume"></div>
            </div>
            <div class="loopWay">
                <img src="../assets/playbar/单曲循环.svg" alt="">
            </div>
            <div class="musicList">
                <img src="../assets/playbar/play-list.svg" alt="">
                <div class="showMusicListCount">{{musicListCount}}</div>
            </div>
        </div>
        
        <audio ref="audio" src="https://m10.music.126.net/20190316212417/d284d2ff8b7d39af916eadcf96825bb4/ymusic/dabb/573c/bd57/fa893d8702ba202b0ac15d9aa61aab83.mp3" style="dispaly:none"></audio>
    </div>
     
</template>

<script>
export default {
    name: 'playBarLong',
    data() {
        return {
            // 歌曲当前播放进度
            playbackProgress: '00:00',
            // 当前歌单歌曲数量
            musicListCount:'50',
            // 判定歌曲是否正在播放
            musicPaused:true

        }
    },
    methods: {
        playOrPauseMusic() {
            if(this.$refs.audio) {
                if(this.$refs.audio.paused) {
                    this.musicPaused=false
                    this.$refs.audio.play()
                }else {
                     this.musicPaused=true
                    this.$refs.audio.pause()                    
                }
            }

        }
    }

}
</script>

<style>
    #playBarLong {
        width: 100%;
        height: 50px;
        border: 1px solid red;
        box-sizing: border-box;
        display: flex;
        justify-content:space-between;
        align-items: center;        
    }
    .playButton {
        flex:0 0 200px;
        /* width: 200px; */
        height: 100%;
        border: 1px solid blue ;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .progressBarContainer {
        display: flex ;
        justify-content: space-around ;
        align-items: center;
        width: 100%;
        height: 100% ;
    }
     /* 播放进度条 */
    .progressBar {
        width: 87%;
        height: 4px;
        border: 1px solid green;
        box-sizing: border-box;
        border-radius: 2px;

    }
    /* todo: 两侧改为由内容撑起宽度 */
    .volumeAndMusicList {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 0 0 230px;
        /* width: 280px; */
        height: 100%;
        border: 1px solid red;
    }
    .volumeContainer {
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .volume {
        width: 100px;
        height: 4px;
        border: 1px solid red;
    }
    .musicList img {
        float: left;
    }
    .showMusicListCount {
        float: right;
        height: 16px;
        padding: 0px 6px;
        border-radius: 0px 6px 6px 0px;
        font-size: 8px;
        line-height: 16px;
        background: rgb(225, 225, 226)
    }
</style>
