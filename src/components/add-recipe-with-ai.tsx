"use client";

import { useState } from "react";
import { Loading } from "./loading";
import { z } from "zod";
import { experimental_useObject as useObject } from "ai/react";
import { Input } from "@/components/input";
import { RecipeSchema } from "../schema/recipeSchema";
import { RecipeCardWithAI } from "./recipe-card-with-ai";

export default function AddRecipeFormWithAI() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);
  const { object, submit, isLoading } = useObject({
    schema: RecipeSchema,
    api: "/api/generateText",
    initialValue: {
      name: "",
      ingredients: [],
      steps: [],
    },
  });

  const handleSubmit = async () => {
    setIsImageLoading(true);
    setImageUrl(""); // Clear previous image
    const newImageUrl = await fetchImage(prompt);
    if (newImageUrl) {
      setImageUrl(newImageUrl);
    }
    submit({ prompt }); // Generate text
    setPrompt("");
  };

  const fetchImage = async (prompt: any) => {
    setIsImageLoading(true);
    try {
      const response = await fetch("/api/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await response.json();
      return data.imageUrl;
    } catch (error) {
      console.error("Error generating image:", error);
      return null;
    } finally {
      setIsImageLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center font-logo">
        Add New Recipe With AI
      </h2>
      <div className="flex flex-col gap-4 ">
        <Input
          value={prompt}
          disabled={isLoading}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder="What do you want to eat today?"
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Generate Recipe
        </button>
        {(isLoading || isImageLoading) && <Loading />}
        <RecipeCardWithAI
          image={imageUrl}
          recipe={object as z.infer<typeof RecipeSchema>}
        />
      </div>
    </div>
  );
}
