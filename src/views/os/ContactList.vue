<template>
    <div>
        <HeaderApp title="Contacts" left="Groups" right="Nouveau" search="true" />
        <div class="app-container">

    
            <div class="myContact">
                <div class="icon">
                    ?
                </div>

                <div class="text">
                    <div>Moi</div>
                    <div>{{number}}</div>
                </div>
            </div>

            
            <li v-for="(info, numberPhone, index) in contact" :key="index" :data-number="numberPhone" class="contact-props">
                <div class="contact-name">{{info.name}}</div>
            </li>
        </div>

        <div @click="goHome" class="controlbar"></div>
    </div>
</template>

<script>
/*
        <ul ref="liste">


        </ul>


*/
import StatusBar from '@/components/statusBar'
import { mapState } from 'vuex'
import HeaderApp from '../../components/os/HeaderApp'

export default {
    name:'ContactList',
    computed: mapState('os',[
        'contact',
        'number'
    ]),

    components: {
        HeaderApp,
    },

    methods: {
        goHome() {
            this.$controller.loadOnScreen("os", {}, 'phone');
        }
    },

    data(){
        return{
            btnIndex:0,
        }
    }
}
</script>

<style>
.app-container {
    margin: 0 20px 20px 20px;
	height: 580px;
	width: 297.5px;
    background-color: #f2f2f7;
	overflow:hidden;
    user-select: none;
}

.statusbar {
    margin: 31.5px 17px 0 17px;
}

.controlbar {
    position: relative;
    align-items: center;
    bottom: 80px;
    left: 34%;
    height: 6px;
    width: 100px;
    background-color: #000;
    border-radius: 15px;
    z-index: 4;
    transition-duration: 250ms;
}

.controlbar:hover {
    cursor: pointer;
    opacity: 50%;
}

.controlbar-dark {
    position: relative;
    align-items: center;
    bottom: 40px;
    left: 34%;
    height: 6px;
    width: 100px;
    background-color: #fff;
    border-radius: 15px;
    z-index: 4;
    transition-duration: 250ms;
}

.controlbar-dark:hover {
    cursor: pointer;
    opacity: 50%;
}

.app-s {
    padding: 0 35px;
}
</style>

<style scoped>


.myContact {
    display: flex;
    margin-top: 25px;
    margin-bottom: 25px;
    height: 60px;
    align-items: center;
    font-family: "SF-Pro-Text-Regular";
    padding-left: 15px;
    background-color: #fff;
    border-top: 0.5px solid #dddddd;  
    border-bottom: 0.5px solid #dddddd;  
}

.contact-props {
    display: flex;
    align-items: center;
    font-family: "SF-Pro-Text-Regular";
    font-size: 12px;
    height: 31px;
    border-bottom: 0.5px solid #dddddd; 
    background-color: #fff;
    padding-left: 15px;
    transition-duration: 200ms;
}

.contact-props:hover {
    cursor: pointer;
    background-color: #ebe9e9;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 45px;
    width: 45px;
    border-radius: 50%;
    color: #fff;
    font-family: "SF-Pro-Text-Regular";
    margin-right: 10px;

    background: linear-gradient(#a6abb7, #858992);

}

.text {
    font-size: 12px;
    font-weight: 500;
    font-family: "SF-Pro-Text-Medium";
}


</style>