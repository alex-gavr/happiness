import { FinishButton } from '@/styles/buttons';
import { FlexCCC, StyledSection } from '@/styles/core';
import React from 'react';

const QuizEnd = () => {

    const mainExitURL = 'https://waufooke.com/4/5708348';
    const mainPopsURL = 'https://mordoops.com/4/5708366';
    const ymName = 'MainExit';

    const handleMainExit = () => {
        // ym('reachGoal', `${ymName}`);
        // Main Exit
        window.open(mainExitURL, '_blank');
    };
    return (
        <StyledSection>
            <FlexCCC gap='1rem'>
                <h1>How do you feel?</h1>
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: 'clamp(0.9rem, 0.8250rem + 0.4000vw, 1.2rem)',
                        width: '90%',
                    }}>
                    Hopefully your day is a little better now 😁
                </p>
            </FlexCCC>
            <FinishButton href={mainPopsURL} onClick={handleMainExit}>
                Finish
            </FinishButton>
        </StyledSection>
    );
};

export default QuizEnd;
