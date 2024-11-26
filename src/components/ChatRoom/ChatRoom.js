import React,{useState} from "react";
import "./ChatRoom.css";

const ChatRoom =()=>{
    const [user,setUser] =useState(
      {
        id:1,
        name:"박지훈"
      }
    )
    const [conversations,setConversations] = useState([
      {
        "id": 0,
        "userId1": {
          "id": 1,
          "name": "박지훈",
          "profile": "https://via.placeholder.com/150"
        },
        "userId2": {
          "id": 2,
          "name": "송민규",
          "profile": "https://via.placeholder.com/150"
        },
        "createdTime": "19:06",
        "message": [
          {
            "id": 0,
            "userId": 2,
            "content": "테스트2",
            "sentTime": "19:06",
            "chatRoomId": 0
          },
          {
            "id": 1,
            "userId": 1,
            "content": "테스트6",
            "sentTime": "19:06",
            "chatRoomId": 0
          }
        ]
      },
      {
        "id": 1,
        "userId1": {
          "id": 1,
          "name": "박지훈",
          "profile": "https://via.placeholder.com/150"
        },
        "userId2": {
          "id": 3,
          "name": "배승환",
          "profile": "https://via.placeholder.com/150"
        },
        "createdTime": "19:06",
        "message": [
          {
            "id": 0,
            "userId": 3,
            "content": "테스트중1",
            "sentTime": "19:06",
            "chatRoomId": 1
          },
          {
            "id": 1,
            "userId": 1,
            "content": "테스트중2",
            "sentTime": "19:06",
            "chatRoomId": 0
          }
        ]
      }
      ]);
    
    const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
      if (newMessage.trim() !== "") {
      }
    };

    return(
      <div className="messages-container">
      {/* 좌측 사이드바 */}
      <div className="chat-sidebar">
        <h2>{selectedConversation.userId2.name}</h2>
        <ul>
          {conversations.map((conversation) => (
            <li
              key={conversation.id}
              className={conversation.id === selectedConversation.id ? "active" : ""}
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="avatar"></div>
              <div className="details">
                <span className="name">{conversation.userId2.name}</span>
                <span className="last-message">{conversation.lastMessage}</span>
              </div>
              <span className="time">{conversation.createdTime}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 우측 메시지 세부 화면 */}
      <div className="chat-window">
        <div className="chat-header">
          <img src={selectedConversation.userId2.profile}/>
          <h3>{selectedConversation.userId2.name}</h3>
        </div>
        <div className="chat-body">
          {selectedConversation.message.map((message) => (
            <div
              key={message.id}
              className={`message ${message.userId === user.id ? "me" : "other"}`}
            >
              <p>{message.content}</p>
              <span className="time">{message.sentTime}</span>
            </div>
          ))}
        </div>

        {/* 메시지 입력창 */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="메시지 입력..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>보내기</button>
        </div>
      </div>
    </div>
    )
}
export default ChatRoom;