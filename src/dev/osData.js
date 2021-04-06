const defaultMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius rutrum maximus. Nunc at aliquam ex. Suspendisse metus justo, varius ac arcu ac, vulputate egestas est. Sed justo justo, auctor ac elementum sed, lobortis id ipsum. Suspendisse cursus consequat auctor. Curabitur sit amet velit vitae'
const defaultNumber = '06585254'

function getRandomInt (min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}

function generateContact () {
	var i = 0
	var pref = 10
	let contactList = {}
	let name = 'steven'
	while (i < 25) {
		pref++
		var number = defaultNumber + pref
		contactList[number] = {
			name: name + pref
		}
		i++
	}
	return contactList
}

function generateMessage (contactList,localNumber) {
	var i = 0
	var count = 400
	var messList = []
	while (i < 400) {
		let random = getRandomInt(1, 3)
		let mess = {}
		if (random === 1) {
			let randomContact = Object.keys(contactList)[getRandomInt(1, Object.keys(contactList).length)]
			mess.sender = localNumber
			mess.receiver = randomContact
		} else {
			let randomContact = Object.keys(contactList)[getRandomInt(1, Object.keys(contactList).length)]
			mess.sender = randomContact
			mess.receiver = localNumber
		}

		mess.message = defaultMessage + count
		mess.send_date = new Date('2019-09-13T03:24:00')
		messList.push(mess)
		count--
		i++
	}
	return messList
}


const contact = generateContact()
const msgList = generateMessage(contact,'0625140541')

export default {
    contact: contact,
    message: msgList,
    number:'0625140541',
	onconv:0
}