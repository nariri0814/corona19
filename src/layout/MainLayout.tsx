import React, { HTMLAttributes } from "react";
import { StyledHeader, StyledMain } from "../StyledComponents/StyledComponents";
interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  return (
    <>
      <StyledHeader>
        <div className="inner">
          <h1>COVID-19 국내 현황</h1>
        </div>
      </StyledHeader>
      <StyledMain>
        <h2>코로나바이러스-19</h2>
        {children}
      </StyledMain>
    </>
  );
};
