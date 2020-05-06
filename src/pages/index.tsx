import React, { Fragment } from 'react';
import { navigate } from 'gatsby';
import { Typography, Container, Button } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import StyledIndexHeader from '../resources/style/IndexHeader';
import StyledIndexContent from '../resources/style/IndexContent';
import { QGetPosts } from '../utils/query';

const IndexPage: React.FC = () => {
    const data = QGetPosts();
    const isData = data && data.length > 0;

    return (
        <Layout isLoading={!isData}>
            <Fragment>
                <SEO title="AimHo | Home" />

                {isData &&
                    data.map((d, index) => {
                        const id = d.node.id;
                        const fields = d.node.fields;
                        const frontmatter = d.node.frontmatter;
                        const rawMarkdownBody = d.node.rawMarkdownBody;
                        const onClick = () => navigate(`/${fields.slug}`);

                        const cardContent = (
                            <Container maxWidth="md">
                                <div className="card">
                                    <div className="date">
                                        <Typography variant="caption">{frontmatter.createdAt}</Typography>
                                    </div>
                                    <div className="title">
                                        <Typography variant="h4">{frontmatter.title}</Typography>
                                    </div>
                                    <div className="desc" onClick={onClick}>
                                        <Typography variant="body2" component="p">
                                            {rawMarkdownBody}
                                        </Typography>
                                    </div>
                                    <div className="more" onClick={onClick}>
                                        <Typography variant="caption" component="p">
                                            자세히보기
                                        </Typography>
                                        <ChevronRight fontSize="small" />
                                    </div>
                                </div>
                            </Container>
                        );

                        if (index === 0) return <StyledIndexHeader key={id}>{cardContent}</StyledIndexHeader>;
                        if (index === data.length - 1) return <Button size="small">더 보기</Button>;

                        return <StyledIndexContent key={id}>{cardContent}</StyledIndexContent>;
                    })}
            </Fragment>
        </Layout>
    );
};

export default IndexPage;
