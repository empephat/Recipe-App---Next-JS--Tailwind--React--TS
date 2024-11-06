export default function AddRecipeForm() {
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center font-logo">
        Add New Recipe
      </h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          ></textarea>
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="cookingTime"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cooking Time (minutes)
            </label>
            <input
              type="number"
              id="cookingTime"
              name="cookingTime"
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="portions"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Portions
            </label>
            <input
              type="number"
              id="portions"
              name="portions"
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
