import React from "react";

const ContainerMain = ({ children }: { children: React.ReactNode }) => {
  return <section className="py-40">{children}</section>;
};

export default ContainerMain;
