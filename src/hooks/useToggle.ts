import { useState } from "react";

const useToggle = (
  initialValue: boolean,
  onToggle?: (value: boolean) => void
): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => {
    const newValue = !value;
    setValue(newValue);
    onToggle?.(newValue);
  };

  return [value, toggleValue];
};

export default useToggle;
