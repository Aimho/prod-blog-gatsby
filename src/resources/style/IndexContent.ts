import styled from 'styled-components';

const StyledIndexContent = styled.div`
    .card {
        display: grid;
        grid-template-columns:
            [date-start] repeat(4, 1fr) [date-end title-start desc-start more-start] repeat(8, 1fr)
            [title-end desc-end more-end];
        grid-template-rows: [title-start date-start] auto [title-end desc-start] auto [desc-end more-start] auto [more-end date-end];
        grid-column-gap: 18px;
        grid-row-gap: 12px;

        background-color: transparent;

        .title {
            grid-area: title;
        }
        .date {
            grid-area: date;
            span {
                display: inline-block;
                padding-top: 12px;
                border-top: solid 1px #000;
            }
        }
        .desc {
            grid-area: desc;
            color: #666;
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
                background: linear-gradient(rgba(255, 255, 255, 0), #fff);
            }
        }
        .more {
            grid-area: more;
            display: flex;
            align-items: center;
            padding-top: 12px;
        }

        .desc,
        .more {
            cursor: pointer;
            &:hover {
                text-decoration: underline #666;
            }
        }
    }
`;

export default StyledIndexContent;
