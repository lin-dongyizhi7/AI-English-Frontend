import axios from "axios";

export const generateVocabularyList = async (grade: string) => {
  try {
    const response = await axios.post("http://127.0.0.1:8080/generate_vocabulary", { grade });
    if (response.data.vocabulary_list.message!=='Success') return [];
    const data = response.data.vocabulary_list.choices[0].message.content;
    console.log(data)
    const wordList = data.split('\n').map((line: string)=>{
      const word_info = line.split('---')
      return {
        word: word_info[0],
        meaning: word_info[1]
      }
    })
    return wordList;
  } catch (error) {
    console.error("Error generating vocabulary:", error);
    throw error;
  }
};
