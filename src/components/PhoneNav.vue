<template>
	<div id="navigation">
		<img @click="ff" class="app-icon-image" src="@/assets/icons/call.png" />
		<img @click="ff" class="app-icon-image" src="@/assets/icons/contacts.png" />
		<img @click="ff" class="app-icon-image" src="@/assets/icons/messages.png" />
		<img @click="ff" class="app-icon-image" src="@/assets/icons/calculator.png" />
	</div>
</template>

<script>


export default {
	name: 'Navigation',

	methods: {
		ff() {
			console.log("eee")
		},

		dd() {

		}
	}
}

</script>

<style>

#navigation {
	padding: 7.5px 0;
	height: 50px;
	border-radius: 16px;
	background-color: rgba(255, 255, 255, 0.450);
}

@keyframes fadein {
  0%   {opacity:0;}
  12%  {opacity:0.2;}
  25%  {opacity:0.3;}
  35%  {opacity:0.4;}
  50%  {opacity:0.5;}
  65%  {opacity:0.6;}
  75%  {opacity:0.7;}
  90%  {opacity:0.8;}
  100% {opacity:1;}
}

</style>
