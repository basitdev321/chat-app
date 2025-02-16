import React from "react";
import { FooterContainer } from "./index.styles";
import Link from "@/components/design-components/link";

const Header: React.FC = () => {
  return (
    <FooterContainer>
      <Link
        to="https://github.com/basitk41"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github"></i>
      </Link>
      <span>© 2025 Bita</span>
    </FooterContainer>
  );
};

export default Header;
