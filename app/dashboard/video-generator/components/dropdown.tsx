import { SelectOptions } from "@/components/select-options";

interface DropdownProps {
  options: any[];
  onChange: () => void;
  label: string;
  name: string;
}

const Dropdown = ({ options, onChange, label, name }: DropdownProps) => {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-[#121212] dark:text-gray-200 mb-1"
      >
        {label}
      </label>
      <SelectOptions
        name={name}
        placeholder="Select"
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default Dropdown;
