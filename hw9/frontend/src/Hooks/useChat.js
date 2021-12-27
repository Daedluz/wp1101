// import { useState } from "react";

// const client = new WebSocket('ws://localhost:5000', 'echo-protocol');

// const sendData = async (data, client)=> {
//     await client.send(JSON.stringify(data));
// }

// const useChat = () => 
// {
//     const [messages, setMessages] = useState([]);
//     const [status, setStatus] = useState({});
//     const sendMessage = (payload) => { sendData(["input", payload], client); }

//     client.onmessage = (byteString) => 
//     {
//         const { data } = byteString;
//         const [task, payload] = JSON.parse(data);
//         switch(task) 
//         {
//             case "output":
//             {
//                 setMessages(() => [...messages, ...payload]);
//                 break;
//             }
//             case "status" :
//             {
//                 setStatus(payload);
//                 break;
//             }
//             case "init" :
//             {
//                 setMessages(() => payload);
//                 break;
//             }
//             case "cleared" :
//             {
//                 setMessages([]);
//                 break;
//             }
//             default : break;
//         }
//     }
//     const clearMessages = () => 
//     {
//         sendData(["clear"]);
//     };

//     return {
//         status,
//         messages,
//         sendMessage,
//         clearMessages
//     }
// }

// export default useChat;