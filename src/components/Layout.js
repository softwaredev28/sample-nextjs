import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <div className="pt-24">{children}</div>
      <Footer />
    </div>
  );
}
