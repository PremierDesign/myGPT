import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import KeyboardAvoidaingViewContainter from "../components/KeyboardAvoidaingViewContainter";
import { useCallback, useState } from "react";

export default function ChatScreen() {
  const [messageText, setMessageText] = useState("");

  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);

  return (
    <KeyboardAvoidaingViewContainter>
      <View style={styles.container}>
        <View style={styles.messageContainer}></View>

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
    hieght: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  textbox: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
  },
});
