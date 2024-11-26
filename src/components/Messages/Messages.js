import React, { useState, useEffect } from 'react';
import './Messages.css';

export default function Message() {
  const [contacts, setContacts] = useState([]); // 연락처 목록
  const [selectedUser, setSelectedUser] = useState(null); // 선택된 사용자
  const [messages, setMessages] = useState([]); // 메시지 목록
  const [newMessage, setNewMessage] = useState(''); // 입력 중인 메시지

  // 더미 연락처 및 메시지 데이터
  useEffect(() => {
    const mockContacts = [
      { id: '1', name: '송민규', profilePic: 'https://via.placeholder.com/40' },
      { id: '2', name: '이창준', profilePic: 'https://via.placeholder.com/40' },
      { id: '3', name: '박지훈', profilePic: 'https://via.placeholder.com/40' },
    ];
    setContacts(mockContacts);
  }, []);

  useEffect(() => {
    if (selectedUser) {
      const mockMessages = [
        { id: '1', sender: 'currentUserId', receiver: selectedUser.id, content: 'Hello!' },
        { id: '2', sender: selectedUser.id, receiver: 'currentUserId', content: 'Hi there!' },
      ];
      setMessages(mockMessages);
    }
  }, [selectedUser]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: `${Date.now()}`,
        sender: 'currentUserId',
        receiver: selectedUser.id,
        content: newMessage,
      };
      setMessages((prevMessages) => [...prevMessages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="message">
      {/* 채팅 창 */}
      <div className="message_chat">
        {selectedUser ? (
          <>
            <div className="chat_header">Chat with {selectedUser.name}</div>
            <div className="chat_messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message_bubble ${
                    msg.sender === 'currentUserId' ? 'outgoing' : 'incoming'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>
            <div className="chat_input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div className="chat_header">Select a contact to start chatting</div>
        )}
      </div>

      {/* 연락처 목록 */}
      <div className="message_contacts">
        <h3>Contacts</h3>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`contact_card ${selectedUser?.id === contact.id ? 'active' : ''}`}
            onClick={() => setSelectedUser(contact)}
          >
            <img src={contact.profilePic} alt={`${contact.name}'s profile`} />
            <span>{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
