class SocketService {
    ws_connection_url: string;
    sockets_bay_api_key: string;
    connection_ready: boolean;
    connection_error: boolean;
    websocket: WebSocket;

    constructor() {
        this.sockets_bay_api_key = import.meta.env
            .VITE_SOCKET_APP_API_KEY as string;
        this.ws_connection_url = `wss://socketsbay.com/wss/v2/100/${this.sockets_bay_api_key}/`;
        this.websocket = new WebSocket(this.ws_connection_url);
        this.connection_ready = false;
        this.connection_error = false;
    }

    onOpen(callback: () => void) {
        this.websocket.onopen = () => {
            this.connection_ready = true;
            callback();
        };
    }

    onClose(callback: () => void) {
        this.websocket.onclose = () => {
            this.connection_ready = false;
            callback();
        };
    }

    onMessage(callback: (message: string) => void) {
        this.websocket.onmessage = event => {
            callback(event.data);
        };
    }

    send(message: string) {
        this.websocket.send(message);
    }

    close() {
        this.websocket.close();
    }
}

export default new SocketService();
