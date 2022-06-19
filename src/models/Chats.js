export default class Chat {
	constructor(data) {
		this.id = data.id
		this.user = data.user.name
		this.message = data.message?.content || "Sin mensaje"
		this.date = data.message ? new Date(data.message.createdAt) : new Date()
	}
}