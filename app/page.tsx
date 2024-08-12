
import NavBar from "@/components/navigation/NavBar";
import ThirdBanner from "@/components/promotion/ThirdBanner";
import ProductsList from "@/components/products/ProductsList";
import SecondBanner from "@/components/promotion/SecondBanner";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <ThirdBanner />

      <ProductsList />
      <SecondBanner />
      <Footer />
    </main>
  );
}
