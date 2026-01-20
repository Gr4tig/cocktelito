import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";
import { Link } from "wouter";

export function Shop() {
  const { addItem } = useCart();

  return (
    <section id="shop" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            La Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 text-foreground">
            Une Sélection de Goût
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-border"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-muted p-8 cursor-pointer">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-foreground text-background text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10 rounded">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-lg font-bold text-foreground font-display leading-tight mb-2 hover:text-primary transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto gap-4">
                  <span className="text-lg font-medium text-foreground">
                    {product.price}€
                  </span>
                  <div className="flex gap-2">
                    <Link href={`/product/${product.id}`}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full px-4"
                      >
                        Voir
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                      }}
                      data-testid={`add-to-cart-${product.id}`}
                    >
                      Ajouter
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
