import { StyledAnswer } from '@/styles/styled';
import React from 'react';

interface IProps {
    answer: string;
    emoji: string;
}

const AnswerOption = ({answer, emoji}: IProps) => {
    return (
        <StyledAnswer>
            <p>{answer}</p>
            <span>{emoji}</span>
        </StyledAnswer>
    );
};

export default AnswerOption;
