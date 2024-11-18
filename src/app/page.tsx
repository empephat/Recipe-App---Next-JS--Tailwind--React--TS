"use client";
import RecipeCard from "@/components/recipe-card";
import SearchBox from "@/components/search";

function SearchSection() {
  return (
    <div className="bg-green-50 py-8">
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          Gastronomic experiences, learn to cook and discover new recipes
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8">
          For 20 years, we have been dedicated to providing our customers with
          the best gastronomic experiences.
        </p>
        <SearchBox />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SearchSection />
      <main className="container mx-auto px-4 py-8">
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">
            Most viewed recipes right now
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-12">
          <RecipeCard
            title="Spaghetti Carbonara"
            description="A classic Italian pasta dish with eggs, cheese, and pancetta. This creamy and savory dish is a favorite comfort food."
            image="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYm9uYXJhfGVufDB8fDB8fHww"
            slug="spaghetti-carbonara"
          />
          <RecipeCard
            title="Chicken Tikka Masala"
            description="A flavorful Indian curry dish with tender chicken in a creamy tomato sauce. Aromatic spices make this dish irresistible."
            image="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlra2ElMjBtYXNhbGF8ZW58MHx8MHx8fDA%3D"
            slug="chicken-tikka-masala"
          />
          <RecipeCard
            title="Avocado Toast"
            description="A simple and nutritious breakfast with mashed avocado on toasted bread. Top it with eggs, tomatoes, or feta for extra flavor."
            image="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww"
            slug="avocado-toast"
          />
          <RecipeCard
            title="Berry Smoothie Bowl"
            description="A refreshing and healthy smoothie bowl topped with fresh fruits and granola. Perfect for a nutritious start to your day."
            image="https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21vb3RoaWUlMjBib3dsfGVufDB8fDB8fHww"
            slug="berry-smoothie-bowl"
          />
        </div>
      </main>
    </div>
  );
}
