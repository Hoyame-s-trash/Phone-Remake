<template>
    <router-vue :is="this.$root.dynamicComponent" />
</template>


<script>
export default {
	name: 'os',
	methods:{
		async setData(){
			const [messages,contact,number] = await this.$ipc.sendServerAsync("phone:requestData")
			const contactList = {}
			for(const v of contact){
				contactList[String(v.number)] = {id:v.id,name:v.name}
			}
			this.$store.state.os.number = String(number)
			this.$store.state.os.contact = contactList
			this.$store.state.os.message = messages
			console.log(JSON.stringify(messages))
		},
		receiveMessage(message){
			this.$store.state.os.message.unshift(message)
			if(this.$store.state.os.onconv !== 0){
				this.$store.state.os.onconv--
			}
		},
	},
	mounted(){
		this.setData()
		this.$eventManager.stopGameAction(true)
		this.$eventManager.defineEvent("os:receiveMessage", this.receiveMessage)
	},
	beforeDestroy(){
		this.$eventManager.stopGameAction(false)
		this.$eventManager.removeEvent("os:receiveMessage")
	}
}
</script>

<style scoped>


</style>


