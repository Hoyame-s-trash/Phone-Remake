<template>
    <div>
        <div class="app-container">
            <div class="statusbar">
                <StatusBar dark="s" />
            </div>

            <div class="title">Musique</div>

            <div class="music1">
                <div class="t1">Rap</div>

                <div class="t1-components">
                    <div class="tt-component">
                        <img class="cover" src="https://images.genius.com/5f94e68fcc026835627006a3ef87317e.1000x1000x1.jpg"/>              
                        <div class="tit-cov">Rooftop</div>
                    </div>

                    <div class="tt-component">
                        <img class="cover" src="https://images.genius.com/6bf8af39f7861f7ddfcecafaa2634bbf.1000x1000x1.png"/>              
                        <div class="tit-cov">M.I.L.S 3</div>
                    </div>

                    <div class="tt-component">
                        <img class="cover" src="https://static.fnac-static.com/multimedia/Images/FR/NR/bd/1e/ca/13246141/1540-1/tsp20210201140132/Drill-FR.jpg"/>              
                        <div class="tit-cov">Drill FR</div>
                    </div>

                </div>
            </div>

            <div class="music1">
                <div class="t1">Top 3</div>

                <div class="t1-components">
                    <div class="tt-component">
                        <img class="cover" src="https://cdn.discordapp.com/attachments/677585623736909834/829804378775879740/unknown.png"/>              
                        <div class="tit-cov">Le restaurant</div>
                    </div>

                    <div class="tt-component">
                        <img class="cover" src="https://images.genius.com/5f94e68fcc026835627006a3ef87317e.1000x1000x1.jpg"/>              
                        <div class="tit-cov">Cervelle</div>
                    </div>

                    <div class="tt-component">
                        <img class="cover" src="https://images.genius.com/5f94e68fcc026835627006a3ef87317e.1000x1000x1.jpg"/>              
                        <div class="tit-cov">Tirer un trait</div>
                    </div>

                </div>
            </div>
            
            <div class="music1">
                <div class="t1">Titres Likes</div>

                <div class="t1-components">
                    <div class="tt-component">
                        <img class="cover" src="https://images.genius.com/5f94e68fcc026835627006a3ef87317e.1000x1000x1.jpg"/>              
                        <div class="tit-cov">Interlude</div>
                    </div>

                    <div class="tt-component">
                        <img class="cover" src="https://images.genius.com/5f94e68fcc026835627006a3ef87317e.1000x1000x1.jpg"/>              
                        <div class="tit-cov">Cervelle</div>
                    </div>

                    <div class="tt-component">
                        <img class="cover" src="https://images.genius.com/5f94e68fcc026835627006a3ef87317e.1000x1000x1.jpg"/>              
                        <div class="tit-cov">Tirer un trait</div>
                    </div>

                </div>
            </div>
        </div>

		<div @click="goHome" class="controlbar"></div>
    </div>
</template>

<script>
import StatusBar from '../../components/statusBar'

export default {
    name: "Music",
    components: {
        StatusBar
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

.title {
    margin: 20px 0 20px 20px; 
    font-size: 25px;
	font-family: "SF-Pro-Text-Bold";
    color: #fff;
}

.music1 {
    height: 140px;
    padding-left: 20px;
    font-size: 17.5px;
    margin-bottom: 20px;
    font-family: "SF-Pro-Text-Bold";
    color: #fff;
}

.t1 {
    margin-bottom: 10px;
}

.t1-components {
    width: 270px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
}

.tt-component {
    width: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    overflow-x: scroll;
}


.tt-component:hover {
    cursor: pointer;
    opacity: 60%;
}

.cover {
    height: 80px;
    width: 80px;
    border-radius: 7.5px;
    margin-bottom: 5px;
}

.tit-cov {
    font-size: 11px;
    font-family: "SF-Pro-Text-Regular";
}
</style>