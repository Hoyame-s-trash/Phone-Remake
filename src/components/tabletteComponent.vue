<template>
        <div ref="screenView" id="screenView" class="body-simul tablette" :class="{rotate:turned}" :style="viewStyle">
            <img class="tablette-img" src="../assets/img/tablette.png" />
            <div class="tablette-content" :style="contentStyle">
                <router-screen :is="this.$root.screenApp" />
            </div>
        </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'tabletteTemplate',
    data(){
        return {
            contentWidth:window.innerWidth * (this.width / 100),
            contentHeight:0
        }
    },
    computed:{ 
        ...mapState('tablette',[
            'width',
            'height',
            'turned'
        ]),
        viewStyle(){
            let ret = {
                width: `${this.width}%`,
                height: `${this.height}%`,
            }
            if(this.turned === true){
                ret.top = `${window.innerWidth * (this.width / 100) + 5}px`
                ret.right = `5px`
            }
            //this.contentWidth = window.innerWidth * (this.width / 100);
            return ret;
        },
        contentStyle(){
            if(this.turned === true){
                return {
                    transform: 'rotate(-90deg)',
                    height: `${this.contentWidth * (this.height / 100) + 5}px`,
                    left:'0px'
                }
            }
            return {}
        }
    },
    watch:{

    }
}
</script>