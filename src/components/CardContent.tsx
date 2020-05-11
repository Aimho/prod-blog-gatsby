import React from 'react';
import { Typography, Container } from '@material-ui/core';

import TagContent from './TagContent';

interface Props {
    createdAt: string;
    title: string;
    description: string;
    tags: string[];
    onClick: () => void;
}

const CardContent: React.FC<Props> = props => (
    <Container maxWidth="md">
        <div className="card">
            <div className="date">
                <Typography variant="caption">{props.createdAt}</Typography>
            </div>
            <div className="title" onClick={props.onClick}>
                <Typography variant="h4">{props.title}</Typography>
            </div>
            <div className="desc" onClick={props.onClick}>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
            </div>
            <div className="tag">
                <TagContent tags={props.tags} />
            </div>
        </div>
    </Container>
);

export default CardContent;
