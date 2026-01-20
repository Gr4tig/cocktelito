import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Features } from "@/components/sections/features";
import { Shop } from "@/components/sections/shop";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Shop />
      </main>
      <Footer />
    </div>
  );
}
