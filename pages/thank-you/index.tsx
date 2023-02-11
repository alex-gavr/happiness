import { useAppSelector } from '@/services/hook';
import { FinishButton, StyledSection } from '@/styles/styled';
import React from 'react';
import ym from 'react-yandex-metrika';

const ThankYou = () => {
    // const { exit } = useAppSelector((state) => state.globalState);

    const mainExitURL = 'https://whoursie.com/4/5708359';
    const mainPopsURL = 'https://whoursie.com/4/5708365';
    const ymName = 'BettingExit';

    // if (exit.betting > exit.other && exit.betting > exit.utilities) {
    //     // Main Exit Betting
    //     mainExitURL = 'https://whoursie.com/4/5708359'
    //     mainPopsURL = 'https://whoursie.com/4/5708365'
    //     ymName = 'BettingExit'
    // } else if (exit.utilities > exit.betting && exit.utilities > exit.other) {
    //     // Main Exit Utilities
    //     mainExitURL = 'https://itespurrom.com/4/5708363'
    //     mainPopsURL = 'https://whoursie.com/4/5708371'
    //     ymName = 'UtilitiesExit'
    // } else {
    //     // Main Exit Other
    //     mainExitURL = 'https://waufooke.com/4/5708348'
    //     mainPopsURL = 'https://mordoops.com/4/5708366'
    //     ymName = 'OtherExit'
    // }

    const handleMainExit = () => {
        ym('reachGoal', `${ymName}`);
        // Main Exit
        window.open(mainExitURL, '_blank');
    };
    return (
        <StyledSection>
            <h1>You are talented poker player !</h1>
            <p style={{ textAlign: 'center' }}>Use your knowledge to earn extra money 👇</p>
            <FinishButton href={mainPopsURL} onClick={handleMainExit}>
                Check it out
            </FinishButton>
        </StyledSection>
    );
};

export default ThankYou;
