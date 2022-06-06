import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import NotoSansThin from '../styles/fonts/NotoSansKR-Thin.otf';
import NotoSansLight from '../styles/fonts/NotoSansKR-Light.otf';
import NotoSansRegular from '../styles/fonts/NotoSansKR-Regular.otf';
import NotoSansMedium from '../styles/fonts/NotoSansKR-Medium.otf';
import NotoSansBold from '../styles/fonts/NotoSansKR-Bold.otf';
import NotoSansBlack from '../styles/fonts/NotoSansKR-Black.otf';

const GlobalStyle = createGlobalStyle`
 ${reset};

 @font-face {
    font-family: "NotoSansKR-Thin";
        src: local("NotoSansKR-Thin"),
        url(${NotoSansThin}) format('woff');
        font-weight: 200;
        font-style: Thin;
}
@font-face {
    font-family: "NotoSansKR-Light";
        src: local("NotoSansKR-Light"),
        url(${NotoSansLight}) format('woff');
        font-weight: 300;
        font-style: Light;
}
@font-face {
    font-family: "NotoSansKR-Regular";
        src: local("NotoSansKR-Regular"),
        url(${NotoSansRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
}
@font-face {
    font-family: "NotoSansKR-Medium";
        src: local("NotoSansKR-Medium"),
        url(${NotoSansMedium}) format('woff');
        font-weight: 500;
        font-style: Medium;
}
@font-face {
    font-family: "NotoSansKR-Bold";
        src: local("NotoSansKR-Bold"),
        url(${NotoSansBold}) format('woff');
        font-weight: 600;
        font-style: Bold;
}
@font-face {
    font-family: "NotoSansKR-Black";
        src: local("NotoSansKR-Black"),
        url(${NotoSansBlack}) format('woff');
        font-weight: 700;
        font-style: Black;
}

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR' , sans-serif;
}

html,body
{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR' , sans-serif;
}


 a{
    text-decoration:none;
}


button{
    background:none;
    border:none;
    cursor:pointer;
}
`;

export default GlobalStyle;
