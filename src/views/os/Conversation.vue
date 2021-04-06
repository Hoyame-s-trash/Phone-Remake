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
					<li v-for="(message) in conversation[onconv].messages.slice().reverse()" :class="message.type" v-bind:key="message.id">
						<p class="time">{{message.time | time}}</p>
						<p>{{message.message}}</p>
					</li>
				</ul>
				<div id="text-container">
					<textarea @keydown.enter.exact.prevent @input="resize" ref="textZone" id="message-input" cols="40" rows="1" v-model="textModel"></textarea>
					<i class="icon-right-arrow"></i>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
/*

*/
import StatusBar from '../../components/statusBar'
import { mapGetters, mapState } from 'vuex'
export default {
	// scroll not work because no switch menu
	name: 'Conversation',
	components: {
		StatusBar
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
       
	}
}
</script>

<style scoped>
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
	height: 550px;
	width: 93.5%;
	margin-left: 11px;
	background-color: #eeeeee;
}


</style>
