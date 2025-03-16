import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const chat = new ZhipuAI();

const gradeToPrompt = {
    1: "小学一年级",
    2: "小学二年级",
    3: "小学三年级",
    4: "小学四年级",
    5: "小学五年级",
    6: "小学六年级",
    7: "初中一年级",
    8: "初中二年级",
    9: "初中三年级",
    10: "高中一年级",
    11: "高中二年级",
    12: "高中三年级"
};

export const generateMCQ = async (grade, topic='') => {
    const prompt = `请生成一道${topic}${gradeToPrompt[grade]}英语选择题，包含4个选项和正确答案，格式为：问题：[问题内容]\n选项A：[选项A内容]\n选项B：[选项B内容]\n选项C：[选项C内容]\n选项D：[选项D内容]\n答案：[A/B/C/D]`;
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
    // const parts = result.split('\n');
    // const question = parts[0].split(': ')[1];
    // const options = {
    //     'A': parts[1].split(': ')[1],
    //     'B': parts[2].split(': ')[1],
    //     'C': parts[3].split(': ')[1],
    //     'D': parts[4].split(': ')[1]
    // };
    // const answer = parts[5].split(': ')[1];
    // return {
    //     question,
    //     options,
    //     answer
    // };
}