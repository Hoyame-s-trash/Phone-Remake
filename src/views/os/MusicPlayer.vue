<template>
    <div>
        <div class="app-container">
            <div class="statusbar">
                <StatusBar dark="s" />
            </div>


            <div class="music1">
                <img class="cover" src="https://images.genius.com/5f94e68fcc026835627006a3ef87317e.1000x1000x1.jpg"/>              
                <div class="title">Rooftop</div>
                <div class="artist">SCH</div>

                <div class="progressbar">
                    <div class="progress-s"></div>
                </div>

                <div class="control">
                    <Backward class="icon" />
                    <Play class="icon" />
                    <Forward class="icon" />
                </div>
            </div>
        </div>

		<div @click="goHome" class="controlbar"></div>
    </div>
</template>

<script>
import StatusBar from '../../components/statusBar'
import Backward from '../../assets/icons/backward-solid.svg'
import Forward from '../../assets/icons/forward-solid.svg'
import Play from '../../assets/icons/play-solid.svg'


export default {
    name: "MusicPlayer",
    components: {
        StatusBar,
        Play,
        Forward,
        Backward
    },

	methods: {
        goHome() {
            this.$controller.loadOnScreen("os", {}, 'phone');
        },

		pushPage(r) {
			this.$controller.changePage("os", r, {});
		}
    },
    
    setup() {
        
    },
}
</script>

<style scoped>
.app-container {
    margin-top: 18px;
    padding: 0px;
    height: 645px;
    background: #1d1d1d;
}

.controlbar {
    background: #fff;
}

.statusbar {
	margin: 15px 15px 0 15px;
}

.music1 {
    height: 190px;
    width: 220px;
    font-size: 17.5px;
    margin: 90px auto 0 auto;
    font-family: "SF-Pro-Text-Bold";
    color: #fff;
}

.cover {
    height: 190px;
    width: 190px;
    border-radius: 7.5px;
    margin-left: 15px;
    margin-bottom: 15px;
}

.title {
    font-size: 20px;
	font-family: "SF-Pro-Text-Regular";
    color: #fff;
    text-align: center;
    margin-bottom: 5px;
}

.artist {
    font-size: 12px;
	font-family: "SF-Pro-Text-Regular";
    color: rgb(199, 199, 199);
    text-align: center;
    margin-bottom: 35px;
}

.progressbar {
    height: 2px;
    width: 220px;
    background: rgb(165, 165, 165);
}

.progress-s {
    height: 2px;
    width: 25%;
    background: rgb(255, 255, 255);
}

.control {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
}

.icon {
    margin: 0 16px;
    height: 40px;
    width: 40px;
}

.icon:hover {
    opacity: 60%;
    cursor: pointer;
}

</style>