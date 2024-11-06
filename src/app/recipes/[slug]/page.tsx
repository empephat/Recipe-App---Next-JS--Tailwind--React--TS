"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { Star, Minus, Plus, Clock, Users } from "lucide-react";

// This would typically come from a database or API
const recipes = [
  {
    slug: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    description:
      "A classic Italian pasta dish with eggs, cheese, and pancetta. This creamy and savory dish is a favorite comfort food.",
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYm9uYXJhfGVufDB8fDB8fHww",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { amount: 400, unit: "g", name: "spaghetti" },
      { amount: 200, unit: "g", name: "pancetta" },
      { amount: 4, unit: "", name: "large eggs" },
      { amount: 100, unit: "g", name: "Pecorino cheese" },
      { amount: 100, unit: "g", name: "Parmesan" },
      { amount: 1, unit: "to taste", name: "Freshly ground black pepper" },
    ],
    instructions: [
      "Cook spaghetti in a large pot of boiling salted water.",
      "In a large skillet, cook pancetta over medium heat until crispy.",
      "In a bowl, whisk together eggs, Pecorino, and Parmesan.",
      "Drain pasta, reserving 1 cup of pasta water.",
      "Add pasta to the skillet with pancetta, then remove from heat.",
      "Quickly stir in the egg and cheese mixture, adding pasta water as needed for a creamy sauce.",
      "Season generously with black pepper and serve immediately.",
    ],
    rating: 4.5,
    reviews: 1337,
  },
];

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = recipes.find((r) => r.slug === params.slug);
  const [servings, setServings] = useState(recipe?.servings || 4);

  if (!recipe) {
    notFound();
  }

  const adjustedIngredients = recipe.ingredients.map((ing) => ({
    ...ing,
    amount: (ing.amount * servings) / recipe.servings,
  }));

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < Math.floor(recipe.rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-gray-600">{recipe.reviews} reviews</span>
      </div>
      <p className="text-gray-600 mb-6">{recipe.description}</p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />

          <div className="mt-6 p-4 bg-green-100 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{recipe.prepTime + recipe.cookTime} minutes</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>{servings} servings</span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Adjust servings:</span>
              <div className="flex items-center">
                <button
                  onClick={() => setServings(Math.max(1, servings - 1))}
                  className="p-1 bg-gray-200 rounded-full"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="mx-2 font-bold">{servings}</span>
                <button
                  onClick={() => setServings(servings + 1)}
                  className="p-1 bg-gray-200 rounded-full"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <ul className="space-y-2">
              {adjustedIngredients.map((ingredient, index) => (
                <li key={index}>
                  <span className="font-bold">
                    {ingredient.amount} {ingredient.unit}
                  </span>{" "}
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="pl-2">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-8 h-8 text-gray-300 hover:text-yellow-400 cursor-pointer"
            />
          ))}
        </div>
        <textarea
          className="w-full p-2 border rounded-md"
          rows={4}
          placeholder="Write your review here..."
        ></textarea>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Submit Review
        </button>
      </div>
    </div>
  );
}
