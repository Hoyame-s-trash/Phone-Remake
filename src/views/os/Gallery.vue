<template>
    <div>
        <HeaderApp title="Galerie" left="" right="" />

        <div class="app-container">
            <div class="images">
                <img class="img" src="https://jklm.fun/images/icon512.png" />
                <img class="img" src="https://jklm.fun/images/icon512.png" />
                <img class="img" src="https://jklm.fun/images/icon512.png" />
                <img class="img" src="https://jklm.fun/images/icon512.png" />
                <img class="img" src="https://jklm.fun/images/icon512.png" />
                <img class="img" src="https://jklm.fun/images/icon512.png" />
                <img class="img" src="https://jklm.fun/images/icon512.png" />
            </div>
        </div>
            
        <div @click="goHome" class="controlbar"></div>


    </div>
</template>

<script>
import HeaderApp from '../../components/os/HeaderApp'

export default {
    name: 'Gallery',

    components: {
        HeaderApp
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
.controlbar {
    position: relative;
    align-items: center;
    bottom: 50px;
    left: 34%;
    height: 6px;
    width: 100px;
    background-color: #000;
    border-radius: 15px;
    z-index: 4;
    transition-duration: 250ms;
}

.app-container {
    height: 580px;
    margin-left: 21px;
}

.images {
    margin-top: 2px;
    padding-left: 0.5px;
    display: inline-block;
}

.img {
    height: 95px;
    width: 95px;
    margin: 0 2px 0px 2px;
}

.img:hover {
    opacity: 60%;
    cursor: pointer;
}
</style>