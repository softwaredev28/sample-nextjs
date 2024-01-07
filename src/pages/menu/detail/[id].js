import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailMenu() {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) return;
    console.log("id --- ", id);
  }, [router.query]);
  return (
    <section>
      <h1>Detail Page</h1>
    </section>
  );
}
