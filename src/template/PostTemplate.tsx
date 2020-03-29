import React from 'react';

import Layout from '../components/Layout';
import { IPostTemplateProps } from './types';

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { title, html } = props.pageContext;
    return (
        <Layout>
            <h2>{title}</h2>
            {/* <h4>{date}</h4> */}
            <hr />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
