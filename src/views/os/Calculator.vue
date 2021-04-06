<template>
    <div>
        <div class="app-container-dark">
            <StatusBar dark="true" />
                            
            <div id="keypad-page">
                <h1 class="calculator-result" style="font-size: 65px;">0</h1>
                
                <div class="btn-container">
                    <div class="btn-circle btn-light">AC</div>
                    <div class="btn-circle btn-light">+/-</div>
                    <div class="btn-circle btn-light">%</div>
                    <div class="btn-circle btn-orange">÷</div>
                    <div class="btn-circle btn-dark">7</div>
                    <div class="btn-circle btn-dark">8</div>
                    <div class="btn-circle btn-dark">9</div>
                    <div class="btn-circle btn-orange">×</div>
                    <div class="btn-circle btn-dark">4</div>
                    <div class="btn-circle btn-dark">5</div>
                    <div class="btn-circle btn-dark">6</div>
                    <div class="btn-circle btn-orange">-</div>
                    <div class="btn-circle btn-dark">1</div>
                    <div class="btn-circle btn-dark">2</div>
                    <div class="btn-circle btn-dark">3</div>
                    <div class="btn-circle btn-orange">+</div>
                    <div class="btn-circle btn-lg">0</div>
                    <div class="btn-circle btn-dark">,</div>
                    <div class="btn-circle btn-orange">=</div>
                </div>
            </div>
        </div>

        <div @click="goHome" class="controlbar-dark"></div>
    </div>
</template>

<script>
import HeaderApp from '../../components/os/HeaderApp'
import StatusBar from '../../components/statusBar'

export default {
    name: 'Calculator',

    components: {
        StatusBar
    },

    methods: {
       goHome() {
            this.$controller.loadOnScreen("os", {}, 'phone');
        }
    },

    setup() {
        
    },
}
</script>

<style scoped>
    .app-container-dark {
        padding: 0px 20px;
        margin: 20px;
        height: 641px;
        width: 260px;
        background-color: #000;
        border-radius: 30px;
        overflow:hidden;
        user-select: none;
    }

    #keypad-page {
        margin-top: 20px;
        height: 82%;
        width: 100%;
        font-family: "SF-Pro-Text-Regular";

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .calculator-result {
        margin: 0 5px 10px 0;
        text-align: end;
        color: white;
        font-weight: normal;
    }
       
    .btn-circle {
        height: 55px;
        width: 55px;
        border-radius: 55px;
        line-height: 55px;
        text-align: center;
        margin: 5px;
        font-size: 26px;
        color: white;
    }

    .btn-circle:hover {
        opacity: 60%;
        cursor: pointer;
    }

    .btn-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .btn-light {
        background-color: #a5a5a5;
        color: black;    
    }

    .btn-orange {
        background-color: #f2a23c;
    }

    .btn-white {
        background-color: white;
        color: #f2a23c;
    }

    .btn-dark {
        background-color: #333333;   
    }

    .btn-lg {
        width: 100px;
        text-align: start;
        padding-left: 18px;
        background-color: #333333;   
    }
</style>