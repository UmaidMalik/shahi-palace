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
      fr: "Boeuf",
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
    id: "wings",
    name: {
      en: "Wings",
      fr: "Ailes",
    },
    icon: "🍗",
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
    id: "raita",
    category: "salads",
    name: {
      en: "Raita",
      fr: "Raita",
    },
    description: {
      en: "Seasoned yogurt with tomato and cucumber",
      fr: "Yogourt assaisonné avec tomate et concombre",
    },
    price: 4,
    vegetarian: true,
  },
  {
    id: "chicken-roll",
    category: "sandwiches",
    name: {
      en: "Chicken Roll",
      fr: "Poulet Roll",
    },
    description: {
      en: "Naan bread sandwich with chicken, lettuce, and garlic sauce",
      fr: "Sandwich dans un pain naan avec poulet, laitue, et sauce à l’ail",
    },
    price: 7,
    vegetarian: false,
  },
  {
    id: "kebab-roll",
    category: "sandwiches",
    name: {
      en: "Kebab Roll",
      fr: "Kebab Roll",
    },
    description: {
      en: "Naan bread sandwich with beef kebab, lettuce, and garlic sauce",
      fr: "Sandwich dans un pain naan avec boeuf kebab, laitue, et sauce à l’ail",
    },
    price: 7,
    vegetarian: false,
  },
  {
    id: "vegetarian-roll",
    category: "sandwiches",
    name: {
      en: "Vegetarian Roll",
      fr: "Vegetarien Roll",
    },
    description: {
      en: "Naan bread sandwich with paneer, tomatoes, onions, lettuce, and garlic sauce",
      fr: "Sandwich dans un pain naan avec paneer, tomates, ognions, laitue, et sauce à l’ail",
    },
    price: 6.5,
    vegetarian: true,
  },
  {
    id: "roll-trio",
    category: "sandwiches",
    name: {
      en: "Add fries and a soft drink",
      fr: "Ajoutez frites et un boisson gazeuse",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 5,
    vegetarian: false,
  },
  {
    id: "chicken-shashlik",
    category: "chicken",
    name: {
      en: "Chicken Shashlik",
      fr: "Poulet Shashlik",
    },
    description: {
      en: "Chicken sautéed with onions and green pepper in a lightly sweet tomato sauce.",
      fr: "Poulet sauté avec oignons et poivron vert dans une sauce tomate légèrement sucrée.",
    },
    price: 14,
    featured: true,
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
    id: "chicken-balti",
    category: "chicken",
    name: {
      en: "Chicken Balti (Karahi)",
      fr: "Poulet Balti (karahi)",
    },
    description: {
      en: "Chicken cooked with tomatoes, ginger, coriander and green chili.",
      fr: "Poulet cuit avec des tomates, du gingembre, de la coriandre et du piment vert.",
    },
    price: 14,
  },
  {
    id: "chili-chicken",
    category: "chicken",
    name: {
      en: "Chili Chicken",
      fr: "Poulet Chili",
    },
    description: {
      en: "Chicken cooked with green pepper, onions, tomatoes, green chili and achar.",
      fr: "Poulet cuit avec poivron vert, oignons, tomates, piment vert et achar.",
    },
    price: 14,
  },
  {
    id: "chicken-jalfreizi",
    category: "chicken",
    name: {
      en: "Chicken Jalfreizi",
      fr: "Poulet Jalfreizi",
    },
    description: {
      en: "Chicken sautéed with onions, tomatoes and egg mixed in.",
      fr: "Poulet sauté avec oignons, tomates et oeuf incorporé.",
    },
    price: 14,
  },
  {
    id: "chicken-shahi-special",
    category: "chicken",
    name: {
      en: "Chicken Shahi Palace Special",
      fr: "Poulet Shahi Palace Spécial",
    },
    description: {
      en: "Chicken cooked in curry sauce with green pepper and mushrooms.",
      fr: "Poulet cuit dans une sauce au cari avec poivron vert et champignons.",
    },
    price: 14,
  },
  {
    id: "chicken-tikka-masala",
    category: "chicken",
    name: {
      en: "Chicken Tikka Masala",
      fr: "Poulet Tikka Masala",
    },
    description: {
      en: "Chicken tikka cooked with onions, tomatoes and coriander.",
      fr: "Poulet tikka cuit avec oignons, tomates et coriandre.",
    },
    price: 14,
  },
  {
    id: "chicken-curry",
    category: "chicken",
    name: {
      en: "Chicken Curry",
      fr: "Poulet Curry",
    },
    description: {
      en: "Chicken cooked with curry sauce and mixed herbs.",
      fr: "Poulet cuit avec de la sauce au cari et des herbes variées.",
    },
    price: 13,
  },
  {
    id: "beef-balti",
    category: "beef",
    name: {
      en: "Beef Balti (Karahi)",
      fr: "Cari de beouf (Karahi)",
    },
    description: {
      en: "Beef cooked with tomatoes, ginger, coriander and green chili.",
      fr: "Boeuf cuit avec des tomates, du gingembre, de la coriandre et du piment vert.",
    },
    price: 14,
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
      fr: "Boeuf mijoté dans un cari riche et épicé.",
    },
    price: 14,
  },
  {
    id: "beef-palak",
    category: "beef",
    name: {
      en: "Beef Palak",
      fr: "Boeuf aux Epinards",
    },
    description: {
      en: "Beef cooked with spinach purée and curry sauce.",
      fr: "Boeuf cuit avec une purée d’épinards et de la sauce au cari.",
    },
    price: 14,
  },
  {
    id: "beef-nihari",
    category: "beef",
    name: {
      en: "Beef Nihari",
      fr: "Boeuf Nihari",
    },
    description: {
      en: "Chunks of beef slow-cooked in a spicy stew.",
      fr: "Morceaux de boeuf cuits lentement dans un ragoût épicé.",
    },
    price: 14,
  },
  {
    id: "haleem",
    category: "beef",
    name: {
      en: "Haleem",
      fr: "Haleem",
    },
    description: {
      en: "A slow-cooked blend of lentils and beef, then puréed.",
      fr: "Mélange de lentilles et de boeuf lentement mijoté, puis réduit en purée.",
    },
    price: 10,
  },
  {
    id: "beef-kebab-balti",
    category: "beef",
    name: {
      en: "Beef Kebab Balti",
      fr: "Boeuf Kebab Balti",
    },
    description: {
      en: "Kebab simmered with tomatoes, ginger, coriander and green chili.",
      fr: "Kebab mijoté avec tomates, gingembre, coriandre et piment vert.",
    },
    price: 14,
  },
  {
    id: "beef-paya",
    category: "beef",
    name: {
      en: "Beef Paya",
      fr: "Boeuf Paya",
    },
    description: {
      en: "Beef trotters slowly simmered in a spicy stew.",
      fr: "Pieds de boeuf mijotés lentement dans un ragoût épicé.",
    },
    price: 10,
  },
  {
    id: "lamb-balti",
    category: "lamb",
    name: {
      en: "Lamb Balti (Karahi)",
      fr: "Agneau Balti (Karahi)",
    },
    description: {
      en: "Lamb cooked with tomatoes, ginger, coriander and green chili.",
      fr: "Agneau cuit avec tomates, gingembre, coriandre et piment vert.",
    },
    price: 15,
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
    price: 15,
  },
  {
    id: "lamb-palak",
    category: "lamb",
    name: {
      en: "Lamb Palak",
      fr: "Agneau aux Epinards",
    },
    description: {
      en: "Lamb cooked with spinach purée and curry sauce.",
      fr: "Agneau cuit avec une purée d’épinards et de la sauce au cari.",
    },
    price: 15,
  },
  {
    id: "shrimp-balti",
    category: "shrimp",
    name: {
      en: "Shrimp Balti (Karahi)",
      fr: "Crevettes Balti (Karahi)",
    },
    description: {
      en: "Shrimp cooked with tomatoes, ginger, coriander and green chili.",
      fr: "Crevettes cuites avec tomates, gingembre, coriandre et piment vert.",
    },
    price: 22,
  },
  {
    id: "shrimp-masala",
    category: "shrimp",
    name: {
      en: "Shrimp Masala",
      fr: "Crevettes Masala",
    },
    description: {
      en: "Shrimp cooked with onions, tomatoes and coriander.",
      fr: "Crevettes cuites avec oignons, tomates et coriandre.",
    },
    price: 22,
  },
  {
    id: "shrimp-curry",
    category: "shrimp",
    name: {
      en: "Shrimp Curry",
      fr: "Crevettes Cari",
    },
    description: {
      en: "Shrimp cooked with curry sauce and mixed herbs.",
      fr: "Crevettes cuites avec de la sauce au cari et des herbes variées.",
    },
    price: 22,
  },
  {
    id: "butter-shrimp",
    category: "shrimp",
    name: {
      en: "Butter Shrimp",
      fr: "Crevettes au Beurre",
    },
    description: {
      en: "Shrimp simmered in a creamy tomato sauce.",
      fr: "Crevettes mijotées dans une sauce crémeuse aux tomates.",
    },
    price: 22,
  },
  {
    id: "fish-curry",
    category: "fish",
    name: {
      en: "Fish Curry",
      fr: "Poisson Cari",
    },
    description: {
      en: "Fish cooked with curry sauce and mixed herbs.",
      fr: "Poisson cuit avec de la sauce au cari et des herbes variées.",
    },
    price: 13,
  },
  {
    id: "chili-fish",
    category: "fish",
    name: {
      en: "Chili Curry",
      fr: "Poisson CHili",
    },
    description: {
      en: "Fish cooked with green pepper, onions, tomatoes, green chili and achar.",
      fr: "Poisson cuit avec poivron vert, oignons, tomates, piment vert et achar.",
    },
    price: 13,
  },
  {
    id: "fried-fish",
    category: "fish",
    name: {
      en: "Fried Fish",
      fr: "Poisson Frit",
    },
    description: {
      en: "Marinated basa fillet, breaded and pan-fried.",
      fr: "Filet de basa mariné, pané et poêlé.",
    },
    price: 13,
  },
  {
    id: "chicken-wings",
    category: "wings",
    name: {
      en: "Chicken Wings (12)",
      fr: "Ailes de Poulet (12)",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 15,
  },
  {
    id: "mix-vegetables",
    category: "vegetarian",
    name: {
      en: "Mix Vegetables",
      fr: "Légumes Mélangés",
    },
    description: {
      en: "A mix of vegetables cooked with curry sauce and spices.",
      fr: "Un mélange de légumes cuit avec de la sauce au cari et des épices.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "aloo-palak",
    category: "vegetarian",
    name: {
      en: "Aloo Palak",
      fr: "Aloo Palak",
    },
    description: {
      en: "Potatoes cooked with spinach purée and curry sauce.",
      fr: "Pommes de terre cuites avec une purée d’épinards et de la sauce au cari.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "aloo-gobi",
    category: "vegetarian",
    name: {
      en: "Aloo Gobi",
      fr: "Aloo Gobi",
    },
    description: {
      en: "Pommes de terre et chou-fleur cuits avec de la sauce au cari.",
      fr: "Potatoes and cauliflower cooked with curry sauce.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "palak-paneer",
    category: "vegetarian",
    name: {
      en: "Palak Paneer",
      fr: "Palak Paneer",
    },
    description: {
      en: "Paneer cooked with spinach purée and curry sauce.",
      fr: "Paneer cuit avec une purée d’épinards et de la sauce au cari.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "daal-mash",
    category: "vegetarian",
    name: {
      en: "Daal Mash",
      fr: "Daal Mash",
    },
    description: {
      en: "Urad daal fendu cuit avec gingembre, ail, tomates et sauce au cari.",
      fr: "Split urad daal cooked with ginger, garlic, tomatoes and curry sauce.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "daal-makhani",
    category: "vegetarian",
    name: {
      en: "Daal Makhani",
      fr: "Daal Makhani",
    },
    description: {
      en: "Whole urad daal cooked with curry sauce and spices.",
      fr: "Urad daal entier cuit avec de la sauce au cari et des épices.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "chana-masala",
    category: "vegetarian",
    name: {
      en: "Chana Masala",
      fr: "Chana masala",
    },
    description: {
      en: "Chickpeas cooked in a sauce with various spices.",
      fr: "Pois chiches cuits dans une sauce aux épices diverses.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "cholay-bathooray",
    category: "vegetarian",
    name: {
      en: "Cholay Bathooray",
      fr: "Cholay Bathooray",
    },
    description: {
      en: "Chickpeas served with salad and two bathooray (fried breads).",
      fr: "Pois chiches servis avec de la salade et deux bathooray (pains frits).",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "shahi-paneer",
    category: "vegetarian",
    name: {
      en: "Shahi Paneer",
      fr: "Shahi Paneer",
    },
    description: {
      en: "Paneer (cheese) added to a creamy tomato sauce.",
      fr: "Paneer (fromage) ajouté dans une sauce crémeuse aux tomates.",
    },
    price: 14,
    vegetarian: true,
  },
  {
    id: "okra-masala",
    category: "vegetarian",
    name: {
      en: "Okra Masala",
      fr: "Gumbos Masala",
    },
    description: {
      en: "Okra cooked with tomatoes and onions in a sauce with various spices.",
      fr: "Gombos cuits avec tomates et oignons dans une sauce aux épices diverses.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "eggplant",
    category: "vegetarian",
    name: {
      en: "Eggplant (Baingan Bharta)",
      fr: "Aubergine (Baingan Bharta)",
    },
    description: {
      en: "Mashed eggplant cooked with tomatoes and onions.",
      fr: "Aubergine écrasée cuite avec tomates et oignons.",
    },
    price: 10,
    vegetarian: true,
  },
  {
    id: "chicken-tikka",
    category: "tandoori",
    name: {
      en: "Chicken Tikka",
      fr: "Poulet Tikka",
    },
    description: {
      en: "Boneless chicken marinated with yogurt and mixed spices, then cooked in a tandoor.",
      fr: "Poulet désossé mariné avec yogourt et épices mélangées, puis cuit dans un tandoor.",
    },
    price: 14,
  },
  {
    id: "beef-seekh-kebab",
    category: "tandoori",
    name: {
      en: "Beef Seekh Kebab (2)",
      fr: "Beouf Seekh Kebab (2)",
    },
    description: {
      en: "Minced beef mixed with spices and grilled on skewers in a tandoor.",
      fr: "Boeuf haché avec diverses épices, grillé sur broche dans un tandoor.",
    },
    price: 10,
  },
  {
    id: "chicken-seekh-kebab",
    category: "tandoori",
    name: {
      en: "Chicken Seekh Kebab (2)",
      fr: "Poulet Seekh Kebab (2)",
    },
    description: {
      en: "Spiced minced chicken grilled on skewers in a tandoor.",
      fr: "Poulet haché assaisonné d’épices, grillé sur broche dans un tandoor.",
    },
    price: 14,
  },
  {
    id: "whole-chicken-tandoori",
    category: "tandoori",
    name: {
      en: "Whole Chicken Tandoori",
      fr: "Poulet Entier Tandoori",
    },
    description: {
      en: "Chicken marinated with yogurt, herbs and spices, then cooked in a tandoor.",
      fr: "Poulet mariné au yogourt, aux herbes et aux épices, puis cuit dans un tandoor.",
    },
    price: 26,
  },
  {
    id: "half-chicken-tandoori",
    category: "tandoori",
    name: {
      en: "1/2 Chicken Tandoori",
      fr: "1/2 Poulet Tandoori",
    },
    description: {
      en: "Chicken marinated with yogurt, herbs and spices, then cooked in a tandoor.",
      fr: "Poulet mariné au yogourt, aux herbes et aux épices, puis cuit dans un tandoor.",
    },
    price: 14,
  },
  {
    id: "leg-chicken-tandoori",
    category: "tandoori",
    name: {
      en: "1/4 Leg Chicken Tandoori",
      fr: "1/4 Cuisse Poulet Tandoori",
    },
    description: {
      en: "Chicken marinated with yogurt, herbs and spices, then cooked in a tandoor.",
      fr: "Poulet mariné au yogourt, aux herbes et aux épices, puis cuit dans un tandoor.",
    },
    price: 8,
  },
  {
    id: "breast-chicken-tandoori",
    category: "tandoori",
    name: {
      en: "1/4 Breast Chicken Tandoori",
      fr: "1/4 Poitrine Poulet Tandoori",
    },
    description: {
      en: "Chicken marinated with yogurt, herbs and spices, then cooked in a tandoor.",
      fr: "Poulet mariné au yogourt, aux herbes et aux épices, puis cuit dans un tandoor.",
    },
    price: 9,
  },
  {
    id: "chicken-biryani",
    category: "rice",
    name: {
      en: "Chicken Biryani",
      fr: "Biryani Poulet",
    },
    description: {
      en: "Fragrant basmati rice layered with chicken and aromatic spices.",
      fr: "Riz basmati parfumé, préparé en couches avec du poulet et des épices aromatiques.",
    },
    price: 13,
    featured: true,
  },
  {
    id: "lamb-biryani",
    category: "rice",
    name: {
      en: "Lamb Biryani",
      fr: "Biryani Agneau",
    },
    description: {
      en: "Fragrant basmati rice prepared with lamb and aromatic spices.",
      fr: "Riz basmati parfumé, préparé avec de l’agneau et des épices aromatiques.",
    },
    price: 15,
    featured: true,
  },
  {
    id: "beef-biryani",
    category: "rice",
    name: {
      en: "Beef Biryani",
      fr: "Biryani Beouf",
    },
    description: {
      en: "Fragrant basmati rice prepared with beef and aromatic spices.",
      fr: "Riz basmati parfumé, préparé avec du bœuf et des épices aromatiques.",
    },
    price: 14,
    featured: true,
  },
  {
    id: "vegetarian-biryani",
    category: "rice",
    name: {
      en: "Vegetarian Biryani",
      fr: "Biryani Végétarien",
    },
    description: {
      en: "Fragrant basmati rice layered with chicken and traditional spices.",
      fr: "Riz basmati parfumé accompagné de poulet et d’épices traditionnelles.",
    },
    price: 12,
    featured: true,
  },
  {
    id: "shrimp-biryani",
    category: "rice",
    name: {
      en: "Shrimp Biryani",
      fr: "Biryani Crevette",
    },
    description: {
      en: "Fragrant basmati rice prepared with shrimp and aromatic spices.",
      fr: "Riz basmati parfumé, préparé avec des crevettes et des épices aromatiques.",
    },
    price: 22,
    featured: true,
  },
  {
    id: "vegetarian-pulao",
    category: "rice",
    name: {
      en: "Vegetarian Pulao",
      fr: "Pulao Vegetarian",
    },
    description: {
      en: "Fragrant rice cooked with a mix of vegetables and spices.",
      fr: "Riz parfumé cuit avec un mélange de légumes et d’épice.",
    },
    price: 12,
    featured: true,
  },
  {
    id: "biryani-rice",
    category: "rice",
    name: {
      en: "Biryani Rice",
      fr: "Riz Biryani",
    },
    description: {
      en: "Fragrant rice prepared with spiced curry.",
      fr: "Riz parfumé préparé avec un cari épicé.",
    },
    price: 8,
  },
  {
    id: "basmati-rice",
    category: "rice",
    name: {
      en: "Basmati Rice",
      fr: "Riz Basmati",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 4,
  },
  {
    id: "whole-chicken-karahi",
    category: "chefs-special",
    name: {
      en: "Whole Chicken Karahi",
      fr: "Poulet Entier Karahi",
    },
    description: {
      en: "Whole chicken cooked with tomatoes, ginger, coriander and green chili.",
      fr: "Poulet entier cuit avec tomates, gingembre, coriandre et piment vert.",
    },
    price: 35,
  },
  {
    id: "chicken-sizzler",
    category: "chefs-special",
    name: {
      en: "Chicken Sizzler",
      fr: "Poulet Sizzler",
    },
    description: {
      en: "Chicken tikka on a bed of onions and green peppers, served on a hot plate",
      fr: "Poulet tikka sur un lit d’oignons et de poivron vert, servi dans un plat chaud.",
    },
    price: 15,
  },
  {
    id: "mix-sizzler",
    category: "chefs-special",
    name: {
      en: "Mix Sizzler",
      fr: "Melanger Sizzler",
    },
    description: {
      en: "Chicken tikka and seekh kebab served on a bed of onions and green peppers on a hot plate.",
      fr: "Poulet tikka et seekh kebab servis sur un lit d’oignons et de poivron vert dans un plat chaud.",
    },
    price: 24,
  },
  {
    id: "salmon-tikka",
    category: "chefs-special",
    name: {
      en: "Salmon Tikka",
      fr: "Tikka Saumon",
    },
    description: {
      en: "Salmon marinated in yogurt and spices, then cooked in a tandoor.",
      fr: "Saumon mariné au yogourt et aux épices, puis cuit dans un tandoor.",
    },
    price: 26,
  },
  {
    id: "lamb-chops",
    category: "chefs-special",
    name: {
      en: "Lamb Chops",
      fr: "Cotelettes D'Agneau",
    },
    description: {
      en: "Lamb chops marinated in yogurt and spices, then cooked in a tandoor.",
      fr: "Côtelettes d’agneau marinées au yogourt et aux épices, puis cuites dans un tandoor.",
    },
    price: 25,
  },
  {
    id: "plain-naan",
    category: "tandoori-bread",
    name: {
      en: "Plain Naan",
      fr: "Naan Regulier",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 2,
  },
  {
    id: "coriander-naan",
    category: "tandoori-bread",
    name: {
      en: "Coriander Naan",
      fr: "Naan Coriandre",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 3,
  },
  {
    id: "garlic-naan",
    category: "tandoori-bread",
    name: {
      en: "Garlic Naan",
      fr: "Naan a l'ail",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 3,
  },
  {
    id: "aloo-naan",
    category: "tandoori-bread",
    name: {
      en: "Aloo Naan",
      fr: "Aloo Naan",
    },
    description: {
      en: "Naan stuffed with potatoes",
      fr: "Naan farci de pommes de terre",
    },
    price: 6,
  },
  {
    id: "keema-naan",
    category: "tandoori-bread",
    name: {
      en: "Keema Naan",
      fr: "Queema Naan",
    },
    description: {
      en: "Naan stuffed with minced beef",
      fr: "Naan farci de boeuf haché",
    },
    price: 6,
  },
  {
    id: "onion-naan",
    category: "tandoori-bread",
    name: {
      en: "Onion Naan",
      fr: "Naan d'ognions",
    },
    description: {
      en: "Naan stuffed with onions",
      fr: "Naan farci aux oignons",
    },
    price: 6,
  },
  {
    id: "chicken-naan",
    category: "tandoori-bread",
    name: {
      en: "Chicken Naan",
      fr: "Naan Poulet",
    },
    description: {
      en: "Naan stuffed with chicken",
      fr: "Naan farci au poulet",
    },
    price: 6,
  },
  {
    id: "paneer-naan",
    category: "tandoori-bread",
    name: {
      en: "Paneer Naan (Cheese)",
      fr: "Paneer Naan (Fromage)",
    },
    description: {
      en: "Naan stuffed with paneer",
      fr: "Naan farci au paneer",
    },
    price: 6,
  },
  {
    id: "roti",
    category: "tandoori-bread",
    name: {
      en: "Tandoori Roti (Whole Wheat)",
      fr: "Tandoori Roti (Ble Entier)",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 2,
  },
  {
    id: "soft-drink",
    category: "drinks",
    name: {
      en: "Soft Drink",
      fr: "Boisson Gazeuse",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 2.5,
  },
  {
    id: "perrier",
    category: "drinks",
    name: {
      en: "Perrier",
      fr: "Perrier",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 4,
  },
  {
    id: "mango-shake",
    category: "drinks",
    name: {
      en: "Mango Shake",
      fr: "Lait frappé à la mangue",
    },
    description: {
      en: "A refreshing mango and milk drink.",
      fr: "Une boisson rafraîchissante à la mangue et au lait.",
    },
    price: 4,
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
    price: 4,
  },
  {
    id: "sweet-lassi",
    category: "drinks",
    name: {
      en: "Sweet Lassi",
      fr: "Lassi sucre",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 4,
  },
  {
    id: "salti-lassi",
    category: "drinks",
    name: {
      en: "Salti Lassi",
      fr: "Lassi sale",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 4,
  },
  {
    id: "chai",
    category: "drinks",
    name: {
      en: "Chai (Tea)",
      fr: "Chai (The)",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 3,
  },
  {
    id: "masala-chai",
    category: "drinks",
    name: {
      en: "Masala Chai",
      fr: "Masala Chai",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 4,
  },
  {
    id: "dood-pathi",
    category: "drinks",
    name: {
      en: "Dood Pathi",
      fr: "Dood Pathi",
    },
    description: {
      en: "",
      fr: "",
    },
    price: 4,
  },
  {
    id: "kulfi",
    category: "desserts",
    name: {
      en: "Kulfi",
      fr: "Kulfi",
    },
    description: {
      en: "Homemade ice cream with pistachios and almonds.",
      fr: "Crème glacée maison avec pistaches et amandes.",
    },
    price: 5,
    vegetarian: true,
  },
  {
    id: "gulab-jamun",
    category: "desserts",
    name: {
      en: "Gulab Jamun (2)",
      fr: "Gulab jamun (2)",
    },
    description: {
      en: "Traditional Indian dessert in sweet syrup.",
      fr: "Dessert indien traditionnel au sirop sucré.",
    },
    price: 5,
    vegetarian: true,
  },
  {
    id: "ras-malai",
    category: "desserts",
    name: {
      en: "Ras Malai (2)",
      fr: "Ras Malai (2)",
    },
    description: {
      en: "Flat paneer cakes in a sweet milk syrup with pistachios and almonds.",
      fr: "Galettes de paneer dans un sirop de lait sucré, avec pistaches et amandes.",
    },
    price: 6,
    vegetarian: true,
  },
]