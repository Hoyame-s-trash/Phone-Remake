//not work for the moment use alt.on in vue (problem due to fn passed in argument this execute fn when alt.on) see bind for try to resolve

class EventManager{
    eventList = {}

    defineEvent(event,fn){
        this.eventList[event] = fn
    }

    callEvent(event,...args){
        if(typeof this.eventList[event] == "undefined") return
        this.eventList[event](...args)
    }

    removeEvent(event){
        delete this.eventList[event]
    }

    callGameEvent(url,arg){
        var http = new XMLHttpRequest();
        http.open('POST', url, true);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        http.onload = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                console.log(http.responseText);
            }
        }
        http.send(arg);
    }

    callGameEvent2(event,...args){
        if('alt' in window !== true) return
        alt.emit("webview:callEvent",event, ...args)
    }

    callServerEvent(event,...arg){
        
    }

    focus(){
        if('alt' in window !== true) return
        alt.emit("focus")
    }

    unfocus(){
        if('alt' in window !== true) return
        alt.emit("unfocus")
    }

    stopGameAction(state){
        if('alt' in window !== true) return
        alt.emit("tempStopAction",state)
    }
}

let exportedInstance = new EventManager()
export default exportedInstance