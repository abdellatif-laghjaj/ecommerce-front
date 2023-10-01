import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { useRouter } from "next/router"; // Import the useRouter hook
import BarsIcon from "@/components/icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;

  // Apply hover effect
  &:hover {
    color: #fff;
  }

  // Check if the link is active and apply the active class
  &.active {
    color: #fff;
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const router = useRouter(); // Get the router object

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Amaximos</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"} className={router.pathname === "/" ? "active" : ""}>
              Home
            </NavLink>
            <NavLink href={"/products"} className={router.pathname === "/products" ? "active" : ""}>
              Products
            </NavLink>
            <NavLink href={"/cart"} className={router.pathname === "/cart" ? "active" : ""}>
              Cart ({cartProducts.length})
            </NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
