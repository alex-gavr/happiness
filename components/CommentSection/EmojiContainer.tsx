import { FlexRCC } from '@/styles/core';
import { useState } from 'react';
import styled from 'styled-components';
import { IEmoji } from './CommentsData';

const StyledContainer = styled(FlexRCC)<{ clicked: boolean; emoji: string }>((props) => ({
    gap: '0.5rem',
    backgroundColor:
        props.clicked && props.emoji === '👍'
            ? props.theme.colors.green
            : props.clicked && props.emoji === '👎'
            ? props.theme.colors.red
            : props.clicked && props.emoji === '😁'
            ? props.theme.colors.secondary
            : '',
    border: `1px solid ${props.theme.colors.componentBackground}`,
    padding: '0.5rem 0.7rem',
    borderRadius: '0.5rem',
    transitionDuration: '2s',
}));
const StyledSpan = styled.span<{ clicked: boolean }>((props) => ({
    color: props.clicked ? props.theme.colors.white : props.theme.colors.title,
}));

interface IProps {
    emoji: IEmoji;
}

const EmojiContainer = ({ emoji }: IProps) => {
    const [clicked, setClicked] = useState(false);
    const [number, setNumber] = useState(emoji.count);

    const handleClick = () => {
        if (!clicked) {
            setClicked(true);
            setNumber(number + 1);
        }
    };

    return (
        <StyledContainer onClick={handleClick} clicked={clicked} emoji={emoji.emoji}>
            <StyledSpan clicked={clicked}>{emoji.emoji}</StyledSpan>
            <StyledSpan clicked={clicked}>{number}</StyledSpan>
        </StyledContainer>
    );
};

export default EmojiContainer;
