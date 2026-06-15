import type { MenuCategory, MenuItem } from "@/types/menu"

export const menuCategories: MenuCategory[] = [
  {
    id: "soups",
    name: {
      en: "Soups",
      fr: "Soupes",
    },
    icon: "🥣",
  },
  {
    id: "appetizers",
    name: {
      en: "Appetizers",
      fr: "Entrées",
    },
    icon: "🥟",
  },
  {
    id: "salads",
    name: {
      en: "Salads",
      fr: "Salades",
    },
    icon: "🥗",
  },
  {
    id: "sandwiches",
    name: {
      en: "Sandwiches",
      fr: "Sandwiches",
    },
    icon: "🌯",
  },
  {
    id: "chicken",
    name: {
      en: "Chicken",
      fr: "Poulet",
    },
    icon: "🍗",
  },
  {
    id: "beef",
    name: {
      en: "Beef",
      fr: "Bœuf",
    },
    icon: "🥩",
  },
  {
    id: "lamb",
    name: {
      en: "Lamb",
      fr: "Agneau",
    },
    icon: "🍖",
  },
  {
    id: "shrimp",
    name: {
      en: "Shrimp",
      fr: "Crevette",
    },
    icon: "🦐",
  },
  {
    id: "fish",
    name: {
      en: "Fish",
      fr: "Poisson",
    },
    icon: "🐟",
  },
  {
    id: "vegetarian",
    name: {
      en: "Vegetarian",
      fr: "Végétarien",
    },
    icon: "🌿",
  },
  {
    id: "tandoori",
    name: {
      en: "Tandoori",
      fr: "Tandoori",
    },
    icon: "🔥",
  },
  {
    id: "rice",
    name: {
      en: "Rice",
      fr: "Riz",
    },
    icon: "🍚",
  },
  {
    id: "chefs-special",
    name: {
      en: "Chef's Special",
      fr: "Spécial du chef",
    },
    icon: "🍽️",
  },
  {
    id: "tandoori-bread",
    name: {
      en: "Tandoori Bread",
      fr: "Pain tandoori",
    },
    icon: "🫓",
  },
  {
    id: "drinks",
    name: {
      en: "Drinks",
      fr: "Boissons",
    },
    icon: "🥤",
  },
  {
    id: "desserts",
    name: {
      en: "Desserts",
      fr: "Desserts",
    },
    icon: "🍮",
  },
]

export const menuItems: MenuItem[] = [
  {
    id: "lentil-soup",
    category: "soups",
    name: {
      en: "Lentil Soup (Dall Soup)",
      fr: "Soupe aux lentilles",
    },
    description: {
      en: "A comforting soup made with lentils and aromatic spices.",
      fr: "Une soupe réconfortante aux lentilles et aux épices aromatiques.",
    },
    price: 4,
    vegetarian: true,
  },
  {
    id: "vegetable-samosa",
    category: "appetizers",
    name: {
      en: "Vegetable Samosa",
      fr: "Samosa aux légumes",
    },
    description: {
      en: "Stuffed fried pastry with potatoes, green peas, and spices.",
      fr: "Pâtisserie frite farcie avec patates, pois verts, et épices.",
    },
    price: 3,
    vegetarian: true,
  },
  {
    id: "meat-samosa",
    category: "appetizers",
    name: {
      en: "Meat Samosa",
      fr: "Samosa à la viande",
    },
    description: {
      en: "Fried pastry stuffed with ground beef, onions, and spices.",
      fr: "Pâtisserie frite farcie au bœuf haché, aux oignons et aux épices.",
    },
    price: 4,
  },
  {
    id: "onion-bhaji",
    category: "appetizers",
    name: {
      en: "Onion Bhaji (Pakora)",
      fr: "Bhaji D'ognion",
    },
    description: {
      en: "Fritters of onions, potatoes, spinach, and chickpea flour.",
      fr: "Beignet aux oignons, pommes de terre, épinards et farine de pois chiches.",
    },
    price: 4,
    vegetarian: true,
  },
  {
    id: "paneer-pakora",
    category: "appetizers",
    name: {
      en: "Paneer Pakora (Cheese)",
      fr: "Paneer Pakora (Fromage)",
    },
    description: {
      en: "Pieces of paneer, battered and deep-fried.",
      fr: "Morceaux de paneer panés et frits.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "fish-pakora",
    category: "appetizers",
    name: {
      en: "Fish Pakora",
      fr: "Poisson Pakora",
    },
    description: {
      en: "Battered and deep-fried basa fish pieces.",
      fr: "Morceaux de poisson basa panés et frits.",
    },
    price: 10,
  },
  {
    id: "chicken-pakora",
    category: "appetizers",
    name: {
      en: "Chicken Pakora",
      fr: "Poulet Pakora",
    },
    description: {
      en: "Pieces of boneless chicken, battered and deep-fried.",
      fr: "Morceaux de poulet désossé panés et frits.",
    },
    price: 10,
  },
  {
    id: "chana-samosa",
    category: "appetizers",
    name: {
      en: "Chana Samosa",
      fr: "Chana Samosa",
    },
    description: {
      en: "Chickpeas, samosas, onions, and tomatoes.",
      fr: "Pois chiches, samosas, oignons et tomates.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "chef-salad",
    category: "salads",
    name: {
      en: "Chef Salad",
      fr: "Salade du chef",
    },
    description: {
      en: "Lettuce, tomatoes, red onions, carrots, and cucumber, with a vinegar dressing.",
      fr: "Laitue, tomates, oignons rouges, carottes et concombre, avec vinaigrette au vinaigre.",
    },
    price: 7,
    vegetarian: true,
  },
  {
    id: "kachumber-salad",
    category: "salads",
    name: {
      en: "Kachumber Salad",
      fr: "Kachumber salade",
    },
    description: {
      en: "Diced cucumbers, green peppers, onions, and tomatoes.",
      fr: "Concombres en dés, poivrons verts, oignons et tomates.",
    },
    price: 7,
    vegetarian: true,
  },
  {
    id: "onion-salad",
    category: "salads",
    name: {
      en: "Onion Salad",
      fr: "Salade aux ognions",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 7,
    vegetarian: true,
  },
  {
    id: "butter-chicken",
    category: "chicken",
    name: {
      en: "Butter Chicken",
      fr: "Poulet au beurre",
    },
    description: {
      en: "Tender chicken in a creamy tomato and butter sauce.",
      fr: "Poulet tendre dans une sauce crémeuse aux tomates et au beurre.",
    },
    price: 15,
    featured: true,
  },
  {
    id: "chicken-karahi",
    category: "chicken",
    name: {
      en: "Chicken Karahi",
      fr: "Poulet karahi",
    },
    description: {
      en: "Chicken cooked with tomatoes, ginger, herbs, and traditional spices.",
      fr: "Poulet cuisiné avec tomates, gingembre, herbes et épices traditionnelles.",
    },
    price: 16,
  },
  {
    id: "beef-curry",
    category: "beef",
    name: {
      en: "Beef Curry",
      fr: "Cari de bœuf",
    },
    description: {
      en: "Slow-cooked beef served in a rich spiced curry.",
      fr: "Bœuf mijoté dans un cari riche et épicé.",
    },
    price: 16,
  },
  {
    id: "lamb-korma",
    category: "lamb",
    name: {
      en: "Lamb Korma",
      fr: "Korma d’agneau",
    },
    description: {
      en: "Tender lamb in a smooth and aromatic cream sauce.",
      fr: "Agneau tendre dans une sauce crémeuse et aromatique.",
    },
    price: 18,
  },
  {
    id: "chana-masala",
    category: "vegetarian",
    name: {
      en: "Chana Masala",
      fr: "Chana masala",
    },
    description: {
      en: "Chickpeas cooked with onions, tomatoes, herbs, and spices.",
      fr: "Pois chiches cuisinés avec oignons, tomates, herbes et épices.",
    },
    price: 13,
    vegetarian: true,
  },
  {
    id: "chicken-biryani",
    category: "rice",
    name: {
      en: "Chicken Biryani",
      fr: "Biryani au poulet",
    },
    description: {
      en: "Fragrant basmati rice layered with chicken and traditional spices.",
      fr: "Riz basmati parfumé accompagné de poulet et d’épices traditionnelles.",
    },
    price: 15,
    featured: true,
  },
  {
    id: "tandoori-chicken",
    category: "tandoori",
    name: {
      en: "Tandoori Chicken",
      fr: "Poulet tandoori",
    },
    description: {
      en: "Marinated chicken roasted with aromatic tandoori spices.",
      fr: "Poulet mariné et rôti avec des épices tandoori aromatiques.",
    },
    price: 17,
  },
  {
    id: "gulab-jamun",
    category: "desserts",
    name: {
      en: "Gulab Jamun",
      fr: "Gulab jamun",
    },
    description: {
      en: "Soft milk dumplings served in a fragrant sweet syrup.",
      fr: "Boulettes de lait moelleuses servies dans un sirop parfumé.",
    },
    price: 5,
    vegetarian: true,
  },
  {
    id: "mango-lassi",
    category: "drinks",
    name: {
      en: "Mango Lassi",
      fr: "Lassi à la mangue",
    },
    description: {
      en: "A refreshing mango and yogurt drink.",
      fr: "Une boisson rafraîchissante à la mangue et au yogourt.",
    },
    price: 5,
    vegetarian: true,
  },
]