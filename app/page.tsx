
import NavBar from "@/components/navigation/NavBar";
import Banner from "@/components/promotion/Banner";
import ProductsList from "@/components/products/ProductsList";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Banner />
      <ProductsList />
    </main>
  );
}
