import MetaHead from "@/components/MetaHead";
import Head from "next/head";
import Link from "next/link";

export default function Handle404Page() {
  return (
    <section className="mt-10">
      <MetaHead
        pageTitle={"404 Not Found  Page"}
        headDescription={"Ini Halaman 404 Not Found Page"}
        title={"How to Become an SEO Expert (8 Steps)"}
        description={"Get from SEO newbie to SEO pro in 8 simple steps."}
        image={
          "https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
        }
        url={process.env.NEXT_PUBLIC_LOCAL_SERVER}
      />
      <h1 className="text-lg text-red-600 font-bold">Page Not Found</h1>
      <p className="text-sm text-gray-600 opacity-75 mt-2">
        The page you are looking for does not exist.
      </p>

      <div className="my-5">
        <h3 className="font-semibold">Destination : </h3>
        <ul>
          <li className="text-sm text-blue-600 font-semibold">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="text-sm text-blue-600 font-semibold">
            <Link href="/menu/makanan">Foods</Link>
          </li>
          <li className="text-sm text-blue-600 font-semibold">
            <Link href="/menu/detail/2">Detail Menu</Link>
          </li>
          <li className="text-sm text-blue-600 font-semibold">
            <Link href="/menu/detail/makanan/12">Detail of Food</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
