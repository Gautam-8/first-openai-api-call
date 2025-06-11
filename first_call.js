// Import required packages
import { OpenAI } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function getInput() {
    return new Promise((resolve) => {
        process.stdout.write("Enter your prompt: ");
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}

function showUsage(usage) {
    console.log("\nToken Usage");
    console.log(`Prompt Tokens: ${usage?.prompt_tokens}`);
    console.log(`Completion Tokens: ${usage?.completion_tokens}`);
    console.log(`Total Tokens: ${usage?.total_tokens}`);
}

async function chat() {
    const systemPrompt = "You are a professional assistant with a strong focus on accuracy and clarity.";
    
    try {
        const userInput = await getInput();

        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userInput }
            ]
        });

        const reply = response.choices[0].message.content;
        const usage = response.usage;

        console.log("\nAssistant's Reply:");
        console.log(reply);
        showUsage(usage);

    } catch (error) {
        console.log("\nAn error occurred:");
        console.log(error);
    }
}

chat(); 