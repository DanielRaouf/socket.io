import React, { useEffect, useState } from 'react';
import { connect, Socket } from 'socket.io-client';


export type Config = {
    endpoint: string;
    token?: string;
};

const useSocket = ({
    event,
    config,
}: { event: string, config: Config }): { data: any, socket: SocketIOClient.Socket } => {
    const [data, setData] = useState<any>();
    const [socketInstance, setScoket] = useState<SocketIOClient.Socket>();
    useEffect(() => {
        const socket = connect(`${config.endpoint}?token=${config.token}`, {
            transports: ['websocket']
        });
        socket.on(event, (data) => {
            setData(data && data != 'undefined' || event);
        })
        setScoket(socket);
        return () => socket.off(event);
    }, []);

    return { data, socket: socketInstance };
};

export default useSocket;
