import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//tablette
const tabletteModule = {
    state:{
        width:20,
        height:20,
        turned:false
    },
    mutations:{},
    actions:{},
    getters:{},
    namespaced:true,
}

const screenModule = {
    state:{
        battery:50
    },
    mutations:{},
    actions:{},
    getters:{},
    namespaced:true,    
}

//declare module with register module in app for more perf when app isn't load
export default new Vuex.Store({
    modules:{
        tablette: tabletteModule,
        screen: screenModule
    }
})
