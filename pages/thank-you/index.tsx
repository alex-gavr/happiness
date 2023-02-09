import { useAppSelector } from '@/services/hook';
import { FinishButton, StyledSection } from '@/styles/styled';
import React from 'react';
import ym from 'react-yandex-metrika';

const ThankYou = () => {
    const { exit } = useAppSelector((state) => state.globalState);

    const handleMainExit = () => {
        // TODO: add pops and main exits
        ym('reachGoal', `${exit}`);
    };
    return (
        <StyledSection>
            <h1>Thank you for participation!</h1>
            <p style={{textAlign: 'center'}}>
                Try to be more grateful for what you already have <br /> That&apos;s the secrete to endless happiness
            </p>
            <p>You might benefit from this 👇 Try it!</p>
            <FinishButton href={'https://augailou.com/4/5698444'} onClick={handleMainExit}>
                Check it out
            </FinishButton>
        </StyledSection>
    );
};

export default ThankYou;
