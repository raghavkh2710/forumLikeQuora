import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: #48CAE4;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BannerInnerContainer = styled.div`
    width: 60%;
    height: 70vh;
    background-color: white;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px) {
        width: 95%;
    }
`;

export const BannerSideImage = styled.div`
    height: 100%;
    background: url('/img/media/banner_1.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;