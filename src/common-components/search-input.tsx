import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './search-input.css';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput = ({ value, onChange, placeholder }: Props) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder || 'Search'}
      prefix={<SearchOutlined style={{ color: '#bbb' }} />}
      className="custom-search-input"
    />
  );
};

export default SearchInput;
