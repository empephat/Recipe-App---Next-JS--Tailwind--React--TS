import Image from "next/image";

const InspirationalSection = () => {
  return (
    <div className="flex flex-col items-center h-screen p-6 bg-gray-50">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to Your Culinary Journey!
        </h2>
        <p className="mb-4">
          In a world filled with flavors, textures, and aromas, cooking is not
          just a necessity—it's an adventure waiting to unfold. Here, we invite
          you to explore the magic of the kitchen, where each recipe tells a
          story and every ingredient brings its unique charm.
        </p>
        <p className="mb-4">
          Cooking is more than just combining ingredients; it's a way to express
          love, creativity, and culture. Whether you’re a seasoned chef or a
          curious beginner, our collection of recipes is designed to inspire and
          empower you. Each dish is a canvas, inviting you to experiment and
          make it your own.
        </p>
        <p className="mb-4">
          Embrace the joy of cooking as a form of self-care. Take time to
          unwind, breathe, and immerse yourself in the rhythm of chopping,
          stirring, and tasting. Let the kitchen become your sanctuary, a place
          where you can escape the hustle of daily life and find solace in the
          simple act of creating something delicious.
        </p>
        <p className="mb-8">
          Welcome to a world of inspiration, creativity, and endless delicious
          possibilities!
        </p>
      </div>
      <div className="flex md:w-1/2 mt-6 md:mt-0 justify-center">
        <Image
          src="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYm9uYXJhfGVufDB8fDB8fHww"
          alt="Cooking Inspiration"
          width={500}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default InspirationalSection;
