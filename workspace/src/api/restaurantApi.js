
const fetchMenuData = () => {
  return [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic Neapolitan pizza with tomato, mozzarella, and basil.",
      price: 12.99,
      category: "Pizza",
      image: "/images/margherita.jpg",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description: "A popular pizza with pepperoni, mozzarella, and tomato sauce.",
      price: 14.99,
      category: "Pizza",
      image: "/images/pepperoni.jpg",
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
      price: 9.99,
      category: "Salad",
      image: "/images/caesar-salad.jpg",
    },
    {
      id: 4,
      name: "Spaghetti Carbonara",
      description: "Pasta with eggs, hard cheese, cured pork, and black pepper.",
      price: 15.99,
      category: "Pasta",
      image: "/images/carbonara.jpg",
    },
  ];
};

export { fetchMenuData };
