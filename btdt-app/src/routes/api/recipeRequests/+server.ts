import { json, type Actions, type RequestEvent, type RequestHandler } from '@sveltejs/kit';
import { OPENAI_KEY } from '$env/static/private';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

export async function POST(event: RequestEvent) {
    const recipeRequest = await event.request.json();

    const prompt = ChatPromptTemplate.fromMessages([
        ['human', `You are the best barista in the world and you get a request for a coffee. 
        Please provide a recipe using Markdown to make this, but keep in mind that you make it beginner friendly.
        
        REQUEST: 
        {recipeRequest}`]
    ]);
    const model = new ChatOpenAI({
        apiKey: OPENAI_KEY,
        model: 'gpt-3.5-turbo'
    });
    const outputParser = new StringOutputParser();

    const chain = prompt.pipe(model).pipe(outputParser);

    const response = await chain.invoke({
        recipeRequest: recipeRequest
    });
    console.log(response);

    return json({ recipe: response })
}
