<template>
	<div id="state" :style="dark ? 'color: #fff; fill: #fff': 'color: #000; fill: #000'">
		<div> 
			<p id="time">17:41</p>
		</div>
		<div>
			<Signal class="icon" height="9"  />
			<Wifi class="icon"  height="9"  />
			<Battery class="icon" height="9"  />
		</div>
	</div>
</template>

<script>
import Wifi from '../assets/icons/wifi.svg'
import Signal from '../assets/icons/signal.svg'
import Battery from '../assets/icons/battery.svg'

export default {
	name: 'StatusBar',

	props: ['dark'],

	components: {
		Wifi,
		Signal,
		Battery
	},

	data () {
		return {
			styleObject: {}
		}
	},
	computed: {
		battery () {
			return this.$store.state.screen.battery
		}
	},
	watch: {
		battery: function () {
			if (this.battery <= 25) {
				this.$data.styleObject = {
					backgroundColor: '#FF4646'
				}
			} else if (this.battery <= 40) {
				this.$data.styleObject = {
					backgroundColor: '#FFAF46'
				}
			} else {
				this.$data.styleObject = {
					backgroundColor: '#88DC74'
				}
			}
			var size = 20 * (this.battery / 100)
			this.$data.styleObject.width = size + 'px'
		}
	}
}
</script>

<style scoped>
p{
	padding:0em;
	margin:0em;
}

#state{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size:12px;
	color:#fff;
	font-weight:700;
	font-family: "SF-Pro-Text-Regular";
	margin-top: 12px;
}

#time {
	margin-left: 7.5px;
}

.icon {
	margin-left: 2px;
}

</style>
