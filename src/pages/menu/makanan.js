import MetaHead from "@/components/MetaHead";
import Head from "next/head";

export default function Makanan() {
  return (
    <section>
      <MetaHead
        pageTitle={"Food Page"}
        headDescription={"Ini Halaman Food"}
        title={"How to Become an SEO Expert (8 Steps)"}
        description={"Get from SEO newbie to SEO pro in 8 simple steps."}
        image={
          "https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
        }
        url={
          "http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/"
        }
      />
      <h1>Makanan Page</h1>
    </section>
  );
}
