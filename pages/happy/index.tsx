import AnswerOption from '@/components/Answer';
import { OptionsContainer, StyledSection } from '@/styles/styled';
import React from 'react';

const answers = [
    {
        answer: 'Family',
        emoji: '❤️',
    },
    {
        answer: 'Friends',
        emoji: '🤗',
    },
    {
        answer: 'Sex',
        emoji: '🍓',
    },
    {
        answer: 'Money',
        emoji: '💰',
    },
    {
        answer: 'Work',
        emoji: '💼',
    },
    {
        answer: 'Memes',
        emoji: '😂',
    },
    {
        answer: 'New Technologies',
        emoji: '📱',
    },
    {
        answer: 'Other',
        emoji: '😏',
    },
];

const Happy = () => {
    
    return (
        <StyledSection>
            <h1>What makes you feel the most happy?</h1>
            <OptionsContainer>
                {answers.map((answer, index) => (
                    <AnswerOption key={index} answer={answer.answer} emoji={answer.emoji} />
                ))}
            </OptionsContainer>
        </StyledSection>
    );
};

export default Happy;
