import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <div className="h-auto p-3 flex justify-center items-center text-black w-full rounded-md font-semi-bold">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
