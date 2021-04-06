<template>
	<div class="conversation">
		<input v-model="numberModel" ref="numberInput" type="text" />
		
		<div id="text-container">
            <textarea v-model="textModel" @keydown.enter.exact.prevent @input="resize" ref="textZone" id="message-input" cols="40" rows="1"></textarea>
            <i class="icon-right-arrow"></i>
        </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	// scroll not work because no switch menu
	name: 'Conversation',
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
        }
    },
	methods: {
        resize(){
            const maxRow = 5
            const ref = this.$refs["textZone"]
            if(ref.scrollTop > 1 && ref.rows < maxRow){
                ref.rows = ref.rows + 1
            }
        },
        keydown(e){
            if(e.key == "Backspace"){
                if(this.active == 1){
                    if(this.$refs["numberInput"].value.length == 0){
                        this.$controller.changePage("os","MessageList")
                    }
                }else if(this.active == 2){
                    if(this.$refs["textZone"].value.length == 0){
                        this.$controller.changePage("os","MessageList")
                    }
                }
            }

            if(e.key == "ArrowDown"){
               if(this.active < 2){
                    this.$refs["numberInput"].blur()
                    this.$refs["textZone"].focus()
                    this.active++;
               }
            }else if(e.key == "ArrowUp"){
                if(this.active > 1){
                    this.$refs["textZone"].blur()
                    this.$refs["numberInput"].focus()
                    this.active--;
                }
            }else if(e.key == "Enter"){
                if(this.textModel.length !== 0 && this.numberModel.length !== 0){
                    const date = new Date()
                    const message = {message:this.textModel, receiver:this.numberModel, send_date: date.toString(), sender: this.$store.state.os.number}
                    this.$store.state.os.message.unshift(message)
					this.$store.state.os.onconv = 0
                    this.$eventManager.callGameEvent2({type:"server",name:"phone:sendMessage"},{message:this.textModel, receiver:this.numberModel, send_date: date.toString(), sender: this.$store.state.os.number})
                    this.$controller.changePage("os","Conversation",{})
                }
            }
        },
        toogleControl(e){
			e.preventDefault()
			if(e.button == 2){
				this.focused = !this.focused
				if(this.focused == true){
					this.$eventManager.focus()
					this.$nextTick(function(){
						this.$refs["numberInput"].focus()
					})
				}else{
					this.$eventManager.unfocus()
					this.$refs["numberInput"].blur()
                    this.active = 1
				}
			}
		},
		Enter () {
		},
	},
	created () {
        if(this.$controller.params["os"].number !== undefined){
            this.numberModel = this.$controller.params["os"].number
        }
        window.addEventListener('keydown', this.keydown)
        window.addEventListener('mousedown', this.toogleControl, true);
	},
    beforeDestroy () {
		window.removeEventListener('keydown', this.keydown)
        window.removeEventListener("mousedown", this.toogleControl, true);
        this.$eventManager.unfocus()
	},
	mounted () {
	}
}
</script>

<style scoped>
div,
h1, h2, h3, h4, h5, h6, p,
a,
img,
b, u, i, center,
dl, dt, dd, ol, ul, li
{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}


#text-container{
    position:absolute;
    bottom:0em;
    left:2em;
    bottom:1em;
    height:auto;
}

.conversation{
    position:absolute;
    height:100%;
    width:100%;
}

#message-input{
	background: #A4A4A4 0% 0% no-repeat padding-box;
	border-style: none;
	border:1px solid black;
	width:85%;
    margin:0 auto;
	opacity: 1;
	border-radius: 5px;
    bottom:0em;
}

.icon-right-arrow{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
	color:#5E5EFF;
}

input{
    width:calc(100% - 6px);
    text-align:center;
    border:none;
}

input:focus{
    border:1px solid black;
    background-color:#5E5EFF;
    color:#fff;
}

</style>
