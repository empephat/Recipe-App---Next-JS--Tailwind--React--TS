import RecipeCard from "@/components/recipe-card";
import AddRecipeFormWithAI from "@/components/add-recipe-with-ai";

export default function recipes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-12">
          {/* <RecipeCard
            title="Spaghetti Carbonara"
            description="A classic Italian pasta dish with eggs, cheese, and pancetta. This creamy and savory dish is a favorite comfort food."
            image="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYm9uYXJhfGVufDB8fDB8fHww"
            slug="spaghetti-carbonara"
          /> */}
        </div>
        <AddRecipeFormWithAI />
      </main>
    </div>
  );
}
