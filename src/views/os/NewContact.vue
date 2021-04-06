<template>
    <div id="container" ref="container">
        <div id="icone-bg">
            <i id="icone" class="fas fa-user"></i>
        </div>
        <h3>Nom</h3>
        <input v-model="nameModel" :class="{active: btnIndex == 0}" ref="nameInput" id="name" type="text" autocomplete="off" />
        <h3>Numéro</h3>
        <input v-model="numberModel" :class="{active: btnIndex == 1}" ref="numberInput" id="number" type="text" autocomplete="off" />
        <button :class="{active: btnIndex == 2}" id="save">Enrengistrer</button>
    </div>
</template>

<script>
export default {
    name:"newContact",
    data(){
        return{
            btnIndex:0,
            btnMax:2,
            numberModel:"",
            nameModel:""
        }
    },
    methods:{
        async keydown(e){
            if(e.key == "ArrowDown"){
                this.down()
            }else if(e.key == "ArrowUp"){
                if(this.btnIndex > 0){
                    this.btnIndex--;
                    if(this.btnIndex == 0){
                        this.$refs["numberInput"].blur()
                        this.$refs["nameInput"].focus()
                    }else if(this.btnIndex == 1){
                        this.$refs["numberInput"].focus()
                    }
                }
            }else if(e.key == "Enter"){
                if(this.btnIndex == 2){
                    if(this.numberModel.length == 0) return
                    if(this.nameModel.length == 0) return
                    const id = await this.$ipc.sendServerAsync("phone:addContact",this.nameModel, this.numberModel)
                    this.$store.state.os.contact[this.numberModel] = {id:id, name: this.nameModel}
                    this.$controller.changePage("os","ContactList",{})
                }
            }else if(e.key == "Backspace"){
                if(this.btnIndex == 0){
                    if(this.$refs["nameInput"].value.length == 0){
                        this.$controller.changePage("os","ContactList",{})
                    }
                }else if(this.btnIndex == 1){
                    if(this.$refs["numberInput"].value.length == 0){
                        this.$controller.changePage("os","ContactList",{})
                    }
                }else{
                    this.$controller.changePage("os","ContactList",{})
                }
            }
        },
        down(){
            if(this.btnIndex < this.btnMax){
                this.btnIndex++;
                if(this.btnIndex == 1){
                    this.$refs["container"].querySelector("#name").blur()
                    this.$refs["container"].querySelector("#number").focus()
                }else if(this.btnIndex == 2){
                    this.$refs["numberInput"].blur()
                }
            }
        }
    },
    created(){
        window.addEventListener('keydown', this.keydown)
    },
    mounted(){
        this.$refs["nameInput"].focus()
    },
    beforeDestroy(){
        window.removeEventListener('keydown', this.keydown)
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


#container{
    text-align:center;
}

h2{
	font:16px/19px SF UI Display Heavy;
	text-align:center;
}

h3{
    font:16px/19px SF UI Display Heavy;
    text-transform:uppercase;
}

input{
    text-align:center;
    border:none;
}

input:focus{
    background-color:#B0C4DE;
}

#icone-bg{
    width:8em;
    height:8em;
    background-color:#B0C4DE;
    border-radius:50%;
    margin:1em auto;
    margin-top:25%;
    border:3px solid #5E5EFF;
}

#icone{
    font-size:5em;
    transform: translate(0%, 25%);
}

button{
    display:block;
    margin:0 auto;
    text-align:center;
	font:14px/19px SF UI Display Bold;
	color:#5E5EFF;
	letter-spacing: 0.56px;
	border:none;
    margin-top:1em;
}

button.active{
    background-color:#5E5EFF;
	border-radius:5px;
	border:none;
	color:#FAFAFA;
}
</style>