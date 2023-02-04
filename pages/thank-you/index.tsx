import { FinishButton, StyledSection } from '@/styles/styled';
import React from 'react';
import ym from 'react-yandex-metrika';

const ThankYou = () => {
    const handleMainExit = () => {
        ym('reachGoal','mainExit');
    }
    return (
        <StyledSection>
            <h1>Thank you for participation!</h1>
            <p>You might benefit from this 👇</p>
            <FinishButton href={'https://google.com'} onClick={handleMainExit}>Check it out</FinishButton>
        </StyledSection>
    );
};

export default ThankYou;
