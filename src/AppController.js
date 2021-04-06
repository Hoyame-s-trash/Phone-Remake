import Vue from 'vue'
import Router from './router/index.js'
import store from './store/index.js'
import tabletteComponent from './components/tabletteComponent.vue'
import phoneComponent from './components/phoneComponent.vue'

/* Liste des apps */
import Os from './app/Os.vue'


/* Fin liste des apps */
const AppList = {
    "os": Os,
}
//tablette App
const screenApp = ["gangManagement","caisse","weaponsModding","os", "entreprise"]

//lazy load for store
const storeList = {
    'gangManagement': () => import('./store/gangManagementStore.js'),
    'charactercreator': () => import('./store/charactercreator.js'),
    'os': () => import('./store/os.js'),
    'entreprise': () => import('./store/entrepriseStore.js')
}

export default class AppController {
    app = {};
    params = {};
    screenView = null;
    screenApp;
    screenElement;

    async loadApp(appName,params){
        this.params[appName] = params;
        await this.loadStore(appName);
        let componentView = Vue.component('router-vue',{store,render: h => h(Router[appName]['Home'])})
        let alreadyExist = document.querySelector('div#' + appName);
        if(alreadyExist !== null){
            alreadyExist.remove();
            this.app[appName].$destroy()
        }

        let div = document.createElement("DIV");
        div.id = appName
        document.body.appendChild(div);
        
        this.app[appName] = new Vue({
            store,
            data() {
                return {
                    dynamicComponent: componentView
                }
            },
            render: h => h(AppList[appName]),
        }).$mount('#' + appName)
    }

    async loadOnScreen(appName,params,templateName){
        this.params[appName] = params;
        await this.loadStore(appName);
        let componentView = Vue.component('router-vue',{store,render: h => h(Router[appName]['Home'])})
        let componentApp = Vue.component('router-screen',{store,render: h => h(AppList[appName])})
        const name = "screenView"
        var screenComponent

        if(templateName == "tablette"){
            screenComponent = tabletteComponent
        }else if(templateName == "phone"){
            screenComponent = phoneComponent
        }

        //create screenApp view if not open
        if(this.screenView === null){
            let div = document.createElement("DIV");
            div.id = name;
            document.body.appendChild(div);
        }
        else{ //just change app if screenApp already open
            this.screenView.$destroy()
            this.unloadStore(this.screenApp)
            await this.loadStore(appName);
            this.screenView.$root.screenApp = componentApp;
            this.screenView.$root.dynamicComponent = componentView;
            
        }

        this.screenView = new Vue({
            store,
            data() {
                return {
                    screenApp: componentApp,
                    dynamicComponent: componentView
                }
            },
            render: h => h(screenComponent),
        }).$mount('#' + name)
        this.screenApp = appName;
        
    }

    async loadStore(appName){
        if(storeList[appName] !== undefined){
            let module = await storeList[appName]();
            store.registerModule(appName,module.default,{ preserveState: false });
        }
    }

    setStore(appName,object){
        for(const [k,v] of Object.entries(object)){
            store.state[appName][k] = v
        }
    }

    unloadStore(appName){
        if(storeList[appName] !== undefined){
            store.unregisterModule(appName);
        }
    }

    changePage(appName,pageName,params = {}){
        if(Router[appName] !== undefined && Router[appName][pageName] !== undefined){
            this.params[appName] = params;
            let component = Vue.component('router-vue', {store, render: h => h(Router[appName][pageName])})
            if(!screenApp.includes(appName)){
                this.app[appName].$root.dynamicComponent = component;
            }
            else{
                if(this.screenView !== null){
                    this.screenView.$root.dynamicComponent = component;
                }
            }
        }
    }

    destroyApp(appName){
        if(this.app[appName] !== undefined){
            this.app[appName].$destroy()
            delete this.app[appName]
            document.querySelector("#" + appName).remove();
        }
        else{
            if(this.screenView !== null){
                this.screenView.$destroy();
                this.screenView = null;
                this.screenApp = null;
                document.querySelector("#screenView").remove();
            }
        }
        delete this.params[appName];
        this.unloadStore(appName);
        if('alt' in window) {
            alt.emit("appDestroy",appName)
        }
    }

    triggerKey(key){
        for(let [k,v] of Object.entries(this.app)){
            if (typeof v.$children[0].$children[0].$children[0].onKeyDown !== 'undefined'){
                v.$children[0].$children[0].$children[0].onKeyDown(key)
            }
        }
    }
/*
    registerKeyDown(appName){
        if(this.app[appName] !== undefined){

        }
    }

    registerKeyUp(appName){
        if(this.app[appName] !== undefined){

        }
    }
*/
}