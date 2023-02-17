import { StartButton } from '@/styles/buttons';
import { FlexCCC, StyledSection } from '@/styles/core';
import { StyledIndexHeading } from '@/styles/styled';
import ym from 'react-yandex-metrika';

export default function Home() {
    const handleClick = () => {
        ym('reachGoal', 'start');
    };
    return (
        <StyledSection>
            <FlexCCC gap='0.8rem' style={{ marginTop: '5rem' }}>
                <StyledIndexHeading>Find out which top-tier company will gladly hire you because you have similar values</StyledIndexHeading>
                <p style={{ fontSize: 'clamp(0.8rem, 0.7500rem + 0.2667vw, 1rem)', textAlign: 'center' }}>
                    limited edition survey is available now <br /> <strong style={{ textDecoration: 'underline' }}> for free</strong>
                </p>
            </FlexCCC>
            <StartButton href='/1' onClick={handleClick}>
                Start
            </StartButton>
        </StyledSection>
    );
}
