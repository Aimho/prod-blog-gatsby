import styled from 'styled-components';
import setMobileCSS from '../../utils/setMobileCSS';

const StyledIndexHeader = styled.div`
    padding-top: 128px;
    padding-bottom: 64px;
    margin-bottom: 100px;
    background-color: #000;

    ${setMobileCSS(`
      padding-top: 64px;
      padding-bottom: 32px;
      margin-bottom: 50px;
    `)}

    .card {
        background-color: transparent;
        color: #fff;

        display: grid;
        grid-template-columns:
            [date-start title-start] repeat(6, 1fr) [title-end desc-start date-end tag-start] repeat(6, 1fr)
            [desc-end tag-end];
        grid-template-rows: [title-start desc-start] auto [title-end desc-end date-start tag-start] auto [date-end tag-end];
        grid-column-gap: 24px;
        grid-row-gap: 24px;

        ${setMobileCSS(`
          grid-template-columns:
              [title-start desc-start tag-start] repeat(12, 1fr) [title-end desc-end tag-end];
          grid-template-rows: [title-start title-end] auto [desc-start desc-end] auto [tag-start tag-end];
          grid-column-gap: 16px;
          grid-row-gap: 16px;
        `)}

        .title {
            grid-area: title;
            ${setMobileCSS(`> h3 {font-size: 28px;}`)}
        }
        .date {
            grid-area: date;
            ${setMobileCSS(`display: none;`)}
            span {
                display: inline-block;
                padding-top: 12px;
                border-top: solid 1px #fff;
            }
        }
        .desc {
            grid-area: desc;
            color: #cfcfcf;
            height: calc(5 * 24px);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5; /* 라인수 */
            -webkit-box-orient: vertical;
            word-wrap: break-word;
            p {
                position: relative;
                line-height: 24px;
            }
            p::after {
                display: block;
                position: absolute;
                content: '';
                pointer-events: none;
                top: 0;
                left: 0;
                width: 100%;
                height: 196px;
                background: linear-gradient(rgba(18, 18, 18, 0), #121212);
            }
        }
        .tag {
            grid-area: tag;
            display: flex;
            align-items: center;
            padding-top: 12px;
            border-top: solid 1px #fff;
            ${setMobileCSS(`
              border-top: solid 1px #fff;
              justify-content: flex-end;
            `)}
        }
        .title,
        .desc {
            cursor: pointer;
            &:hover {
                text-decoration: underline #666;
            }
        }
    }
`;

export default StyledIndexHeader;
