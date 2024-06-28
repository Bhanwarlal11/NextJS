import Link from "next/link";

export default function RecipeDetailsItem({ recipeDetails }) {
  console.log(recipeDetails);
  return (
    <div className="mx-4">
      <Link href={"/recipe-list"}>
        <button className="bg-gray-500 p-4">go to recipe List page</button>
      </Link>
      <h1 className="text-xl font-extrabold my-10">
        recipe name: {recipeDetails?.name}
      </h1>
      <div className="flex w-2/3 gap-20 ">
        <div>
          <img
          className="w-full"
            src={recipeDetails?.image}
            alt={recipeDetails.name}
          />
        </div>
        <div>
          <h1><b>cuisine: </b>{recipeDetails?.cuisine}</h1>
          <h1><b>ingredients: </b></h1>
          <ul className="list-disc">
            {recipeDetails?.ingredients.length > 0
              ? recipeDetails?.ingredients.map((item) => (
                  <li className="list-disc">{item}</li>
                ))
              : null}
          </ul>
          <p><b>mealType: </b>{recipeDetails?.mealType}</p>
        </div>
      </div>
    </div>
  );
}
