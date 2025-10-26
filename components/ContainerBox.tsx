import React from "react";

const ContainerBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
};

export default ContainerBox;
