/**
 * set mobile media query in css
 * @param {any} changeStyle
 * @return {string} mediaQuery 스타일
 */
const setMobileCSS = (changeStyle: any) => {
    // maxWidth 이하에서 적용할 style
    return `
      @media only screen and (max-width: 960px) {
        ${changeStyle}
      }
    `;
};

export default setMobileCSS;
