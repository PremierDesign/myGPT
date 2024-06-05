import OpenAI from "openai";
import { OPENAI_API } from "@env";
import {
  addAssistantMessage,
  getConversation,
} from "./conversationHistoryUtil";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const openai = new OpenAI({
  apiKey: OPENAI_API,
});

export const makeChatRequest = async () => {
  try {
    const response = await openai.chat.completions.create({
      //make a request to the OpenAI API
      model: "gpt-3.5-turbo-16k",
      messages: getConversation(),
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (response.choices) {
      let responseText = response.choices[0].message.content;
      responseText = responseText.replace(/(\r\n|\n|\r)/gm, " ");
      addAssistantMessage(responseText);
      console.log(getConversation());
      return;
    }
    throw new Error("No response is in unsuporrted format");
  } catch (error) {
    console.error("Error making chat request:", error);
  }
};
