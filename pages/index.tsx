import { StartButton } from '@/styles/buttons';
import { FlexCCC, StyledSection } from '@/styles/core';
import { StyledP } from '@/styles/styled';

export default function Home() {
    return (
        <StyledSection>
            <FlexCCC gap='0.8rem' style={{ marginTop: '5rem' }}>
                <StyledP>
                    We found 6 scientifically proven questions that help you feel instantly happier after answering them
                </StyledP>
                <p style={{ fontSize: 'clamp(0.8rem, 0.7500rem + 0.2667vw, 1rem)', textAlign: 'center' }}>
                    They work on 98.2% of people. <br /> Are you one of them? <br /> Try it yourself <strong style={{textDecoration: 'underline'}}> now and for free</strong>
                </p>
            </FlexCCC>
            <StartButton href='/1'>Start</StartButton>
        </StyledSection>
    );
}
