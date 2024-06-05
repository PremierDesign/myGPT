let conversation = [];

export const getConversation = () => {
  return conversation;
};

export const initConversation = () => {
  addSystemMessage("Your name is Jeff");
};

export const addUserMessage = (messageText) => {
  conversation.push({
    role: "user",
    content: messageText,
  });
};

export const addAssistantMessage = (messageText) => {
  conversation.push({
    role: "assistant",
    content: messageText,
  });
};

export const addSystemMessage = (messageText) => {
  conversation.push({
    role: "system",
    content: messageText,
  });
};
