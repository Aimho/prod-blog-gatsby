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

    ul {
        li > p {
            margin: 0px;
        }
        li > p + ul {
            margin-top: 0px;
            margin-bottom: 12px;
        }
    }

    blockquote {
        border-left: solid 5px #999999;
        background-color: #f5f5f5;
        margin: 0px;
        padding: 0.5em 40px;
        opacity: 0.8;
    }

    code.language-text {
        background-color: #2085ff;
        color: #fff;
        font-size: 12px;
        padding: 4px;
        margin: 0 2px;
    }
    .gatsby-highlight > pre {
        background-color: #f5f5f5;
    }
    .date {
        padding-left: 3px;
    }

    .gatsby-resp-image-figure {
        margin: 0px -32px;
        ${setMobileCSS(`margin: 0px;`)}
    }
    .gatsby-resp-image-wrapper {
        max-width: initial !important;
        margin: 0px;
    }
    .gatsby-resp-image-figcaption {
        display: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        border-bottom: solid 3px #70b6ff;
        &:hover {
            border-color: #2085ff;
        }
    }
`;

export default StyledPostContent;

function setFontSize(lineHeight: number, fontWeight: number) {
    return `
      line-height: ${lineHeight}px;
      font-weight: ${fontWeight};
    `;
}
