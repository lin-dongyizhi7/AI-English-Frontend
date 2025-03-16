import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const chat = new ZhipuAI();

const gradeToPrompt = {
    1: "小学一年级英语单词",
    2: "小学二年级英语单词",
    3: "小学三年级英语单词",
    4: "小学四年级英语单词",
    5: "小学五年级英语单词",
    6: "小学六年级英语单词",
    7: "初中一年级英语单词",
    8: "初中二年级英语单词",
    9: "初中三年级英语单词",
    10: "高中一年级英语单词",
    11: "高中二年级英语单词",
    12: "高中三年级英语单词"
};

export const generateVocabularyList = async (grade) => {
    const prompt = `请生成100个${gradeToPrompt[grade]}，以逗号分隔列出，给出其中文含义及对应词性，例如：cat-n.猫,walk-v.走,good-adj.好的`;
    const response = await chat.createCompletions({
        model: 'glm-4',
        messages: [
            { "role": "user", "content": "你好" },
            { "role": "assistant", "content": "我是人工智能助手" },
            { "role": "user", "content": prompt }
        ],
        stream: false,
    });
    console.log(response);
    // const result = response.data.choices[0].content;
    // const wordList = result.split(',');
    // return wordList.map(word => {
    //     const items = word.split('-');
    //     return {
    //         en: items[0],
    //         tip: items[1]
    //     }
    // });
}