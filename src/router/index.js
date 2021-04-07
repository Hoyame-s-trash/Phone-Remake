import osHome from '../views/os/Home.vue'
import MessageList from '../views/os/MessageList.vue'
import Conversation from '../views/os/Conversation.vue'
import ContactList from '../views/os/ContactList.vue'
import NewContact from '../views/os/NewContact.vue'
import ContactEdit from '../views/os/ContactEdit.vue'
import NewConv from '../views/os/NewConv.vue'
import callList from '../views/os/CallList.vue'
import Settings from '../views/os/Settings.vue'
import Calculator from '../views/os/Calculator.vue'
import Gallery from '../views/os/Gallery.vue'
import Notes from '../views/os/Notes.vue'


const osRouter = {
	"Home": osHome,
	"MessageList": MessageList,
	"Conversation": Conversation,
	"ContactList": ContactList,
	"NewContact": NewContact,
	"ContactEdit": ContactEdit,
	"NewConv": NewConv,
	"Settings": Settings,
	"Calculator": Calculator,
	"Gallery": Gallery,
	"Notes": Notes,
	"CallList":callList
}
/* Fin de la liste des routeurs */
const router = {
	'os': osRouter,
}

export default router
