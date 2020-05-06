import styled from 'styled-components';

const StyledPostContent = styled.div`
    padding: 24px 0px;

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
        left: -16px !important;
        width: calc(100% + 32px) !important;
    }

    .gatsby-highlight > pre {
        background-color: #f5f5f5;
    }
`;

export default StyledPostContent;

function setFontSize(lineHeight: number, fontWeight: number) {
    return `
      line-height: ${lineHeight}px;
      font-weight: ${fontWeight};
    `;
}
