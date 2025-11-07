import React from "react";

const ContainerBox = ({
  children,
  addClassName,
}: {
  children: React.ReactNode;
  addClassName?: string;
}) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${addClassName}`}>
      {children}
    </div>
  );
};

export default ContainerBox;
