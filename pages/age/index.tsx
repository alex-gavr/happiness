import { AgreeButtonContainer, DisagreeButtonContainer, OptionsContainer, StyledEmoji, StyledSection } from '@/styles/styled';
import { useRouter } from 'next/router';
import React from 'react';
import ym from 'react-yandex-metrika';

const Age = () => {
    const router = useRouter();
    const handleClick = (i: boolean) => {
        if (i) {
            ym('reachGoal','adult')
            router.push('/thank-you');
        } else if (i === false) {
            ym('reachGoal','child')
            router.push('https://google.com');
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
