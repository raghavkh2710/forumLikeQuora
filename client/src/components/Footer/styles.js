import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  background: rgb(249, 250, 252);
  padding: 2.5rem 0;
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled.section`
  background: rgb(249, 250, 252);
  position: relative;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  margin: 30px auto 5px;
  padding-bottom: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
`;

export const FooterDesc = styled.div`
  width: 100%;
  font-size: 11px;
`;
