import msgpack from "msgpack-lite";

const Server = new (class {
	public connectionStatus: boolean;
	public ws: WebSocket;

	constructor() {
		this.connectionStatus = false;

		this.ws.addEventListener("open", () => {
			this.connection();
		});

		this.ws.addEventListener("message", async (event) => {
			/** @type {*} */
			const data = await msgpack.decode(new Uint8Array(event.data));

			if (!data) return;

			this.message(data);
		});
	}

	connection() {}

	message(data) {}
})();
export default Server;
