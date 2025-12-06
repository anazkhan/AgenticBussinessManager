import React from 'react';

const menuData = [
  {
    category: 'Appetizers',
    items: [
      { id: 1, name: 'Spring Rolls', description: 'Crispy rolls with vegetables', price: 5.99 },
      { id: 2, name: 'Garlic Bread', description: 'Toasted bread with garlic butter', price: 4.50 },
    ],
  },
  {
    category: 'Main Courses',
    items: [
      { id: 3, name: 'Pad Thai', description: 'Classic stir-fried noodles', price: 12.99 },
      { id: 4, name: 'Burger', description: 'Beef patty with cheese and fries', price: 11.50 },
      { id: 5, name: 'Margherita Pizza', description: 'Tomato, mozzarella, and basil', price: 13.99 },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { id: 6, name: 'Cheesecake', description: 'Creamy New York style cheesecake', price: 6.99 },
      { id: 7, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center', price: 7.50 },
    ],
  },
];

const MenuItem = ({ item }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
    <span className="text-lg font-bold text-green-600">${item.price.toFixed(2)}</span>
  </div>
);

const MenuPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Our Menu</h1>

      {menuData.map((categoryData) => (
        <section key={categoryData.category} className="mb-10 p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-green-500 pb-4 mb-6">
            {categoryData.category}
          </h2>
          <div className="space-y-4">
            {categoryData.items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuPage;
