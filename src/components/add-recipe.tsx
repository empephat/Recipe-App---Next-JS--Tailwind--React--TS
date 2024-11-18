"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AddRecipeForm() {
  return (
    <Card className="max-w-xl mx-auto bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-emerald-800 text-center font-logo">
          Add New Recipe
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-emerald-700 text-lg">
              Title
            </Label>
            <Input
              type="text"
              id="title"
              name="title"
              className=" border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ingredients" className="text-emerald-700 text-lg">
              Ingredients
            </Label>
            <Textarea
              id="ingredients"
              name="ingredients"
              rows={4}
              className="border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instructions" className="text-emerald-700 text-lg">
              Instructions
            </Label>
            <Textarea
              id="instructions"
              name="instructions"
              rows={6}
              className="border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cookingTime" className="text-emerald-700 text-lg">
                Cooking Time (minutes)
              </Label>
              <Input
                type="number"
                id="cookingTime"
                name="cookingTime"
                min="1"
                className="border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="portions" className="text-emerald-700 text-lg">
                Portions
              </Label>
              <Input
                type="number"
                id="portions"
                name="portions"
                min="1"
                className="border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full text-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200"
          >
            Add Recipe
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
