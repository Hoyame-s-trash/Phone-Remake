
import stateDev from "../dev/gangManagementStoreData.js";
let stateProd = {
    playerGrade: 0,
    bossGrade:0,
    grades:{},
    members:[],
}


export default {
    namespaced: true,
    state: process.env.NODE_ENV === 'development' ? stateDev: stateProd,
    mutations: {},
    actions: {},
    getters: {}
}