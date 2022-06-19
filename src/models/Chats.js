import Message from "./Messages"

export default class Chat {
	constructor(data) {
		this.id = data.id
		this.user = data.user.name
		this.image = data.user.image
		this.count = data.count
		this.message = data.message !== null ? new Message(data.message) : Message.Empty()
	}
}