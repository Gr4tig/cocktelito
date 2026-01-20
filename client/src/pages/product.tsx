import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/lib/products";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";

export default function ProductPage() {
  const [, params] = useRoute("/product/:id");
  const { addItem } = useCart();
  const product = params ? getProductById(params.id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
          <Link href="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link href="/#shop">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Retour à la boutique
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {product.badge && (
                <span className="absolute top-4 left-4 bg-foreground text-background text-xs font-bold px-3 py-1.5 uppercase tracking-wider z-10 rounded">
                  {product.badge}
                </span>
              )}
              <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden p-8 md:p-12">
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full transform scale-75" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative w-full h-full object-contain drop-shadow-2xl z-10"
                />
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {product.description}
              </p>

              {product.fullDescription && (
                <p className="text-foreground/90 mb-8 leading-relaxed">
                  {product.fullDescription}
                </p>
              )}

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">
                  {product.price}€
                </span>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-foreground mb-4">Caractéristiques</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && (
                <div className="mb-8 p-6 bg-muted rounded-xl">
                  <h3 className="text-lg font-bold text-foreground mb-4">Spécifications</h3>
                  <dl className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-border pb-2">
                        <dt className="text-muted-foreground font-medium">{key}</dt>
                        <dd className="text-foreground font-semibold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Add to Cart Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold"
                  onClick={() => addItem(product)}
                >
                  Ajouter au panier
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
