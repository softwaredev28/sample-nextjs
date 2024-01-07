import MetaHead from "@/components/MetaHead";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const handleRedirectClick = () => {
    router.push("/about");
  };

  useEffect(() => {
    console.log(
      `process.env.NEXT_PUBLIC_INSTAGRAM_URL`,
      process.env.NEXT_PUBLIC_INSTAGRAM_URL
    );

    console.log(
      `process.env.NEXT_PUBLIC_TWITTER_URL`,
      process.env.NEXT_PUBLIC_TWITTER_URL
    );

    console.log(
      `process.env.NEXT_PUBLIC_FACEBOOK_URL`,
      process.env.NEXT_PUBLIC_FACEBOOK_URL
    );
  }, []);

  console.log("locale", locale);
  return (
    <section >
      <MetaHead
        pageTitle={"Home Page"}
        headDescription={"Ini Halaman Home"}
        title={"How to Become an SEO Expert (8 Steps)"}
        description={"Get from SEO newbie to SEO pro in 8 simple steps."}
        image={
          "https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
        }
        url={process.env.NEXT_PUBLIC_LOCAL_SERVER}
      />
      <h1>Index Page</h1>

      <button
        className="py-1 px-4 my-3 rounded-xl bg-slate-600 text-white text-sm"
        onClick={handleRedirectClick}
      >
        Go to About Page
      </button>

      <div className="my-5">
        <h3 className="font-semibold">
          {locale === "id" ? "Destinasi : " : "Destination : "}
        </h3>
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
