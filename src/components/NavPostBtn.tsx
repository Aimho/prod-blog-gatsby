import React from 'react';
import { navigate } from 'gatsby';

import { Button, Typography } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

interface Props {
    isNext?: boolean;
    path: string;
    title: string;
}

const NavPostBtn: React.FC<Props> = props => {
    const align = props.isNext ? 'right' : 'left';
    const icon = props.isNext ? { endIcon: <ChevronRight /> } : { startIcon: <ChevronLeft /> };
    const caption = props.isNext ? '다음 포스트' : '이전 포스트';

    return (
        <Button
            {...icon}
            style={{ textAlign: align, color: '#83B8FF' }}
            onClick={() => navigate(props.path)}
            variant="text"
        >
            <div>
                <Typography variant="caption">{caption}</Typography>
                <br />
                <Typography variant="subtitle1">{props.title}</Typography>
            </div>
        </Button>
    );
};

export default NavPostBtn;
