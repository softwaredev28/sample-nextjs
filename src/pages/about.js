import MetaHead from "@/components/MetaHead";

export default function About() {
  return (
    <section>
      <MetaHead
        pageTitle={"About Page"}
        headDescription={"Ini Halaman About"}
        title={"How to Become an SEO Expert (8 Steps)"}
        description={"Get from SEO newbie to SEO pro in 8 simple steps."}
        image={
          "https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
        }
        url={process.env.NEXT_PUBLIC_LOCAL_SERVER}
      />
      <h1 className="text-center font-bold text-2xl my-5 text-blue-700">
        About Page
      </h1>

      <div className="content flex justify-center items-center flex-col gap-5 w-full">
        <p className="w-1/2 text-justify">
          Et quis fugiat Lorem nisi velit aliqua anim magna Lorem labore quis
          nostrud eiusmod. Sunt nostrud minim adipisicing proident adipisicing
          anim elit do voluptate sint aliquip. Nostrud excepteur est ipsum Lorem
          id anim dolore sit nulla deserunt laborum. Ipsum ullamco laborum esse
          quis nulla deserunt fugiat incididunt laborum do laborum aute. Veniam
          ullamco amet eiusmod aute ex qui mollit labore qui nostrud laborum
          aliqua nostrud mollit. Id adipisicing dolore excepteur nulla
          reprehenderit non exercitation labore magna. Consequat commodo aute
          labore dolore nisi irure cillum consectetur eiusmod. Enim laboris
          consectetur amet officia excepteur anim minim incididunt id qui velit
          nostrud ad.
        </p>

        <p className="w-1/2 text-justify">
          Voluptate cillum sint voluptate occaecat cupidatat veniam. Sit ea
          mollit tempor laborum occaecat qui consequat incididunt ad quis amet
          voluptate incididunt. Ullamco eu ut in deserunt nostrud aliqua
          voluptate anim velit mollit. Consequat veniam est id proident aliqua
          dolor reprehenderit aute consequat cupidatat veniam laborum. Officia
          eiusmod cupidatat ea laborum laboris incididunt. Mollit minim nulla
          cillum Lorem aliqua non ipsum irure labore est. Aute ad id nisi
          deserunt nulla est aute ut. Eiusmod labore laboris deserunt esse.
          Magna voluptate aliqua qui aliqua magna proident anim ex. Deserunt
          elit consectetur veniam voluptate eu ipsum commodo amet amet Lorem
          consectetur magna ad. Minim consectetur laboris magna est sit eu
          pariatur. Lorem quis consectetur nostrud non consequat eu anim eu
          eiusmod dolore. Adipisicing irure in nulla minim anim nostrud
          exercitation excepteur aute.
        </p>
      </div>
    </section>
  );
}
