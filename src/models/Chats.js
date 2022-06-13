export default class Chat {
	constructor(data) {
		this.id = data.id
		this.user = data.user.name
		this.message = data.message.content
		this.date = new Date(data.message.createdAt)
	}
}