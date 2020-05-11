import React from 'react';
import { Grid, Chip } from '@material-ui/core';

interface Props {
    tags: string[];
}

const TagContent: React.FC<Props> = ({ tags }) => {
    if (!tags) return null;
    const chipStyle = {
        backgroundColor: '#999',
        color: '#fff',
        fontSize: '12px',
        height: '23px',
        borderRadius: '3px',
    };

    return (
        <Grid container spacing={1} style={{ marginBottom: '48px' }}>
            {tags.map((tag, index) => (
                <Grid item key={index}>
                    <Chip label={tag} size="small" style={chipStyle} />
                </Grid>
            ))}
        </Grid>
    );
};

export default TagContent;
