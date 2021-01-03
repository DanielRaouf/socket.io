"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const socket_io_client_1 = require("socket.io-client");
const useSocket = ({ event, config, }) => {
    const [data, setData] = react_1.useState();
    const [socketInstance, setScoket] = react_1.useState();
    react_1.useEffect(() => {
        const socket = socket_io_client_1.connect(`${config.endpoint}?token=${config.token}`, {
            transports: ['websocket']
        });
        socket.on(event, (data) => {
            setData(data && data != 'undefined' || event);
        });
        setScoket(socket);
        return () => socket.off(event);
    }, []);
    return { data, socket: socketInstance };
};
exports.default = useSocket;
