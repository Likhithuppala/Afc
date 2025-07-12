import './savoury-menu.css';
import { useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import SpecialCarousel from '../../components/special-carousel';
import FoodItemCard from '../../components/food-item-card';
import FilterCategory from '../../components/filter-category';
import SearchInput from '../../common-components/search-input';

// dummyFoodItems

const foodItems = [
  {
    id: 1,
    name: 'Chicken Noodles',
    price: 50,
    image: 'src/assets/noodles.png',
    category: 'Lunch',
    isSelected: false,
    quantity: 2,
    isSpecial: false,
  },
  {
    id: 2,
    name: 'Chicken Kabab',
    price: 25,
    image: '/src/assets/kabab.png',
    category: 'Snacks',
    isSelected: true,
    quantity: 2,
    isSpecial: true, 
  },
  {
    id: 3,
    name: 'Omelette',
    price: 20,
    image: 'src/assets/omelette.png',
    category: 'Brunch',
    isSelected: false,
    quantity: 2,
    isSpecial: true, 
  },
  {
    id: 4,
    name: 'Gobi Manchurian',
    price: 40,
    image: 'src/assets/gobi.png',
    category: 'Snacks',
    isSelected: true,
    quantity: 2,
    isSpecial: true, 
  },
];

const specialItems = foodItems.filter((item) => item.isSpecial);

const categories = ['All', 'Brunch', 'Lunch', 'Snacks', 'Drinks'];

const SavouryMenuPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = foodItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
  );

  return (
    <div className="savoury-page">
      {/* Header */}
      <div className="savoury-header">
        <ArrowLeftOutlined className="back-icon" onClick={() => navigate(-1)} />
        <h2 className="savoury-title">Savoury</h2>
      </div>

      {/* Search */}
      <div className="menu-actions">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for food"
        />
        <FilterCategory
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Specials */}
      <SpecialCarousel items={specialItems} />

      {/* Food List */}
      <div className="food-list">
        {filteredItems.map((item) => (
          <FoodItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            isSelected={item.isSelected}
            quantity={item.quantity}
          />
        ))}
      </div>

      {/* View Cart */}
      <div className="view-cart-wrapper">
        <button className="view-cart-button">View Cart</button>
      </div>
    </div>
  );
};

export default SavouryMenuPage;
