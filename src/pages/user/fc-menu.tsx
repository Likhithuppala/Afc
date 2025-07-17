import './savoury-menu.css';
import { useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';

import SpecialCarousel from '../../components/special-carousel';
import FoodItemCard from '../../components/food-item-card';
import FilterCategory from '../../components/filter-category';
import SearchInput from '../../common-components/search-input';

import kabab from '../../assets/kabab.png';
import gobi from '../../assets/gobi.png';
import veg from '../../assets/veg-biryani.jpg';
import omelette from '../../assets/omelette.png';
import meals from '../../assets/meals.png';

const specialItems = [
    { id: 101, name: 'Veg Biriyani', image: veg },
    { id: 102, name: 'Gobi Manchurian', image: gobi },
    { id: 103, name: 'Chicken Kabab', image: kabab },
];

const initialItems = [
    {
        id: 1,
        name: 'Veg Biriyani',
        price: 50,
        image: veg,
        category: 'Lunch',
        isSelected: false,
        quantity: 1,
        isBookmarked: false,
    },
    {
        id: 2,
        name: 'Chicken Kabab',
        price: 25,
        image: kabab,
        category: 'Snacks',
        isSelected: true,
        quantity: 1,
        isBookmarked: true,
    },
    {
        id: 3,
        name: 'Omelette',
        price: 20,
        image: omelette,
        category: 'Brunch',
        isSelected: false,
        quantity: 1,
        isBookmarked: true,
    },
    {
        id: 4,
        name: 'Meals',
        price: 35,
        image: meals,
        category: 'Lunch',
        isSelected: true,
        quantity: 1,
        isBookmarked: false,
    },
];

const categories = ['All', 'Brunch', 'Lunch', 'Snacks', 'Drinks'];

const FoodCourtMenuPage = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [items, setItems] = useState(initialItems);

    const filteredItems = items.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) &&
            (selectedCategory === 'All' || item.category === selectedCategory)
    );

    const handleSelectChange = (id: number, checked: boolean) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, isSelected: checked } : item
            )
        );
    };

    const handleQuantityChange = (id: number, newQty: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: newQty } : item
            )
        );
    };

    const handleMenuClick = ({ key }: { key: string }) => {
        if (key === 'savoury') navigate('/savoury-menu');
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="savoury">Savoury</Menu.Item>
        </Menu>
    );

    return (
        <div className="savoury-page">
            {/* Header */}
            <div className="savoury-header">
                <ArrowLeftOutlined className="back-icon" onClick={() => navigate(-1)} />
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <h2 className="savoury-title">Food Court ▾</h2>
                </Dropdown>
            </div>

            {/* Search + Filter */}
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

            {/* Carousel */}
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
                        onSelectChange={handleSelectChange}
                        onQuantityChange={handleQuantityChange}
                        isBookmarked={item.id === 2 || item.id === 3} 
                    />
                ))}
            </div>

            <button className="view-cart-button">View Cart</button>
        </div>
    );
};

export default FoodCourtMenuPage;
