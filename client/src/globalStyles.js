import { createGlobalStyle } from 'styled-components';
 
const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Montserrat','Ubuntu', sans-serif;
    }
    @font-face {
        font-family:'Gotham' ;
        src: local('Gotham'),url('./fonts/Gotham-Fonts/Gotham-Thin.tff') format('truetype');
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #000;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Montserrat', sans-serif;
        color: #084566;
        line-height: 1.0rem;
    }

    .light-span {
        color: #b6dbe3;
        font-size: 15px;
        line-height: 1.0rem;
    }

    p {
        color: #008fc0;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #008fc0;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    #blue-zip-border {
        
    }

    .ant-col {
        padding: 0px;
        margin: 0px;
    }

    .ant-row {
        margin-left: 0px;
        margin-right: 0px;
    }

    .ant-col .ant-col-xs-24 .ant-col-xl-16 {
        padding: 0px;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }

    .ant-picker {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    .ant-input:hover {
        background-color: white;
    }

    .ant-select-selector, .ant-select-selector:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    .ant-btn {
        @media only screen and (max-width: 1000px) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .ant-input {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    .ant-input::placeholder {
        color: rgb(0,73,122);
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 500;
     }
    
     .ant-picker-input input::placeholder {
        color: rgb(0,73,122);
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 500;
     }
    .ant-input-affix-wrapper {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    .ant-input-affix-wrapper > .ant-input {
        box-shadow: none;
    }

    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border-radius: 6px;
    }

    .ant-select-selection-placeholder {
        color: rgb(0,73,122);
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 500;
    }
    .ant-form-item-label > label {
        font-weight: 600;
    }
    
    .ant-form-item-required {
        font-weight: 600;
    }

    .ant-form-item-explain.ant-form-item-explain-error {
        font-weight: 600;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: #084566;
    }
    .collapse-container-custom {
        border: none;
    }

    .collapse-container-custom > .ant-collapse-item {
        border-bottom: none;
    }

    .collapse-panel-custom {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;
        border: 0;
        border-bottom: none;
        background: white;
    }

    .collapse-panel-custom > .ant-collapse-header {
        width: 100%;
        background: var(--header-bg, #dff0f2);
    }

    .collapse-panel-custom > .ant-collapse-content {
        width: 100%;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    /* Modal styles  */
    .ant-modal-header {
        background-color: #278bbe;
        .ant-modal-title {
            color: white;
        }
    }
    .ant-modal-close-x {
        .anticon {
            background-color: white;
            border-radius: 20px;
            padding: 5px;
        }
    }

    .MuiInputBase-input {
        color: rgba(0, 0, 0, 0.65) !important;
        font-family: 'Montserrat','Ubuntu', sans-serif !important;
    }
`;

export default Styles;
