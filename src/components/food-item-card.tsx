import './food-item-card.css';
import { useState } from 'react';
import CheckboxWithQuantity from '../common-components/checkbox';

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  isSelected?: boolean;
  quantity?: number;
};

const FoodItemCard = ({ id: _id, name, price, image, isSelected = false, quantity = 1 }: Props) => {
  const [selected, setSelected] = useState(isSelected);
  const [qty, setQty] = useState(quantity);

  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-image" />
      <div className="food-details">
        <div className="food-info">
          <h3 className="food-name">{name}</h3>
          <p className="food-price">₹{price}</p>
        </div>

        <CheckboxWithQuantity
          selected={selected}
          onCheckChange={setSelected}
          quantity={qty}
          onQtyChange={setQty}
        />
      </div>
    </div>
  );
};

export default FoodItemCard;
