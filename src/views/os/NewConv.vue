<template>
	<div>	
        <HeaderApp title="Nouvelle Conv" left="Retour" right="" />


		<div class="messages">
            <div class="new-num">
                <div>A : </div>
                <textarea placeholder="Numero" id="message-input"></textarea>
            </div>

			<div class="conversation">
				<ul ref="list">
				
				</ul>
			</div>
		</div>
		
		<div class="conv-c">
			<div @click="emoji = !emoji" class="button-send-c">
				<Smile class="button-send-icon-c" />
			</div>

			<div class="button-send-c">
				<Street class="button-send-icon-c" />
			</div>

			<div id="text-container">
				<div class="inp-cont">
					<textarea placeholder="Message" @keydown.enter.exact.prevent ref="textZone" id="message-input" cols="40" rows="1" v-model="textModel"></textarea>
					<div class="button-send">
						<ArrowUp class="button-send-icon" />
					</div>
				</div>
			</div>

			<picker v-if="emoji" @select="addEmoji" :style="{height: '380px', width: '292px', position: 'absolute', bottom: '94px', right: '24px' }" />

		</div>

		<div @click="goHome" class="controlbar"></div>
	</div>
</template>

<script>

/*
	<div class="conversation">
		<input v-model="numberModel" ref="numberInput" type="text" />
		
		<div id="text-container">
            <textarea v-model="textModel" @keydown.enter.exact.prevent @input="resize" ref="textZone" id="message-input" cols="40" rows="1"></textarea>
            <i class="icon-right-arrow"></i>
        </div>
	</div>
*/

import HeaderApp from '../../components/os/HeaderApp'
import Smile from '../../assets/icons/smile-solid.svg'
import ArrowUp from '../../assets/icons/arrow-up-solid.svg'
import Street from '../../assets/icons/street-view-solid.svg'
import { Picker } from 'emoji-mart-vue'
import { mapGetters, mapState } from 'vuex'

export default {
	// scroll not work because no switch menu
	name: 'Conversation',

    components: {
		HeaderApp,
		ArrowUp,
		Street,
		Smile,
		Picker
	},

    computed: {
        ...mapGetters('os',[
            'conversation',
        ])
	},
    data(){
        return {
            convIdentifier: undefined,
            active:1,
            textModel:"",
            numberModel:"",
            focused: false,
			emoji: false
        }
    },
	methods: {
        addEmoji(emoji) {
			this.textModel = this.textModel + emoji.native
		}
	}
}
</script>

<style scoped>
.new-num {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 32px;
    padding-left: 25px;
    font-family: "SF-Pro-Text-Regular";
    font-size: 12.5px;

    background-color: #fff;
    border-bottom: 1px solid rgb(197, 197, 197);
}

.conv-c {
	display: flex;
	flex-direction: row;
    align-items: center;

	margin-left: 35px;
}

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
	height: 500px;
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
	padding: 0 0 0 0;
	width: 81%;
	
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
	width: 85%;
	border-radius: 30px;
    border: 1px solid #ccc;
}

.button-send {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 23px;
	width: 25px;
	border-radius: 25px;
	margin-right: 1.5px;
	background-color: #3bc861;
}

.button-send:hover {
	opacity: 70%;
	cursor: pointer;
}

.button-send-icon {
	height: 14px;
	width: 14px;
	color: #fff;
}

.button-send-c {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 8px;
	margin-right: 5px;
	height: 26.5px;
	width: 26.5px;
	border-radius: 25px;
    border: 1px solid rgb(102, 102, 102);
	transition-duration: 250ms;

}

.button-send-icon-c {
	height: 11px;
	width: 11px;
	color: rgb(102, 102, 102);
}

.button-send-c:hover {
	cursor: pointer;
    border: 1px solid rgb(197, 197, 197);
	background: rgb(197, 197, 197);
}

</style>
