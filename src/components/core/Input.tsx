import { cj } from "@/utils/classJoin";
import { useState } from "react";

type TInputProps = {
  label?: string;
  placeholder?: string;
  className?: string;
  onChange: (value: string) => void;
};

export const Input = ({ label, placeholder, onChange, className }: TInputProps) => {
  const [percentage, setPercentage] = useState<number | "">("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = Number(value);

    if (value === "" || (numberValue >= 0 && numberValue <= 100)) {
      setPercentage(value === "" ? "" : numberValue);
      onChange(value);
    }
  };

  return (
    <div className={cj("flex items-center p-4 mt-4 w-full", className)}>
      <label htmlFor="percentage-input" className="text-sm font-semibold ml-2">
        {label ?? ""}
      </label>
      <input
        id="percentage-input"
        type="number"
        value={percentage}
        onChange={handleChange}
        min={0}
        max={100}
        placeholder={placeholder ?? ""}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:text-neutral-darker "
      />
    </div>
  );
};

