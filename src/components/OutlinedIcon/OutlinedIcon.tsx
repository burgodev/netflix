import { FC } from "react";

type OutlinedIconProps = {
  children: React.ReactNode;
};

const OutlinedIcon: FC<OutlinedIconProps> = ({ children }) => {
  return (
    <div className="rounded-[50%] border border-gray-300 p-2">{children}</div>
  );
};
export default OutlinedIcon;
