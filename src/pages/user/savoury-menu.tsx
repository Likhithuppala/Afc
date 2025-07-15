import './savoury-menu.css';
import { useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';

import SpecialCarousel from '../../components/special-carousel';
import FoodItemCard from '../../components/food-item-card';
import FilterCategory from '../../components/filter-category';
import SearchInput from '../../common-components/search-input';

import kababImage from '../../assets/kabab.png';
import gobiImage from '../../assets/gobi.png';
import noodlesImage from '../../assets/noodles.png';
import omeletteImage from '../../assets/omelette.png';

//  Special carousel items
const specialItems = [
  { id: 101, name: 'Chicken kabab', image: kababImage },
  { id: 102, name: 'Gobi Rice', image: gobiImage },
  { id: 103, name: 'Noodles', image: noodlesImage },
];

//  Food list
const initialItems = [
  {
    id: 1,
    name: 'Chicken Noodles',
    price: 50,
    image: noodlesImage,
    category: 'Lunch',
    isSelected: false,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Chicken Kabab',
    price: 25,
    image: kababImage,
    category: 'Snacks',
    isSelected: true,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Omelette',
    price: 20,
    image: omeletteImage,
    category: 'Brunch',
    isSelected: false,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Gobi Manchurian',
    price: 40,
    image: gobiImage,
    category: 'Snacks',
    isSelected: true,
    quantity: 1,
  },
];

const categories = ['All', 'Brunch', 'Lunch', 'Snacks', 'Drinks'];

const SavouryMenuPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [items, setItems] = useState(initialItems);

  //  Filter by search and category
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
  );

  //  Checkbox toggle
  const handleSelectChange = (id: number, checked: boolean) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isSelected: checked } : item
      )
    );
  };

  //  Quantity update
  const handleQuantityChange = (id: number, newQty: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  //  Dropdown navigation
  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === 'foodcourt') navigate('/foodcourt');
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="foodcourt">Food Court</Menu.Item>
    </Menu>
  );

  return (
    <div className="savoury-page">
      {/* Header */}
      <div className="savoury-header">
        <ArrowLeftOutlined className="back-icon" onClick={() => navigate(-1)} />
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <h2 className="savoury-title">Savoury ▾</h2>
        </Dropdown>
      </div>

      {/* Search and Filter */}
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

      {/* Special Carousel */}
      <SpecialCarousel items={specialItems} />

      {/* Food Items */}
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
            onSelectChange={handleSelectChange}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      {/* View Cart */}
      <button className="view-cart-button" onClick={() => navigate('/view-cart')}>
        View Cart
      </button>
    </div>
  );
};

export default SavouryMenuPage;
