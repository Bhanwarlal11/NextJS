import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <Link href={"/"}><button className="p-2 bg-gray-200">Go home</button></Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img src={recipe.image} alt={recipe.name} />
                      </div>
                      <div className="p-6">
                        <h3>{recipe.name}</h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                          <p>Rating: {recipe.rating}</p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600 font-bold">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
