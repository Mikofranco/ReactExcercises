import React from "react";
import styled from "styled-components";
import HeroSec from "./HeroSec";

const Container = styled.div``;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
`;
const List = styled.li`
  list-style: none;
`;
const Link = styled.a``;
const Logo = styled.div``;
const LinksWrap = styled.div``;
const LoginBtn = styled.button`
  bacground-color: white;
  font-size: 16px;
  padding: 10px;
`;
const HeroContainer = styled.div`
  display: flex;
`;

const SlidingHeroSec = () => {
  return (
    <div>
      <NavBar>
        <Logo>Bluma</Logo>
        <LinksWrap>
          <ul style={{ display: "flex", gap: "60px" }}>
            <List>
              <Link>Product</Link>
            </List>
            <List>
              <Link>Developers</Link>
            </List>
            <List>
              <Link>Something</Link>
            </List>
            <List>
              <Link>Solution</Link>
            </List>
            <List>
              <Link>Resource</Link>
            </List>
          </ul>
        </LinksWrap>

        <div className="login">
          <LoginBtn>Login</LoginBtn>
        </div>
      </NavBar>
      <HeroContainer>
        <HeroSec
          header="Transaction"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Vero eius consequatur sint possimus architecto corrupti cupiditate 
         ipsum porro dolore corporis qui labore mollitia beatae quaerat non, repudiandae vero?"
        />
      </HeroContainer>
    </div>
  );
};

export default SlidingHeroSec;
