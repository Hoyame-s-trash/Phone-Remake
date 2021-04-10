<template>
    <div>
        <HeaderApp title="Contacts" left="" right="Enregistrer" />
        
        <div class="app-container">

            <div class="icon">
                D
			</div>

            <div class="icons">

                <div id="call-btn" class="keypad-btn">
                    <div id="call-icon">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.382 92.48" class="injected-svg" data-src="/56b6b7a7ca3bbe3cd1566370c4f593f3.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path d="M36.621-12.842c14.4,14.453,31.934,25.586,46.24,25.586a21.312,21.312,0,0,0,16.5-7.227c2.637-2.93,4.248-6.3,4.248-9.668a8.152,8.152,0,0,0-3.515-6.885L85.107-21.68c-2.393-1.66-4.346-2.441-6.1-2.441-2.295,0-4.346,1.269-6.592,3.516L68.9-17.09a2.828,2.828,0,0,1-1.9.781,4.04,4.04,0,0,1-2-.586c-3.076-1.66-8.35-6.152-13.232-11.035S42.334-38.037,40.723-41.162a4.187,4.187,0,0,1-.537-2,2.735,2.735,0,0,1,.732-1.855l3.516-3.564c2.2-2.295,3.516-4.3,3.516-6.592,0-1.807-.781-3.76-2.441-6.1l-10.6-14.844a8.37,8.37,0,0,0-7.129-3.613,13.794,13.794,0,0,0-9.521,4.248,21.952,21.952,0,0,0-7.031,16.6C11.231-44.58,22.217-27.246,36.621-12.842Z" transform="translate(-11.231 79.736)"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div id="call-btn" class="keypad-btn">
                    <div id="call-icon">
                        <div>
                            <Ddd />
                        </div>
                    </div>
                </div>
            </div>

            <div class="inputs">
                <input placeholder="Nom" v-model="nameModel" :class="{active: btnIndex == 0}" ref="nameInput" id="name" type="text" autocomplete="off" />
                <input placeholder="Numero de telephone" v-model="numberModel" :class="{active: btnIndex == 1}" ref="numberInput" id="number" type="text" autocomplete="off" />
            </div>
        </div>
		<div @click="goHome" class="controlbar"></div>

    </div>  
</template>

<script>
/*
    <button :class="{active: btnIndex == 2}" id="save">Appeler</button>
    <button :class="{active: btnIndex == 3}" id="save">Nouveau message</button>
    <button :class="{active: btnIndex == 4}" id="save">Enrengistrer</button>
*/
import HeaderApp from '../../components/os/HeaderApp';
import Ddd from '../../assets/icons/comment-solid.svg';


export default {
    name:"ContactEdit",

    components: {
        HeaderApp,
        Ddd
    },

    methods: {
        goHome() {
            this.$controller.loadOnScreen("os", {}, 'phone');
        }
    },

    data(){
        return {
            nameModel: "",
            numberModel: ""
        }
    },
}
</script>

<style scoped>
.app-container {
    height: 580px;
}

.icons {
    margin-left: calc(295px / 2 - 42px);
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    color: #fff;
    font-size: 35px;
    font-family: "SF-Pro-Text-Regular";
    background: linear-gradient(#a6abb7, #858992);
    margin: 20px auto;
}

#container{
    text-align:center;
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

.inputs {
    margin-top: 15px;
}

  #call-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0e85ca;
    fill: white;
    color: white;
    height: 32.5px;
    width: 32.5px;
    border-radius: 40px;
    margin: 0 5px;
  }

    #call-btn:hover {
        opacity: 70%;
        cursor: pointer;
    }

  #call-icon {
    width: 15px;
    margin-top: 4px;
  }

input {
    height: 30px;
    width: 295px;
    border: none;
    outline: none;
    padding-left: 10px;
    border-bottom: 1px solid rgb(206, 206, 206);
    font-family: "SF-Pro-Text-Regular";
    font-size: 13px;

}

</style>