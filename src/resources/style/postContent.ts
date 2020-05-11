import styled from 'styled-components';
import setMobileCSS from '../../utils/setMobileCSS';

const StyledPostContent = styled.div`
    position: relative;
    margin: 24px 0px;
    color: #5e6467;

    h1,
    h2,
    h3,
    h4 {
        color: #000;
    }

    h1 {
        font-size: 40px;
        ${setFontSize(60, 600)}
    }
    h2 {
        ${setFontSize(48, 600)}
    }
    h3 {
        ${setFontSize(40, 600)}
    }
    h4 {
        ${setFontSize(32, 600)}
    }
    h5 {
        ${setFontSize(24, 600)}
    }
    h6 {
        ${setFontSize(20, 600)}
    }
    p {
        ${setFontSize(24, 400)}
    }

    img {
        left: -32px !important;
        width: calc(100% + 64px) !important;
        ${setMobileCSS(`
          left: 0px !important;
          width: 100% !important;
        `)}
    }

    .gatsby-highlight > pre {
        background-color: #f5f5f5;
    }
    .date {
        padding-left: 3px;
    }
`;

export default StyledPostContent;

function setFontSize(lineHeight: number, fontWeight: number) {
    return `
      line-height: ${lineHeight}px;
      font-weight: ${fontWeight};
    `;
}
