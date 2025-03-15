import axios from "axios";

export const generateVocabulary = async (topic: string) => {
  try {
    const response = await axios.post("/generate_vocabulary", { topic });
    return response.data;
  } catch (error) {
    console.error("Error generating vocabulary:", error);
    throw error;
  }
};
