/**
 * set mobile media query in css
 * @param {any} changeStyle
 * @return {string} mediaQuery 스타일
 */
const setMobileCSS = (changeStyle: any, breakPoint?: number) => {
    // maxWidth 이하에서 적용할 style
    return `
      @media only screen and (max-width: ${breakPoint ? breakPoint : 960}px) {
        ${changeStyle}
      }
    `;
};

export default setMobileCSS;
