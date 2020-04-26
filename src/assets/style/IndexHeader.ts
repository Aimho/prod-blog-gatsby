import styled from 'styled-components';

const StyledIndexHeader = styled.div`
    padding-top: 128px;
    padding-bottom: 64px;
    margin-bottom: 100px;
    background-color: #000;

    .card {
        display: grid;
        grid-template-columns:
            [date-start title-start] repeat(6, 1fr) [title-end desc-start date-end more-start] repeat(6, 1fr)
            [desc-end more-end];
        grid-template-rows: [title-start desc-start] auto [title-end desc-end date-start more-start] auto [date-end more-end];
        grid-column-gap: 24px;
        grid-row-gap: 56px;

        background-color: transparent;
        color: #fff;

        .title {
            grid-area: title;
        }
        .date {
            grid-area: date;
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
        .more {
            grid-area: more;
            display: flex;
            align-items: center;
            padding-top: 12px;
            border-top: solid 1px #fff;
        }

        .desc,
        .more {
            cursor: pointer;
            &:hover {
                text-decoration: underline #eee;
            }
        }
    }
`;

export default StyledIndexHeader;
