import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailMenuSlug() {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.slug) return;
    const [slug, id] = router.query.slug;
    console.log("slug - id : ", slug, "-", id);
    console.log(router.query);
  }, [router.query]);

  return (
    <section>
      <h1>Detail Page</h1>
    </section>
  );
}
