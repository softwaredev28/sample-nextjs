import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const {
    query: { id },
  } = useRouter();
  const [data, setData] = useState();
  // Fetch product data on server-side so it can be preloaded and displayed

  const fetchDetailProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    setData(product);
  };

  useEffect(() => {
    fetchDetailProduct(id);
  }, [id])

  if (!data) return "Loading...";
  console.log(data);
  console.log(`id product : ${id}`);
  return (
    <section>
      <h1 className="text-center text-2xl font-bold">Product Detail</h1>
      <div className="p-7">
        <div className="flex gap-5 justify-center my-3 items-center flex-col">
          <img src={data.image} alt={data.title} className="w-1/5" />
          <h2 className="font-semibold w-1/2 text-center">{data.title}</h2>
        </div>
        <p className="text-green-500 font-bold">$. {data.price}</p>
        <p className="text-sm opacity-75">{data.description}</p>
      </div>
    </section>
  );
}
