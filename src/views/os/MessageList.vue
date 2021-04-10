<template>
	<div>
        <HeaderApp title="Messages" left="Créer groupe" right="Nouveau" search="true" />
		
		<div class="app-container">
			<li @click="pushPage('Conversation')" v-for="(conv, key) in conversation" :data-index="key" v-bind:key="key" class="message-container">
				<div id="second">
					<div id="contact-name">{{conv.name}}</div>
					<div id="time">{{conv.messages[0].time | time}}</div>

				</div>
				<div id="mess">{{conv.messages[0].message.substring(0, 50)}} ...</div>
			</li>
		</div>

		<div @click="goHome" class="controlbar"></div>
	</div>
</template>

<script>

/*
	<div class="convList selected" >
		<h2>CONVERSATIONS</h2>
		<ul ref="liste">
			<li id="new-conv" :class="{active: selectedConv == 0}"><span>+</span> Créer une conversation</li>
			
		</ul>
	</div>
*/
import HeaderApp from '../../components/os/HeaderApp'
import { mapGetters } from 'vuex'
export default {
	name: 'MessageList',
	
    components: {
        HeaderApp,
    },

    data(){
        return {
            selectedConv:0
        }
    },

	methods: {
        goHome() {
            this.$controller.loadOnScreen("os", {}, 'phone');
        },

		pushPage(r) {
			this.$controller.changePage("os", r, {});
		}
    },

	computed: {
        ...mapGetters('os',[
            'conversation',
        ])
		/*conversations () {
			return this.$store.state.os.conversation
		}*/
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-container {
	padding-left: 10px;
	padding-right: 10px;
	border-bottom: thin solid;
	background-color: #fff;
	padding: 0 20px;
    border-color: rgba(0, 0, 0, 0.1);
    transition: 0.4s;
    cursor: pointer;
    padding-bottom: 5px;
    padding-top: 5px;
}

.message-container:hover {
	background-color: rgba(19, 12, 12, 0.060);
}

#contact-name {
	font-family: "SF-Pro-Text-Bold";
	font-weight: 900;
}

#second {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

#mess {
	font-family: "SF-Pro-Text-Regular";
	font-size: 12px;
	color: rgba(146, 146, 146, 0.836);
}

#time {
	font-family: "SF-Pro-Text-Regular";
	font-size: 12px;
	color: rgba(172, 168, 168, 0.836);

}

</style>
