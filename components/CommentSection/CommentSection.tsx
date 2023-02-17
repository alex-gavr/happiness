import { FlexCCC, FlexRCC } from '@/styles/core';
import React from 'react';
import Comment from './Comment';
import { comments } from './CommentsData';
import styled from 'styled-components';

const CommentsSlider = styled(FlexRCC)({
    gap: '1rem',
    width: 'clamp(17.5rem, 6.8750rem + 56.6667vw, 60rem)',
    overflowX: 'scroll',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem 0.5rem',
});
const StyledSubHeading = styled.h2(props => ({
    fontSize: 'clamp(1rem, 0.7500rem + 1.3333vw, 2rem)',
    color: props.theme.colors.paragraph 
}))

const CommentSection = () => {
    return (
        <div>
            <StyledSubHeading>What other people say</StyledSubHeading>
            <CommentsSlider>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </CommentsSlider>
        </div>
    );
};

const MemoizedCommentSection = React.memo(CommentSection);
export default MemoizedCommentSection;
