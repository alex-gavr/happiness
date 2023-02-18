import { FlexCCC, StyledSection } from '@/styles/core';
import { FinishButton } from '@/styles/buttons';
import ym from 'react-yandex-metrika';
import Company from '@/components/Career/Company';
import { event } from 'nextjs-google-analytics';

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
        event('main_exit', { value: 1 });
        ym('reachGoal', `${ymName}`);
        // Main Exit
        window.open(mainExitURL, '_blank');
    };
    return (
        <StyledSection>
            <FlexCCC gap='2rem'>
                <h1 style={{ letterSpacing: '0.1rem' }}>We happy to announce that your values align with:</h1>
                <Company />
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: 'clamp(0.9rem, 0.8250rem + 0.4000vw, 1.2rem)',
                        width: '90%',
                    }}>
                    Here is a gift from us to give you a head start in career change 👇
                </p>
            </FlexCCC>
            <FinishButton href={mainPopsURL} onClick={handleMainExit}>
                Claim Gift
            </FinishButton>
        </StyledSection>
    );
};

export default ThankYou;
