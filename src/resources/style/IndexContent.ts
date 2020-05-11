import styled from 'styled-components';
import setMobileCSS from '../../utils/setMobileCSS';

const StyledIndexContent = styled.div`
    position: relative;
    max-width: 1440px;
    margin: 0 auto;

    .card {
        background-color: transparent;
        display: grid;
        grid-template-columns:
            [date-start] repeat(3, 1fr) [date-end title-start desc-start tag-start] repeat(9, 1fr)
            [title-end desc-end tag-end];
        grid-template-rows: [title-start date-start] auto [title-end desc-start] auto [desc-end tag-start] auto [tag-end date-end];
        grid-column-gap: 18px;
        grid-row-gap: 12px;

        ${setMobileCSS(`
          grid-template-columns:
              [title-start desc-start tag-start] repeat(12, 1fr) [title-end desc-end tag-end];
          grid-template-rows: [title-start title-end] auto [desc-start desc-end] auto [tag-start tag-end];
          grid-column-gap: 14px;
          grid-row-gap: 14px;
        `)}

        .title {
            grid-area: title;
            ${setMobileCSS(`> h4 {font-size: 20px;}`)}
        }
        .date {
            grid-area: date;
            ${setMobileCSS(`display: none;`)}
            span {
                display: inline-block;
                padding-top: 12px;
                border-top: solid 1px #000;
            }
        }
        .desc {
            grid-area: desc;
            color: #666;
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
                background: linear-gradient(rgba(255, 255, 255, 0), #fff);
            }
        }
        .tag {
            grid-area: tag;
            display: flex;
            align-items: center;
            padding-top: 12px;
            ${setMobileCSS(`
              padding-top: 4px;
              padding-bottom: 12px;
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

export default StyledIndexContent;
