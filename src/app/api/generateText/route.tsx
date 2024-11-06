import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { RecipeSchema } from "@/schema/recipeSchema";

const modelName = "gpt-4o-2024-08-06";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = await streamObject({
      model: openai(modelName, { structuredOutputs: true }),
      schema: RecipeSchema,
      prompt: `Recipe for ${prompt || "gluten-free almond milk smoothie"}`,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error in POST function:", error);

    // Return an error response
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
