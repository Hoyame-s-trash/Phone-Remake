# uiview

## Project setup

### Compiles and hot-reloads for development (not work on network)
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### create new App
###### 1) créer un template dans le dossier app en assignant l'id avec le nom de l'app
```HTML
<template>
	<div id="speedometer" class="body-simul">
		<router-vue :is="this.$root.dynamicComponent" />
	</div>
</template>

<script>
export default {
    name: 'speedo'
}
</script>
```

###### 2) créer une vue dans views (séparer dans des dossier avec le nom de l'app pour pas que sa soit le bordel ^^)
```javascript
<template>
    <div>
        <!--toujours travailler dans la div ne peut pas avoir d'autre div externe sinon erreur de compil-->
    </div>
  
</template>

<script>

export default {
	name: 'speedoDefault',
	//logic de code vue.js ici voir doc vue.js (components) si vous ne savez pas comment sa marche
}
</script>
```
###### 3) ajouter l'app dans AppController.js (const AppList)
```javascript
//exemple
import App from './app/App.vue'
import App2 from './app/App2.vue'
import SpeedometerApp from './app/Speedometer.vue'
const AppList = {"app": App,"app2": App2,"speedometer": SpeedometerApp}
```

###### 4) Ajouter les routes dans router/index.js (page par defaut = Home)
```javascript
//exemple
import Speedometer from '../views/speedometer/Home.vue'
let speedometerRoutes = {
	'Home': Speedometer
}
let router = {
	'speedometer': speedometerRoutes
}
```

### Charger l'app
```javascript
//dans un script client du jeu
import {viewUI} from '../index.js';
viewUI.emit('loadApp','speedometer',JSON.stringify({ok:1}));//params en JSON text parser quand recu
//dans le navigateur
window.controller.loadApp(appName,JSON.stringify(params));
```
##### recupération des params dans une vue
```javascript
console.log(this.$controller.params["speedometer"]) // récupére les dernier param assigner a speedometer
```

### Event system
###### ne pas utiliser de alt.on dans les composant cela trigger l'action quand il es défini pour palier a ce probleme une classe EventManager existe
```javascript
//definir un Event dans une vue
this.$eventManager.defineEvent('speedometer:updateSpeed',this.updateSpeed)
```

###### apeller un event
```javascript
//dans le jeu
import {viewUI} from '../index.js';
viewUI.emit('callEvent','speedometer:updateSpeed',...args)); //params en JSON text parser quand recu
//dans le navigateur
window.eventManager.callEvent(eventName,...args)
```

##### destroyApp et ChangePage
```Javascript
    viewUI.emit('changeAppView','speedometer' :appName,"Test" :PageName); // change page
    viewUI.emit('destroyApp','speedometer' :appName); // destroy Page
```

### Utiliser la tablette
la procédure es similaire a la création d'une app normal il faut juste le rajouter dans appController.js dans la const tabletteApp
```javascript
//déclarer lapp dans tabletteApp
const tabletteApp = ["entreprise"]
```