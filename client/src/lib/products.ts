import machineImage from "@assets/generated_images/sleek_rose_gold_and_anthracite_drink_machine.png";
import tiroirImage from "@assets/generated_images/Tiroir.png";
import capsuleCosmopolitainImage from "@assets/generated_images/capsule_cosmopolitain.png";
import capsuleEspressoImage from "@assets/generated_images/capsule_espresso.png";
import { Product } from "./cart-context";

export type ProductWithDetails = Product & {
  badge?: string;
  fullDescription?: string;
  features?: string[];
  specifications?: Record<string, string>;
};

export const products: ProductWithDetails[] = [
  {
    id: "machine-preorder",
    name: "Machine COCKTELITO - Précommande",
    price: 499.0,
    image: machineImage,
    description: "Réservez votre unité. Expédition en juin 2026.",
    badge: "Limité",
    fullDescription: "La machine COCKTELITO représente l'apogée de l'ingénierie française. Conçue avec des matériaux premium et une technologie de pointe, elle transforme chaque capsule en une expérience sensorielle unique. Chaque courbe est intentionnelle, chaque matériau est premium.",
    features: [
      "Système de capsules intelligent avec reconnaissance RFID",
      "Interface tactile HD pour un contrôle intuitif",
      "Bec de précision pour une libération optimale des arômes",
      "Finition Or Rose en alliage d'aluminium de qualité aéronautique",
      "Contrôle de l'intensité et de la température",
      "Design premium et élégant"
    ],
    specifications: {
      "Dimensions": "30 x 25 x 40 cm",
      "Poids": "4.2 kg",
      "Matériau": "Alliage d'aluminium Or Rose",
      "Expédition": "Juin 2026"
    }
  },
  {
    id: "pack-cocktail",
    name: "Pack Espresso",
    price: 29.0,
    image: capsuleEspressoImage,
    description: "12 Capsules : Espresso Martini",
    badge: "Bestseller",
    fullDescription: "Découvrez l'intensité et la complexité de notre Espresso Martini. Un mélange parfait entre café premium et notes de vodka, créant une expérience unique qui éveille les sens.",
    features: [
      "12 capsules Espresso Martini",
      "Intensité optimale pour réveiller vos sens",
      "Arômes complexes et équilibrés",
      "Compatible avec la machine COCKTELITO"
    ],
    specifications: {
      "Quantité": "12 capsules",
      "Type": "Espresso Martini",
      "Intensité": "Élevée",
      "Conservation": "18 mois"
    }
  },
  {
    id: "pack-wellness",
    name: "Pack Cosmopolitain",
    price: 35.0,
    image: capsuleCosmopolitainImage,
    description: "12 Capsules : Cosmopolitain",
    fullDescription: "Plongez dans l'univers sophistiqué du Cosmopolitain. Un équilibre parfait entre cranberry, citron vert et vodka premium, pour une expérience raffinée à chaque dégustation.",
    features: [
      "12 capsules Cosmopolitain",
      "Saveurs sophistiquées et raffinées",
      "Équilibre parfait entre cranberry et citron vert",
      "Expérience premium à chaque capsule"
    ],
    specifications: {
      "Quantité": "12 capsules",
      "Type": "Cosmopolitain",
      "Intensité": "Moyenne",
      "Conservation": "18 mois"
    }
  },
  {
    id: "pack-all-capsule",
    name: "Collection de toutes nos capsules",
    price: 97.99,
    image: tiroirImage,
    description: "124 Capsules : Sencha, Jasmin, Earl Grey...",
    fullDescription: "La collection complète de toutes nos capsules premium. Un voyage sensoriel à travers nos meilleures créations : thés raffinés, cocktails sophistiqués et boissons wellness. Parfait pour découvrir toute la gamme COCKTELITO.",
    features: [
      "124 capsules variées",
      "Collection complète de la gamme",
      "Thés premium : Sencha, Jasmin, Earl Grey",
      "Cocktails sophistiqués",
      "Boissons wellness",
      "Tiroir de rangement élégant inclus"
    ],
    specifications: {
      "Quantité": "124 capsules",
      "Variétés": "Collection complète",
      "Tiroir inclus": "Oui",
      "Valeur": "Économie de 20%"
    }
  },
];

export function getProductById(id: string): ProductWithDetails | undefined {
  return products.find((p) => p.id === id);
}
