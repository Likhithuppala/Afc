import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './search-input.css';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const SearchInput = ({ value, onChange, placeholder = 'Search...' }: Props) => {
  return (
    <Input
      prefix={<SearchOutlined />}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="search-input"
      allowClear
    />
  );
};

export default SearchInput;
