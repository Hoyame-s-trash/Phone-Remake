
import stateDev from "../dev/entrepriseStoreData.js";
let stateProd = {
    playerGrade: 0,
    bossGrade:0,
    grades:{},
    employers:[],
    gain:0,
    spent:0,
    money:0,
}


export default {
    namespaced: true,
    state: process.env.NODE_ENV === 'development' ? stateDev: stateProd,
    mutations: {},
    actions: {},
    getters: {}    
}