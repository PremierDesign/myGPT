import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import KeyboardAvoidaingViewContainter from "../components/KeyboardAvoidingViewContainter";
import { useCallback, useEffect, useState } from "react";
import { makeChatRequest } from "../utils/gtpUtils";
import {
  addUserMessage,
  getConversation,
  initConversation,
} from "../utils/conversationHistoryUtil";
import Bubble from "../components/Bubble";
// import { FlatList } from "react-native-web";

export default function ChatScreen() {
  const [messageText, setMessageText] = useState("");
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    initConversation();
    setConversation([]);
  }, []);

  const sendMessage = useCallback(async () => {
    if (messageText === "") return;

    try {
      addUserMessage(messageText);
      setMessageText("");
      setConversation([...getConversation()]);
      await makeChatRequest();
    } catch (error) {
      console.log(error);
    } finally {
      setConversation([...getConversation()]);
    }
  }, [messageText]);

  return (
    <KeyboardAvoidaingViewContainter>
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <FlatList
            style={styles.flatList}
            data={conversation}
            renderItem={(itemData) => {
              const convoItem = itemData.item;
              const { role, content } = convoItem;
              if (role === "system") return null;

              return <Bubble text={convoItem.content} type={convoItem.role} />;
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            styles={styles.textbox}
            placeholder="Type a message..."
            onChangeText={(text) => setMessageText(text)}
            value={messageText}
          />

          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Feather name="send" size={18} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidaingViewContainter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBg,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  textbox: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  flatList: {
    marginHorizontal: 15,
  },
});
