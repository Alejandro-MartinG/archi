import { OpenAI } from "openai";

const configuration = { apiKey: process.env.OPENAI_API_KEY };
const client = new OpenAI(configuration);

/**
 * Gen a response using OpenAI API.
 * @param {string} prompt - Initial test.
 * @returns {Promise<string>} - Response gen for the model.
 */
export const askLLM = async (prompt: string): Promise<string> => {
  try {

    const requestBody = {
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4",
    };

    const response: OpenAI.Chat.Completions.ChatCompletion = await client.chat.completions.create(requestBody);

    return response.data.choices[0]?.message?.content?.trim() || "";

  } catch (error) {
    console.error("Error trying to connect with OpenAI API:", error);
    throw new Error("Response not given from the model.");
  }
};
