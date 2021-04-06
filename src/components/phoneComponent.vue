<template>
        <div ref="screenView" id="screenView" class="body-simul phone" >
            <img class="phone-img" src="../assets/coque.png" />
            <router-screen :is="this.$root.screenApp" />
        </div>
</template>
<script>
import { mapState } from 'vuex'


export default {
    name:'phoneTemplate',
    components: {

	},
    data(){
        return {
            contentWidth:window.innerWidth * (this.width / 100),
            contentHeight:0
        }
    },
    watch:{

    }
}
</script>

<style scoped>

</style>