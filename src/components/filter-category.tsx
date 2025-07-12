// src/components/FilterCategory.tsx

import { Tag } from 'antd';
import './filter-category.css';

type Props = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

const FilterCategory = ({ categories, selected, onSelect }: Props) => {
  return (
    <div className="filter-category-scroll">
      {categories.map((cat) => (
        <Tag
          key={cat}
          className={`filter-tag ${selected === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </Tag>
      ))}
    </div>
  );
};

export default FilterCategory;
