<template>
	<div>
        <div class="statusbar">
            <StatusBar />
        </div>
		
		<div class="header">
			<div class="icon">
				{{conversation[onconv].name.substring(1, 0)}}
			</div>
		</div> 
		
		<div class="header-text">
			<div>{{conversation[onconv].name}}</div>
		</div>

		<div class="messages">
			<div class="conversation">
				<ul ref="list">
					<li v-for="(message) in conversation[onconv].messages.slice().reverse()" v-bind:key="message.id">
						<div class="time">{{message.time | time}}</div>
						<div :class="message.type" >{{message.message}}</div>
					</li>
				</ul>
			</div>
		</div>
		
		<div id="text-container">
			<div class="inp-cont">
				<textarea placeholder="Message" @keydown.enter.exact.prevent ref="textZone" id="message-input" cols="40" rows="1" v-model="textModel"></textarea>
				<div class="button-send">
					<ArrowUp class="button-send-icon" />
				</div>
			</div>
		</div>
		<div @click="goHome" class="controlbar"></div>

	</div>
</template>

<script>
/*

*/
import StatusBar from '../../components/statusBar'
import ArrowUp from '../../assets/icons/arrow-up-solid.svg'
import { mapGetters, mapState } from 'vuex'
export default {
	// scroll not work because no switch menu
	name: 'Conversation',
	components: {
		StatusBar,
		ArrowUp
	},

    computed: {
        ...mapGetters('os',[
            'conversation',
        ]),
		...mapState('os',[
			'onconv'
		])
	},
    data(){
        return {
            convIdentifier: undefined,
			textModel:"",
			focused:false
        }
    },

    methods: {
        goHome() {
            this.$controller.loadOnScreen("os", {}, 'phone');
        }
    },
}
</script>

<style scoped>
.controlbar {
    position: relative;
    align-items: center;
    bottom: -10px;
    left: 34%;
    height: 6px;
    width: 100px;
    background-color: #000;
    border-radius: 15px;
    z-index: 4;
    transition-duration: 250ms;
}

.statusbar {
	margin: 30px 35px 0 35px;
}

.header {
	display: flex;
	justify-content: center;
	margin-top: 11px;
	margin-left: 11px;
	margin-bottom: 3px;
	width: 93.5%;
}

.header-text {
	width: 93.5%;
	margin-left: 11px;
	font-size: 9px;
	font-weight: 600;
	text-align: center;
	font-family: "SF-Pro-Text-Light";
	margin-bottom: 10px;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    color: #fff;
    font-family: "SF-Pro-Text-Regular";
    background: linear-gradient(#a6abb7, #858992);
}

.messages {
	border-top: 0.5px solid #dddddd;  
	height: 480px;
	width: 93.5%;
	margin-left: 11px;
	background-color: #f5f5f5;
	list-style: none;
	overflow-y: scroll;
}

ul {
    list-style-type: none;
	padding: 0;
}

.time {
	text-align: center;
	font-size: 10px;
    font-family: "SF-Pro-Text-Light";
	margin-bottom: 5px;
}

.sender {
	border-radius: 10px;
	margin-left: 90px;
	padding: 8px;
	width: 60%;
	background-color: #3bc861;
	color: #fff;
	font-size: 10px;
    font-family: "SF-Pro-Text-Light";
	margin-bottom: 8px;
}

.receiver {
	border-radius: 10px;
	margin-left: 20px;
	padding: 8px;
	width: 60%;
	background-color: #e9e9eb;
	font-size: 10px;
    font-family: "SF-Pro-Text-Light";
	margin-bottom: 8px;
}

#text-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 35px;
	width: 90%;
	
}

#message-input {
	width: 84%;
}

textarea {
    font-family: "SF-Pro-Text-Light";
	font-size: 12px;
	resize: none;
    padding: 1px 10px;
	margin-left: 1px;
    line-height: 2;
    border-radius: 30px;
    border: none;
	outline: none;
}

.inp-cont {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 6px;
	width: 88%;
	border-radius: 30px;
    border: 1px solid #ccc;
}

.button-send {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 23px;
	width: 23px;
	border-radius: 25px;
	margin-right: 3px;
	background: #3bc861;
}

.button-send-icon {
	height: 14px;
	width: 14px;
	color: #fff;
}
</style>
