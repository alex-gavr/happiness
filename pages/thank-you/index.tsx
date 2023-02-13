import { FlexCCC, StyledSection } from '@/styles/core';
import { FinishButton } from '@/styles/buttons';
import ym from 'react-yandex-metrika';

const ThankYou = () => {
    // const { exit } = useAppSelector((state) => state.globalState);

    const mainExitURL = 'https://waufooke.com/4/5708348';
    const mainPopsURL = 'https://mordoops.com/4/5708366';
    const ymName = 'MainExit';

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

export default ThankYou;
