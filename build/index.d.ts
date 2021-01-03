import { Socket } from 'socket.io-client';
export declare type Config = {
    endpoint: string;
    token?: string;
};
declare const useSocket: ({ event, config, }: {
    event: string;
    config: Config;
}) => {
    data: any;
    socket: SocketIOClient.Socket;
};
export default useSocket;
