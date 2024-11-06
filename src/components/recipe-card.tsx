import Image from "next/image";
import Link from "next/link";

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  slug?: string;
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export default function RecipeCard({
  title,
  description,
  image,
  slug,
}: RecipeCardProps) {
  // Use provided slug or generate from title
  const recipeSlug = slug || createSlug(title);

  return (
    <Link
      href={`/recipes/${recipeSlug}`}
      className="block w-full max-w-[400px]"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-[300px] object-cover"
        />
        <div className="p-4">
          <h2 className="font-logo text-2xl text-black mb-2 hover:text-green-600 transition-colors">
            {title}
          </h2>
          <p className="font-nav text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
