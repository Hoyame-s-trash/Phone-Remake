<template>
    <div>
        <HeaderApp title="Notes" left="" right="Nouveau" search="true" />
        
		<div class="app-container">
            <div class="item">
                <div class="title">dJaaja</div>
                <div class="desc">Ya pas moyen djaja</div>
            </div>

            <div class="item">
                <div class="title">Chui</div>
                <div class="desc">pas ta catin djaja genre</div>
            </div>
        </div>
        <div @click="goHome" class="controlbar"></div>

    </div>
</template>

<script>
import HeaderApp from '../../components/os/HeaderApp';

export default {
    name: 'Notes',

    components: {
        HeaderApp
    },

    setup() {
        
    },
}
</script>

<style scoped>
.app-container {
    padding-top: 7.5px;
}

.item {
    margin: 0 auto;
    margin-top: 7.5px;
    height: 32px;
    width: 82%;
    background-color: #fff;
    border-radius: 8px;
    font-family: "SF-Pro-Text-Regular";
    padding: 10px;
    transition-duration: 300ms;
}   

.title {
    font-size: 14px;
}

.desc {
    color: grey;
    font-size: 12px;
}

.item:hover {
    cursor: pointer;
    background-color: rgb(228, 227, 227);
}
</style>