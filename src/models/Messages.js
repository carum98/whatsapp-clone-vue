export default class Message {
	constructor(data) {
		this.id = data.id
		this.content = data.content
		this.isMine = data.isMine
		this.date = data.createdAt ? new Date(data.createdAt) : null
		this.isRead = data.isRead
	}

	static Empty() {
		return new Message({
			id: null,
			content: "No hay mensajes",
			isMine: false,
			createdAt: null,
			isRead: false,
		})
	}
}