<template>
    <div id="choice">
        <h1>Admin Menu</h1>
        <section id="player">
            <div id="player-list">
                <ul>
                    <li v-for="(v,k) in playersList" :key="k" :class="{active: playerActive == k}" @click="setPlayerActive(k)">[{{v.id}}] {{v.name}}</li>
                </ul>
                <div id="player-action">
                    <input type="text" placeholder="raison" v-model="reason" />
                    <button @click="kick">kick</button>
                    <button @click="ban">bannir</button>
                    <button @click="ban">permaBan</button>
                    <button @click="teleport">teleport</button>
                    <button @click="bring">bring</button>
                    <button @click="bring">warn</button>
                    <div id="setjob">
                        <select style="display:inline-block;" v-model="jobModel">
                            <template v-for="(v,k) in entreprises">
                                <option v-for="(v2,k2) in v.grades" :key="k2" v-bind:value="{etrId:k,grade:k2}">{{v.name}} {{v2.label}}</option>
                            </template>
                        </select>
                    </div>
                    <button @click="setJob">setJob</button>
                    <div>
                        <input style="display:inline-block;vertical-align:middle" type="checkbox" id="aroundply" name="aroundply" v-model="playerArround">
                        <label for="aroundply">joueurs autour</label>
                    </div>
                    <div>
                        <input style="display:inline-block;vertical-align:middle" type="checkbox" id="showName" name="showName" v-model="showPlayerName">
                        <label for="showName">voir les noms</label>
                    </div>
                </div>
            </div>
        </section>

        <h2>Report</h2>
        <section id="report">
            <p v-if="reports.length == 0">il n'y a aucun report</p>
            <div v-if="reports.length !== 0">
                <ul>
                    <li v-for="(v,k) in reports" :class="{active: reportActive == k}" :key="k" @click="selectReport(k)">
                        {{ v.reason }}
                        <span style="font-weight:800; color:green;">{{ v.take == true ? '(pris)' : '' }}</span> 
                    </li>
                </ul>
                <button @click="takeReport">prendre</button>
                <button @click="reportTp">teleport</button>
                <button @click="reportBring">bring</button>
                <button @click="endReport">finir</button>
            </div>
        </section>

        <h2>Action</h2>
        <section id="action">
            <div>
                <input type="checkbox" id="noclip" name="scales" @click="noclip">
                <label for="noclip">noclip</label>
            </div>
            <div id="spawn">
                <input v-model="vehicleModel" type="text" placeholder="vehicule" />
                <button @click="spawnVehicle">spawn</button>
            </div>

            <div id="itemGive">
                <select style="display:inline-block;" v-model="itemGive">
                    <option v-for="(v,k) in $itemsList" v-bind:key="k" :value="k">{{v.label}}</option>
                </select>
                <input style="display:inline-block; width:2em;" v-model="itemQty" type="number" placeholder="vehicule" />
                <button style="display:inline-block;" @click="giveItem">give</button>
            </div>

            <div id="moneyGive">
                <input v-model="moneyGive" type="number" placeholder="montant" />
                <button @click="giveMoney">money</button>
            </div>
        </section>
    </div>
</template>


<script>
export default {
	name: 'entrepriseConfigHome',
    data(){
        return{
            playersList: [
                {id:1, name:"dictateurfou"},
                {id:2, name:"dictateurfou2"}
            ],
            reason:"",
            playerActive:0,
            vehicleModel:"",
            itemGive:1,
            itemQty:1,
            moneyGive:0,
            reports:[],
            reportActive:0,
            entreprises:{},
            jobModel:{etrId:1,grade:1},
            playerArround:false,
            refreshPlayerInterval:null,
            showPlayerName:false
        }
    },
    methods: {
        changePage(name){
            this.$controller.changePage("entrepriseConfig", name, {})
        },
        noclip(){
            this.$eventManager.callGameEvent2({type:"server", name:"admin:toogleNoclip"})
        },
        kick(){
            this.$eventManager.callGameEvent2({type:"server", name:"admin:kick"},this.reason,this.playersList[this.playerActive].id)
        },
        ban(){
            this.$eventManager.callGameEvent2({type:"server", name:"admin:ban"},this.reason,this.playersList[this.playerActive].id)
        },
        teleport(){
            this.$eventManager.callGameEvent2({type:"server", name:"admin:teleportToPlayer"},this.playersList[this.playerActive].id)
        },
        bring(){
            this.$eventManager.callGameEvent2({type:"server", name:"admin:bring"},this.playersList[this.playerActive].id)
        },
        spawnVehicle(){
            this.$eventManager.callGameEvent2({type:"server", name:"admin:spawnVehicle"},this.vehicleModel)
        },
        setPlayerActive(index){
            this.playerActive = index
        },
        giveItem(){
            this.$eventManager.callGameEvent2({type:"server", name:"admin:giveItem"},this.itemGive,this.itemQty)
        },
        giveMoney(){
            this.$eventManager.callGameEvent2({type:"server", name:"admin:giveMoney"},this.moneyGive)
        },
        reportUpdate(reports){
            console.log("passe")
            this.reports = reports
        },
        selectReport(index){
            this.reportActive = index
        },
        setJob(){
            const etrId = this.jobModel.etrId
            const gradeId = this.jobModel.grade
            this.$eventManager.callGameEvent2({type:"server", name:"admin:setJob"},this.playersList[this.playerActive].id, etrId, gradeId)
        },
        takeReport(){
            const id = this.reportActive
            if(this.reports[this.reportActive] !== undefined){
                const reportId = this.reports[this.reportActive].id
                console.log(reportId)
                this.$eventManager.callGameEvent2({type:"server", name:"admin:takeReport"},reportId)
            }
        },
        endReport(){
            if(this.reports[this.reportActive] == undefined) return
            const reportId = this.reports[this.reportActive].id
            this.$eventManager.callGameEvent2({type:"server", name:"admin:endReport"},reportId)
        },
        reportTp(){
            if(this.reports[this.reportActive] == undefined) return
            const sender = this.reports[this.reportActive].sender
            this.$eventManager.callGameEvent2({type:"server", name:"admin:teleportToPlayer"},sender)
        },
        reportBring(){
            if(this.reports[this.reportActive] == undefined) return
            const sender = this.reports[this.reportActive].sender
            this.$eventManager.callGameEvent2({type:"server", name:"admin:bring"},sender)
        }

    },
    async beforeMount(){
        const players = await this.$ipc.sendAsync("admin:getAllPlayer")
        const report = await this.$ipc.sendServerAsync("admin:getReport")
        const entreprises = await this.$ipc.sendServerAsync("entreprise:getEtrList")
        this.refreshPlayerInterval = setInterval(async ()=>{
            if(this.playerArround == true){
                this.playersList = await this.$ipc.sendAsync("admin:getPlayerArround")
            }else{
                this.playersList = await this.$ipc.sendAsync("admin:getAllPlayer")
            }
        },500)
        this.$eventManager.defineEvent('admin:reportUpdate',this.reportUpdate);
        this.reports = report
        this.playersList = players
        this.entreprises = entreprises
    },
    beforeDestroy(){
        this.$eventManager.removeEvent("admin:reportUpdate")
        clearInterval(this.refreshPlayerInterval)
    },
    watch:{
        playersList(value){
            if(value[this.playerActive] == undefined){
                this.playerActive = value.length - 1
            }
        },
        reports(value){
            if(value[this.reportActive] == undefined){
                this.reportActive = value.length - 1
            }
        },
        showPlayerName(value){
            if(value == true){
                this.$eventManager.callGameEvent2({type:"client", name:"admin:showName"},true)
            }else{
                this.$eventManager.callGameEvent2({type:"client", name:"admin:showName"},false)
            }
        }
    }
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

ul{
    list-style-type:none;
    padding:0em;
}

#action{
    background:none;
}

section{
    font-family: Montserrat;
    background-color:#2d383c;
    border:1px solid #0784b5;
    width:80%;
    margin:0 auto;
    color:#39ace7;
    text-align:center;
    border-radius:5px;
    background-color:grey;
    margin-top:1em;
}


#player-action input{
    margin:0 auto;
    display:block;
}

#player-action button{
    display:inline-block;
}

#player-list li{
    padding:0.3em 0em;
    border-bottom:1px solid black;
}

#player-list li.active{
    background-color:#fff;
}


#choice{
    text-align:center;
    color:#39ace7;
    font-family: Montserrat;
    background-color:#2d383c;
    width:90%;
    
    margin:0 auto;
    border-radius:10px;
    border:1px solid #0784b5;
    padding:0.5em;
}
#choice h1{
    -webkit-text-stroke:0.2px #000;
}
button{
    margin:0 auto;
    display:block;
    border:0.5px solid #fff;
    font-family: Montserrat;
    font-weight:600;
    background-color:#414c50;
    color:#39ace7;
    font-size:1.1em;
    border-radius:5px;
    text-transform:uppercase;
    margin-bottom:0.3em;
    margin-top:0.3em;
}

button:hover{
    background-color:#39ace7;
    color:#fff;
}

#action input{
    vertical-align:middle;
}

#action button{
    vertical-align:middle;
    display:inline-block;
    font-size:0.8em;
    margin-left:0.4em;
    font-weight:500;
}


#report ul{
    overflow:scroll;
    max-height:9.5em;
}

#report li.active{
    background-color:#fff;
}

#report button{
    display:inline-block;
}
</style>



