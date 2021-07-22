import styled from 'styled-components';
import {Menu} from 'antd';

export const StyledMenu = styled(Menu)`
    background: white !important;
    color: black !important;
`;

export const StyledMenuItem = styled(Menu.Item)`
    background: white !important;
    color: black !important;
    &:hover {
        background-color: red;
    }
    &:focused {
        background-color: pink;
    }
`;