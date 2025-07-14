import { useState } from 'react';
import './food-item-card.css';

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  isSelected: boolean;
  onQuantityChange?: (id: number, newQty: number) => void;
  onSelectChange?: (id: number, checked: boolean) => void;
}

const FoodItemCard = ({
  id,
  name,
  price,
  image,
  quantity,
  isSelected,
  onQuantityChange,
  onSelectChange
}: Props) => {
  const [qty, setQty] = useState(quantity);

  const handleDecrease = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      onQuantityChange?.(id, newQty);
    }
  };

  const handleIncrease = () => {
    const newQty = qty + 1;
    setQty(newQty);
    onQuantityChange?.(id, newQty);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectChange?.(id, e.target.checked);
  };

  return (
    <div className="food-card">
      <div className="food-image-container">
        <img src={image} alt={name} className="food-image" />
      </div>
      <div className="food-details">
        <div className="food-name">{name}</div>
        <div className="food-price">₹{price}</div>
      </div>
      <div className="food-quantity">
        <button onClick={handleDecrease}>-</button>
        <span>{qty}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="food-checkbox"
      />
    </div>
  );
};

export default FoodItemCard;
