import Head from "next/head";
export default function MetaHead({
  pageTitle,
  headDescription,
  title,
  description,
  image,
  url,
}) {
  return (
    <Head>
      <title>{pageTitle} - cukurukuk.com</title>
      <meta name="description" content={headDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="id_ID" />
      <meta
        name="twitter:card"
        content="Get from SEO newbie to SEO pro in 8 simple steps."
      />
      <meta name="twitter:site" content="@nytimesbits" />
      <meta name="twitter:creator" content="@nickbilton" />
    </Head>
  );
}
