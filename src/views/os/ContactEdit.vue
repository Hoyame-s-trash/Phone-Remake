<template>
    <div id="container" ref="container">
        <div id="icone-bg">
            <i id="icone" class="fas fa-user"></i>
        </div>
        <h3>Nom</h3>
        <input v-model="nameModel" :class="{active: btnIndex == 0}" ref="nameInput" id="name" type="text" autocomplete="off" />
        <h3>Numéro</h3>
        <input v-model="numberModel" :class="{active: btnIndex == 1}" ref="numberInput" id="number" type="text" autocomplete="off" />
        <button :class="{active: btnIndex == 2}" id="save">Appeler</button>
        <button :class="{active: btnIndex == 3}" id="save">Nouveau message</button>
        <button :class="{active: btnIndex == 4}" id="save">Enrengistrer</button>
    </div>
</template>

<script>
export default {
    name:"ContactEdit",
    data(){
        
    },
}
</script>

<style scoped>

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

</style>