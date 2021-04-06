<template>
    <div class="app-icon"> 
        <img class="app-icon-image-n" :src="require('../../assets/icons/' + img)" />
        <p class="app-icon-text">{{title}}</p>
    </div>
</template>

<script>
export default {
    name: 'AppIcon',
    props: ['title', 'img'],

    setup() {
        
    },
}
</script>

<style>
.app-icon {
	display: block;
    position: relative;
    width: 49px;
	margin: 0 8px 8px 8px;
    text-align: center;
    color: white;
    text-decoration: none;
}

.app-icon:hover {
    opacity: 60%;
    cursor: pointer;
}

.app-icon-image {
	height: 49px;
	width: 49px;
	margin: 0 8px;
	transition-duration: 200ms;
}

.app-icon-image-n {
	height: 49px;
	width: 49px;
	transition-duration: 200ms;
}

.app-icon-text {
	font-size: 11px;
    color: rgba(240, 240, 240, 0.8);
	margin-top: 2px;
    padding-bottom: 6px;
	font-family: "SF-Pro-Display-Semibold";
}

.app-icon-image:hover {
	opacity: 60%;
    cursor: pointer;
}

</style>