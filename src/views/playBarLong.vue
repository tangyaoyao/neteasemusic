<template>
    <div id="playBarLong">
        <!--  播放，开始，暂停按钮 -->
        <div class="playButton">
            <img src="../assets/playbar/music_rewind_button.svg" alt="">
            <img src="../assets/playbar/music_play_button.svg" alt="">
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
                
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'playBarLong',
    data() {
        return {
            playbackProgress: '00:00',

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
</style>
