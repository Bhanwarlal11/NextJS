import { fetchListOfProducts } from "@/actions";


async function ServerActionExamples() {

    const products = await fetchListOfProducts();
    console.log(products)

  return (
    <div>
      <h1>examples : server Action</h1>

      <ul>
        {
            products && products.length>0 
            ? products.map((item,index)=>(
                <li key={index}>{item.title}</li>
            ))
            : <h2>No product fetch</h2>
        }
      </ul>
    </div>
  );
}

export default ServerActionExamples;
