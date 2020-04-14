import React, { createRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

const StyledUtterances = styled.div`
    margin: 60px auto;
`;

interface IUtterancesProps {
    repo: string;
}

const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo }) => {
    const containerRef = createRef<HTMLDivElement>();
    const src = 'https://utteranc.es/client.js';

    useLayoutEffect(() => {
        const utterances = document.createElement('script');

        const attributes = {
            src,
            repo,
            'issue-term': 'pathname',
            label: 'comment',
            crossOrigin: 'anonymous',
            async: 'true',
        };

        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });

        containerRef.current.appendChild(utterances);
    }, [repo]);

    return <StyledUtterances ref={containerRef} style={{ width: '100%' }} />;
});

export default Utterances;
