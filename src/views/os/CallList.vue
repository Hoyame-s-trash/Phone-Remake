<template>
	<div>
		<HeaderApp title="Apples" left="Retour" right=""  />
        <div class="app-container">
            <li v-for="(info, number, index) in contact" :key="index + special.length" :data-number="number" class="cont">
                <div class="contact-icon">
                    <Call class="icon" />
                </div>
                <div class="contact-c">
                    <div class="contact-name">{{info.name}}</div>
                    <div class="contact-desc">Portable</div>

                </div>
            </li>
        
        </div>
		<div @click="goHome" class="controlbar"></div>
	</div>
</template>

<script>
/*
    <div id="layer">
        <h2>Appel</h2>
        <ul ref="liste" :class="{blur: inChoice == true}">
            <li v-for="(special,index) in special" :key="index" :class="{active: btnIndex == index}">
                <div class="contact-icon"> <i :class="special.class"></i> </div>
                <div class="contact-name">{{special.name}}</div>
            </li>
            <li v-for="(info, number, index) in contact" :key="index + special.length" :data-number="number" :class="{active: btnIndex == index + special.length}">
                <div class="contact-icon"> <i class="icon-call-answer"></i> </div>
                <div class="contact-name">{{info.name}}</div>
            </li>
        </ul>

        <div id="choice" v-if="inChoice == true">
            <button v-for="(choice,index) in special[btnIndex].reason" :key="index" :class="{active: choiceIndex == index}">{{choice.name}}</button>
        </div>
    </div>
*/
import HeaderApp from '../../components/os/HeaderApp'
import Call from '../../assets/icons/phone-alt-solid.svg'
import { mapState } from 'vuex'
export default {
	name: 'CallList',
    components: {
        Call,
        HeaderApp
    },

    computed: mapState('os',[
        'contact'
    ]),

    methods: {
        goHome() {
            this.$controller.loadOnScreen("os", {}, 'phone');
        }
    },

    data: () =>{
        return {
            btnIndex:0,
            choiceIndex:0,
            inChoice: false,
            special:[
                {
                    name:"police",
                    class:"icon2-police-badge",
                    event:{name:"police:onCall", type:"server"},
                    reason:[
                        {id:1,name:"Vol"},
                        {id:2,name:"Agression"}
                    ]
                },
                {
                    name:"secour",
                    class:"icon2-healthcare",
                    event:{name:"ems:onCall", type:"server"},
                    reason:[
                        {id:1,name:"Urgence"},
                    ]
                },
            ],
        }
    }
  
}
</script>

<style scoped>

.app-container {
    margin: 0 20px 20px 20px;
	height: 575px;
	width: 297.5px;
    background-color: #f2f2f7;
	overflow-y:scroll;
    user-select: none;
}

.controlbar {
    position: relative;
    align-items: center;
    bottom: 40px;
    left: 34%;
    height: 6px;
    width: 100px;
    background-color: #000;
    border-radius: 15px;
    z-index: 4;
    transition-duration: 250ms;
}

.cont {
    display: flex;
    flex-direction: row;
    height: 40px;
    padding-left: 17px;
    align-items: center;
    border-bottom: 1px solid rgb(204, 204, 204);
}

.cont:hover {
    background-color: rgb(223, 223, 223);

}

.contact-c {
    margin-left: 15px;
}

.contact-name {
    font-family: "SF-Pro-Text-Regular";
    font-weight: 500;
    font-size: 13px;
}

.contact-desc {
    font-family: "SF-Pro-Text-Light";
    font-size: 11px;
    
    width: 250px;

}

.icon {
    height: 12px;
    color: rgb(163, 163, 163);
}

</style>
