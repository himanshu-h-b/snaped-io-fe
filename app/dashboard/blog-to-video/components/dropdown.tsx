import { SelectOptions } from "@/components/select-options";
import React from "react";

interface DropdownProps {
  options: any[];
  onChange: () => void;
  label: string;
}

const Dropdown = ({ options, onChange, label }: DropdownProps) => {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-200 mb-1"
      >
        {label}
      </label>
      <SelectOptions
        placeholder="Select"
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default Dropdown;
