import React, { useState } from 'react';
import { navigate } from 'gatsby';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import TagAside from '../components/TagAside';
import CardContent from '../components/CardContent';
import StyledIndexHeader from '../resources/style/IndexHeader';
import StyledIndexContent from '../resources/style/IndexContent';
import staticQuery from '../utils/staticQuery';
import { isValidArray } from '../utils/checker';

// Todo: List 더 보기 버튼

const IndexPage: React.FC = () => {
    const [fadeIn, setFadeIn] = useState(undefined);
    const posts = staticQuery().getPosts;

    return (
        <Layout in={fadeIn}>
            <SEO title="Home" />

            {isValidArray(posts) &&
                posts.map((d, index) => {
                    const id = d.node.id;
                    const fields = d.node.fields;
                    const frontmatter = d.node.frontmatter;
                    const onClick = () => {
                        setFadeIn(false);
                        navigate(`/${fields.slug}`);
                    };

                    if (index === 0)
                        return (
                            <StyledIndexHeader key={id}>
                                <CardContent {...frontmatter} onClick={onClick} />
                            </StyledIndexHeader>
                        );

                    return (
                        <StyledIndexContent key={id}>
                            <CardContent {...frontmatter} onClick={onClick} />
                            <TagAside onFadeIn={() => setFadeIn(false)} />
                        </StyledIndexContent>
                    );
                })}
        </Layout>
    );
};

export default IndexPage;
