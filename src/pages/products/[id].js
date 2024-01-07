export default function ProductDetail({ data }) {
  console.log(data);
  return (
    <section className="flex justify-center items-center flex-col gap-8">
      <h1 className=" text-2xl font-bold">Product Detail</h1>
      <div className="p-7 w-1/3 hover:border-2 hover:border-gray-300 rounded-xl transition-all ease-in-out duration-100">
        <div className="flex gap-5 justify-center my-3 items-center flex-col">
          <img src={data.image} alt={data.title} className="w-1/3" />
          <h2 className="font-semibold w-1/2 text-center">{data.title}</h2>
        </div>
        <p className="text-green-400 font-bold">$. {data.price}</p>
        <p className="text-sm opacity-75 text-justify">{data.description}</p>
        <button className="rounded-xl w-full p-3 font-semibold hover:bg-green-500 bg-green-400  mt-5 text-white transition-all ease-in-out duration-100">Add to Cart</button>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { id },
  } = context;
  console.log(context);
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return {
    props: { data },
  };
}
