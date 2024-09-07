import { FC } from "react";

type OutlinedIconProps = {
  children: React.ReactNode;
};

const OutlinedIcon: FC<OutlinedIconProps> = ({ children }) => {
  return (
    <div className="rounded-[50%] border transition-all duration-300 border-[#2a2a2a] bg-[#FFFFFF1A] hover:border-white p-1.5">
      {children}
    </div>
  );
};
export default OutlinedIcon;
