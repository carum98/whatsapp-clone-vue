export default class Message {
	constructor(data) {
		this.id = data.id
		this.content = data.content
		this.isMine = data.isMine
		this.date = new Date(data.createdAt)
	}
}