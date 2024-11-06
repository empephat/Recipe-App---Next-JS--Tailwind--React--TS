import { z } from "zod";

export const RecipeSchema = z.object({
  name: z.string().describe("Name of the recipe"),
  ingredients: z
    .array(
      z.object({
        quantity: z
          .string()
          .describe("Quantity of the ingredients using metric system"),
        ingredient: z.string().describe("Name of the ingredient"),
      })
    )
    .describe("A full list of the ingredients"),
  steps: z
    .array(z.string().describe("Describe a step-by-step guide for the recipe"))
    .describe("Steps of the recipe"),
});
