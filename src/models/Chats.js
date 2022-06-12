export default class Chat {
	constructor(data) {
		this.id = data.id
		this.user = data.fromUserId.name
		this.lastMessage = data.lastMessage || 'Esto es un mensaje de prueba'
		this.date = data.date || '2020-01-01'
	}
}