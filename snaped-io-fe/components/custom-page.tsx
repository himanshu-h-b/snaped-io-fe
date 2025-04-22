import React from "react";

interface CustomPageProps {
  text: string;
}

const CustomPage: React.FC<CustomPageProps> = ({ text }) => {
  return (
    <div className="text-2xl bg-custom-gradient bg-clip-text text-gradient italic">
      {text}
    </div>
  );
};

export default CustomPage;
