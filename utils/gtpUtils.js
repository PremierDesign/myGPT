//Import OPenAI API
import OpenAI from "openai-api";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
