import Vue from 'vue'

var dragActive = false;

function directiveExist(directiveList,directiveName){
    const test = directiveList.some((value) =>{
        return value.name == directiveName
    })
    return test;
}


Vue.directive('onDrag',  {
    bind: function(el, binding, vNode) {
      // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
            const compName = vNode.context.name
            let warn = `[Vue-drag:] provided expression '${binding.expression}' is not a function, but has to be`
            if (compName) { warn += `Found in component '${compName}'` }
            
            console.warn(warn)
        }

        var cln = el.cloneNode(true);
        cln.classList.add("dragDiv");

        const dragMove = (e) => {//bouge le clone pendant que le drag est active
            const rect = vNode.context.$root.$el.getBoundingClientRect()
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cln.style.left = String(x - el.offsetWidth/2) + "px";
            cln.style.top = String(y - el.offsetHeight/2) + "px";
        }

        const handlerMove = (e) =>{ //check si on a move après le click (active le drag donc la function bind)
            if(e.buttons !== 1) return false
            el.onDrag = true;
            dragActive = true;
            if(vNode.data.attrs['drag-args'] !== undefined){
                binding.value(e,el,...vNode.data.attrs['drag-args'])
            }
            else{
                binding.value(e,el)
            }
            el.removeEventListener('mousemove',handlerMove)
            window.addEventListener('mousemove',dragMove)// active le drag move
            cln.style.width = String(el.offsetWidth) + "px";
            document.body.appendChild(cln)
        }

        const handler = (e) => {
            if(e.button !== 0){return false;}
            if(el.onDrag == false){
                el.addEventListener('mousemove',handlerMove)
                window.addEventListener('mouseup',el.__mouseUp__)
            }
        }

        //SI onDragStop n'est pas défini (désactive les évent ici)
        if(!directiveExist(vNode.data.directives,"onDragStop") && el.__mouseUp__ == undefined){
            const mouseUpHandler = (e) =>{// mouse up qui désactive les évents
                if(el.onDrag !== false){
                    el.onDrag = false;
                    dragActive = false;
                    window.removeEventListener('mousemove',dragMove)
                }
                el.removeEventListener('mousemove',handlerMove)
                window.removeEventListener('mouseup',mouseUpHandler)
            }
            el.__mouseUp__ = mouseUpHandler
        }

        el.__vueDrag__ = handler
        el.__handlerMove__ = handlerMove
        el.__dragMove__ = dragMove
        el.__clone__ = cln
        el.onDrag = false;
        // add Event Listeners
        el.addEventListener('mousedown', handler)
    },
    
    unbind: function(el, binding) {
        // Remove Event Listeners
        el.removeEventListener('mousedown', el.__vueDrag__)
        el.removeEventListener('mousemove', el.__handlerMove__)
        el.removeEventListener('mousemove', el.__dragMove__)
        el.__vueDrag__ = null
        el.__handlerMove__ = null
        el.__dragMove__ = null
        
    }
});

Vue.directive('onDragStop',  {
    bind: (el, binding, vNode) => {
        if(directiveExist(vNode.data.directives,"onDrag")){
            const mouseUpHandler = (e) =>{// mouse up qui désactive les évents
                if(e.button !== 0){return false;}
                if(el.onDrag !== false){
                    el.onDrag = false;
                    dragActive = false;
                    window.removeEventListener('mousemove',el.__dragMove__)
                    el.__clone__.remove();
                    binding.value(e,el)
                }
                el.removeEventListener('mousemove',el.__handlerMove__)
                window.removeEventListener('mouseup',mouseUpHandler,false)
            }
            el.__mouseUp__ = mouseUpHandler
        }
        else{
            console.warn('you need onDrag element for use onDragStop')
        }
    },

    unbind: function(el, binding) {
        // Remove Event Listeners
        el.removeEventListener('mousedown', el.__vueDrag__)
        el.__vueDrag__ = null
    }
});

Vue.directive('onDragDrop',  {
    bind: (el, binding, vNode) => {
        const mouseUpDrop = (e)=>{
            if(e.button !== 0){return false;}
            if(dragActive == true){
                if(typeof binding.value === 'function'){
                    if(vNode.data.attrs['drop-args'] !== undefined){
                        binding.value(e,el,...vNode.data.attrs['drop-args'])
                    }
                    else{
                        binding.value(e,el)
                    }
                }
                else if(binding.value.cb !== undefined){
                    if(binding.value.args === undefined){
                        binding.value.cb(e,el)
                    }
                    else{
                        binding.value.cb(e,el,...binding.value.args)
                    }
                }
                dragActive = false;
            }
        }
        el.addEventListener("mouseup", mouseUpDrop,false)
        el.__mouseUpDrop__ = mouseUpDrop
    },

    unbind: function(el, binding) {
        // Remove Event Listeners
        el.removeEventListener('mouseup', el.__mouseUpDrop__)
        el.__mouseUpDrop__ = null
  
    }
});

//Vue.directive('onDragOver')