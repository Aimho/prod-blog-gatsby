import React from 'react';
import { navigate } from 'gatsby';
import { Typography, Container } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import LatestPostListQuery from '../query/LatestPostListQuery';
import StyledIndexHeader from '../resources/style/IndexHeader';
import StyledIndexContent from '../resources/style/IndexContent';

const IndexPage: React.FC = () => {
    const data = LatestPostListQuery();
    const isData = data && data.length > 0;

    const IndexHeader = () => {
        if (!isData) return null;

        const fields = data[0].node.fields;
        const frontmatter = data[0].node.frontmatter;
        const rawMarkdownBody = data[0].node.rawMarkdownBody;

        return (
            <div className="card">
                <div className="title">
                    <Typography variant="h2">{frontmatter.title}</Typography>
                </div>
                <div className="date">
                    <Typography variant="caption">{frontmatter.createdAt}</Typography>
                </div>
                <div className="desc" onClick={() => navigate(`/${fields.slug}`)}>
                    <Typography variant="body2" component="p">
                        {rawMarkdownBody}
                    </Typography>
                </div>
                <div className="more" onClick={() => navigate(`/${fields.slug}`)}>
                    <Typography variant="caption" component="p">
                        자세히보기
                    </Typography>
                    <ChevronRight fontSize="small" />
                </div>
            </div>
        );
    };

    return (
        <Layout isLoading={!isData}>
            <StyledIndexHeader>
                <Container maxWidth="md">{IndexHeader()}</Container>
            </StyledIndexHeader>

            <StyledIndexContent>
                <Container maxWidth="md">
                    <SEO title="AimHo | Home" />

                    {isData &&
                        data.map(d => {
                            const id = d.node.id;
                            const fields = d.node.fields;
                            const frontmatter = d.node.frontmatter;
                            const rawMarkdownBody = d.node.rawMarkdownBody;

                            return (
                                <div className="card" key={id}>
                                    <div className="date">
                                        <Typography variant="caption">{frontmatter.createdAt}</Typography>
                                    </div>
                                    <div className="title">
                                        <Typography variant="h4">{frontmatter.title}</Typography>
                                    </div>
                                    <div className="desc" onClick={() => navigate(`/${fields.slug}`)}>
                                        <Typography variant="body2" component="p">
                                            {rawMarkdownBody}
                                        </Typography>
                                    </div>
                                    <div className="more" onClick={() => navigate(`/${fields.slug}`)}>
                                        <Typography variant="caption" component="p">
                                            자세히보기
                                        </Typography>
                                        <ChevronRight fontSize="small" />
                                    </div>
                                </div>
                            );
                        })}
                </Container>
            </StyledIndexContent>
        </Layout>
    );
};

export default IndexPage;
