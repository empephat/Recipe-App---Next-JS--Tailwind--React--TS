import { OpenAI } from "openai";

const openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { prompt } = await req.json();

  try {
    // Generate image
    const result = await openaiClient.images.generate({
      model: "dall-e-3",
      prompt: `Recipe for ${prompt || "gluten-free almond milk smoothie"}`,
      n: 1,
      size: "1024x1024",
      quality: "hd",
    });

    const imageUrl = result.data[0].url;

    // Return the image URL in the response
    return new Response(JSON.stringify({ imageUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle any errors that occur during image generation
    console.error("Error generating image:", error);
    return new Response(JSON.stringify({ error: "Failed to generate image" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
