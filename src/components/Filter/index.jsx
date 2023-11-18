import { Input } from "./Filter.styled";

export const  Filter = ({ value, onChange }) => {
  return (
    <label>
      <p>Search by name</p>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </label>
  );
};
