import * as socketio from 'socket.io';
import * as http from 'http';
import Messages from './Messages';

const messages = new Messages()

export const initWsServer = (server: http.Server): void => {
  const io: socketio.Server = new socketio.Server();
  io.attach(server);

  io.on('connection', (socket: socketio.Socket) => {
    console.log('Nueva conexión');
    socket.on('new-message', async (data) => {
      const res = await messages.addMessage(data)
      console.log("respouesta", res)
      const allMessages = await messages.getMessages()
      io.emit('messages', allMessages);
    });

  });
};
