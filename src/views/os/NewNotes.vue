<template>
    <div>
        <HeaderApp title="Nouvelle note" left="" right="Créer" />
        
		<div class="app-container">
            <textarea class="c1">Titre</textarea>

            <textarea class="c2">Contenu</textarea>

        </div>
        <div @click="goHome" class="controlbar"></div>

    </div>
</template>

<script>
import HeaderApp from '../../components/os/HeaderApp';

export default {
    name: 'NewNotes',

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
.app-container {
    height: 575px;
    padding-top: 7.5px;
    background: #fff;
}

.controlbar {
    bottom: 50px;
}

textarea {
    font-family: "SF-Pro-Text-Light";
	resize: none;
    padding: 0 10px;
    width: 243px;
	margin-left: 15px;
    border: none;
	outline: none;
}

.c1 {
    height: 30px;
	font-size: 15px;
    width: 243px;
    margin-top: 5px;
    border-bottom: 1px solid #dddddd;
}

.c2 {
    height: 400px;
	font-size: 14px;
    width: 243px;
}
</style>