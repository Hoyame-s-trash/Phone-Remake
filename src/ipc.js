import eventManager from "./EventManager.js"

class IPC{
    callBackResponse = {}
    counter = 0

    constructor(){
        this.callBackResponse = {}
        if('alt' in window) {
            alt.on("receiveCallBack",(funcRef,...args) => this.response(funcRef,...args))
            eventManager.defineEvent("cefReceiveCallBack",(funcRef,...args) => this.response(funcRef,...args))
            //alt.on("cefReceiveCallBack",(funcRef,...args) => this.response(funcRef,...args))
        }
    }

    send(eventName, cb, ...args){ // for the game
        let functionRef = this.counter
        alt.emit(eventName, functionRef, ...args)
        this.callBackResponse[functionRef] = cb
        this.counter++
    }

    sendAsync(eventName, ...args){
        return new Promise((resolve,reject) =>{
            this.send(eventName,(...values) =>{
                if (values.length > 1){
                    resolve(values)
                }else{
                    resolve(...values)
                }
            }, ...args)
        })
    }

    sendServer(eventName, cb, ...args){ // for the server
        let functionRef = this.counter
        eventManager.callGameEvent2({type:"server", name: eventName}, functionRef, ...args)
        this.callBackResponse[functionRef] = cb
        this.counter++
    }

    sendServerAsync(eventName,...args){
        return new Promise((resolve,reject) =>{
            let functionRef = this.counter
            eventManager.callGameEvent2({type:"server", name: eventName}, functionRef, ...args)
            this.callBackResponse[functionRef] = resolve
            Object.defineProperty(this.callBackResponse[functionRef], 'name', {
                writable: true,
                value: 'resolve'
            });
            this.counter++
        })
    }

    response(funcRef,...args){
        if(typeof this.callBackResponse[funcRef] !== undefined){
            if(this.callBackResponse[funcRef].name == "resolve"){
                if(args.length > 1){
                    this.callBackResponse[funcRef](args)
                }else{
                    this.callBackResponse[funcRef](...args)
                }
            }else{
                this.callBackResponse[funcRef](...args)
            }
           
            delete this.callBackResponse[funcRef]
        }
    }
}
const ipc = new IPC()

export default ipc
