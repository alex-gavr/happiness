import { incrementQuestionNumber } from '@/services/globalStateSlice';
import { useAppDispatch } from '@/services/hook';
import { AgreeContainer, DisagreeContainer } from '@/styles/buttons';
import { StyledSection } from '@/styles/core';
import { OptionsContainer, StyledEmoji } from '@/styles/styled';
import { useRouter } from 'next/router';
import { event } from 'nextjs-google-analytics';
import React from 'react';
import ym from 'react-yandex-metrika';

const Age = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const teenExitURL = 'https://waufooke.com/4/5708376';
    const teenPopsURL = 'https://thefacux.com/4/5708375';

    const handleClick = (i: boolean) => {
        dispatch(incrementQuestionNumber());
        if (i) {
            event('adult', { value: 1 });
            ym('reachGoal', 'adult');
            router.push('/thank-you');
        } else if (i === false) {
            event('child', { value: 1 });
            ym('reachGoal', 'child');
            // Teen Exit
            window.open(teenExitURL, '_blank');
        }
    };
    return (
        <StyledSection>
            <h1>Are you 18 or older?</h1>
            <OptionsContainer>
                <AgreeContainer onClick={() => handleClick(true)}>
                    <p>Yes</p>
                    <StyledEmoji>✅</StyledEmoji>
                </AgreeContainer>
                <DisagreeContainer style={{ width: 'auto', height: 'auto' }} as='a' href={teenPopsURL} onClick={() => handleClick(false)}>
                    <p>No</p>
                    <StyledEmoji>❌</StyledEmoji>
                </DisagreeContainer>
            </OptionsContainer>
        </StyledSection>
    );
};

export default Age;
