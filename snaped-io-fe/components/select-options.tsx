"use client";
import { IconType } from "react-icons/lib";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type OptionTypes = {
  options: {
    label: string;
    value: string;
    icon?: IconType;
  }[];
  placeholder?: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
  name?: string
};

const SelectOptions = (props: OptionTypes) => {
  return (
    <Select
      disabled={props.disabled}
      defaultValue={props.defaultValue}
      onValueChange={(value) => props.onChange(value)}
      name={props.name}
    >
      <SelectTrigger>
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        {props.options.map((option, index) => {
          return (
            <SelectItem
              key={index}
              value={option.value}
              className="flex flex-row items-center"
            >
              {/* {option.icon && <option.icon className="mr-2 h-4 w-4" />} */}
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export { SelectOptions };

