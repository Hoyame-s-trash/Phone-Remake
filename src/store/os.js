
import stateDev from "../dev/osData.js";
let stateProd = {
    contact: {},
    message: [],
    number:'0625140541',
    conversation:{},
    onconv:0
}


export default {
    namespaced: true,
    state: process.env.NODE_ENV === 'development' ? stateDev: stateProd,
    mutations: {},
    actions: {},
    getters: {
        conversation: state => {
            var localNumber = state.number
            var conversationList = []
            var i = 0
            const message = state.message
            console.log(message)
            while (i < message.length) {
                var number = message[i].receiver === localNumber ? String(message[i].sender) : String(message[i].receiver)
                var type = message[i].receiver === localNumber ? 'sender' : 'receiver'
                var name = state.contact[number] !== undefined ? state.contact[number].name : String(number)

                var find = false
                for(const v of conversationList){
                    if(v.number == number){
                        v.messages.push({message: message[i].message, time: message[i].send_date, type: type})
                        find = true
                    }
                }

                if(find == false){
                    const conv = {}
                    conv.number = number
                    conv.name = name
                    conv.messages = []
                    conv.messages.push({message: message[i].message, time: message[i].send_date, type: type})
                    conversationList.push(conv)
                }
                i++
            }
            //console.log(JSON.stringify(conversationList))
            return conversationList
        }
    }
}