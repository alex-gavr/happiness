import { incrementQuestionNumber } from '@/services/globalStateSlice';
import { useAppDispatch } from '@/services/hook';
import { AgreeButtonContainer, DisagreeButtonContainer, OptionsContainer, StyledEmoji, StyledSection } from '@/styles/styled';
import { useRouter } from 'next/router';
import React from 'react';
import ym from 'react-yandex-metrika';

const Age = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleClick = (i: boolean) => {
        // TODO: add pops and main exits
        dispatch(incrementQuestionNumber());
        if (i) {
            ym('reachGoal', 'adult');
            router.push('/thank-you');
        } else if (i === false) {
            ym('reachGoal', 'child');
            router.push('https://whairtoa.com/4/5698334');
        }
    };
    return (
        <StyledSection>
            <h1>Are you 18 or older?</h1>
            <OptionsContainer>
                <AgreeButtonContainer onClick={() => handleClick(true)}>
                    <p>Yes</p>
                    <StyledEmoji>✅</StyledEmoji>
                </AgreeButtonContainer>
                <DisagreeButtonContainer onClick={() => handleClick(false)}>
                    <p>No</p>
                    <StyledEmoji>❌</StyledEmoji>
                </DisagreeButtonContainer>
            </OptionsContainer>
        </StyledSection>
    );
};

export default Age;
