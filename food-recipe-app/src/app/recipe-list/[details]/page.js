import RecipeDetailsItem from "@/components/recipe-details/page";

async function fetchRecipeDetails(recipeId){

    try{
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
        const data = await apiResponse.json();
        return data;
    }catch(error){
        throw new Error(error)
    }
}

export default async function Details({params}){

    const recipeDetails = await fetchRecipeDetails(params?.details);


    return <RecipeDetailsItem recipeDetails={recipeDetails}/>
}