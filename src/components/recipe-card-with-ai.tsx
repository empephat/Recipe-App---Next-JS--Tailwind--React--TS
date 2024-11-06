import { RecipeSchema } from "@/schema/recipeSchema";
import { z } from "zod";
import Markdown from "react-markdown";

interface RecipeCardWithAIProps {
  image?: string;
  recipe?: z.infer<typeof RecipeSchema>;
}

export function RecipeCardWithAI({ image, recipe }: RecipeCardWithAIProps) {
  if (!recipe) return null;

  return (
    <div className="w-full max-w-2xl mx-auto ">
      {image && (
        <div className="w-full h-64 overflow-hidden">
          <img
            src={image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div>
        <div className="text-2xl font-bold">{recipe.name}</div>
      </div>
      <div className="grid gap-6">
        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc list-inside space-y-1">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.ingredient}>
                  {ingredient.quantity} {ingredient.ingredient}
                </li>
              ))}
            </ul>
          </div>
        )}
        {recipe.steps && recipe.steps.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Instructions</h3>
            <ol className="list-inside space-y-2">
              {recipe.steps.map((step) => (
                <li key={step}>
                  <Markdown>{step}</Markdown>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
