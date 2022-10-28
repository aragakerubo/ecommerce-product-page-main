import { createGlobalStyle } from "styled-components";

// import KumbhSansEOT from "./fonts/kumbh-sans-v12-latin-regular.eot";
// import KumbhSansEOT2 from "./fonts/kumbh-sans-v12-latin-regular.eot?#iefix";
// import KumbhSansWOFF2 from "./fonts/kumbh-sans-v12-latin-regular.woff2";
// import KumbhSansWOFF from "./fonts/kumbh-sans-v12-latin-regular.woff";
// import KumbhSansTTF from "./fonts/kumbh-sans-v12-latin-regular.ttf";
// import KumbhSansSVG from "./fonts/kumbh-sans-v12-latin-regular.svg#KumbhSans";

export const GlobalStyles = createGlobalStyle`
    :root {
        --desktopWidth: 1280px;
        --mobileWidth: 375px;
        --orange: hsl(26, 100%, 55%);
        --paleOrange: hsl(25, 100%, 94%);
        --veryDarkBlue: hsl(220, 13%, 13%);
        --darkGrayishBlue: hsl(219, 9%, 45%);
        --grayishBlue: hsl(220, 14%, 75%);
        --lightGrayishBlue: hsl(223, 64%, 98%);
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 100%, 0%);
        --blackLine: hsla(0, 100%, 0%, 0.15);
        --blackBackground: hsla(0, 100%, 0%, 0.75);
    }

    ::-webkit-scrollbar {
        display: none;
    }
      
    * {
        box-sizing: border-box;
        font-family: 'Kumbh Sans', Helvetica, sans-serif;
    }

    body {
        margin: 0;
        padding: 0 12em;
        -ms-overflow-style: none;
        scrollbar-width: none;

        p {
            font-size: 16px;
            margin: 0;
        }

        @media (max-width: 1300px) {
            padding: 0;
        }
        
    }
`;
// @font-face {
//     font-family: 'Kumbh Sans';
//     font-style: normal;
//     font-weight: 400;
//     src: url(${KumbhSansEOT});
//     src: local(''),
//         url(${KumbhSansEOT2}) format('embedded-opentype'),
//         url(${KumbhSansWOFF2}) format('woff2'),
//         url(${KumbhSansWOFF}) format('woff'),
//         url(${KumbhSansTTF}) format('truetype'),
//         url(${KumbhSansSVG}) format('svg');
//     }
