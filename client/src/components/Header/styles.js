import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  padding: 0rem 0rem;
  background-color: white;
  position: relative;
  box-shadow: 0 4px 6px -6px black;
  border-bottom-style: solid;
  border-bottom-color: #48CAE4;
  border-bottom-width: 5px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  padding: 20px 20px;
  margin-left: 0px;
  align-content: flex-end;
  .extra-logos {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 55px;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 1000px) {
    padding: 0px 0px;
  }
`;


export const Span = styled.span`
  cursor: pointer;
`;

export const CallBox = styled.div`
  text-align: right;
  padding: 0px;
  float: right;
  margin-right: 0px;
  padding: 14px;
  @media only screen and (max-width: 768) {
    margin-right: 10px;
  }
`;
