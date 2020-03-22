import io from "socket.io-client";

class SocketService {
  socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  constructor() {
    this.socket = io("https://tutty-fruti-api.herokuapp.com",{
      transports: ["websocket","polling"]
    });
    
  }
  
  
   send() {
    
    this.socket.emit("message", { nombre: localStorage.getItem("name") });
  }

   recieve(cb){
      this.socket.on('new user', (d)=>{
          

        cb(d);
      })
  }
}

export const socket = new SocketService();
