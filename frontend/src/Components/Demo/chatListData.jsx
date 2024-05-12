const chatListData = [
  {
    id: 1,
    user: {
      id: 1,
      name: "John",
      avatar: "https://example.com/avatar1.png",
    },
    message: "Hey there!",
    timestamp: new Date("2024-05-11T09:30:00"),
    isMine: false,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Alice",
      avatar: "https://example.com/avatar2.png",
    },
    message: "Hi John!",
    timestamp: new Date("2024-05-11T09:31:00"),
    isMine: false,
  },
  {
    id: 3,
    user: {
      id: 1,
      name: "John",
      avatar: "https://example.com/avatar1.png",
    },
    message: "How are you?",
    timestamp: new Date("2024-05-11T09:32:00"),
    isMine: false,
  },
  {
    id: 4,
    user: {
      id: "currentUserId",
      name: "Mohsin",
      avatar: "https://example.com/avatar_me.png",
    },
    message: "I'm good, thanks!",
    timestamp: new Date("2024-05-11T09:33:00"),
    isMine: true,
  },
  // Add more messages as needed
];

export default chatListData;
