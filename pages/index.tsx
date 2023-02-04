import { setExit } from '@/services/globalStateSlice';
import { useAppDispatch } from '@/services/hook';
import { AgreeButtonContainer, DisagreeButtonContainer, DonnoButtonContainer, FlexCCC, OptionsContainer, StyledEmoji, StyledSection } from '@/styles/styled';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import ym from 'react-yandex-metrika';
import { TData } from './_app';

interface IProps {
    data: TData;
}
interface IAnswer {
    answer: string;
    emoji: string;
    to: string;
    ym: string;
    exit: string;
}
export default function Home(data: IProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    const [activeQuestion, setActiveQuestion] = useState('are you happy?');
    const [isHappy, setIsHappy] = useState<boolean>(true);
    const filteredArray = data.data.filter((i) => i.question === activeQuestion);

    const handleClick = (answer: IAnswer) => {
        if (activeQuestion === 'are you happy?') {
            if (answer.answer === 'yes') {
                setIsHappy(true);
            } else if (answer.answer === 'no') {
                setIsHappy(false);
            }
        }
        if (activeQuestion === 'do you think that genetics 🧬 can impact happiness?') {
            
            ym('reachGoal',`${answer.ym}`);
            if (isHappy) {
                setActiveQuestion('what makes you feel the happiest?');
            } else {
                setActiveQuestion('what will make you feel happier?');
            }
        } else {
            if (answer.exit !== '' ){
                dispatch(setExit(answer.exit))
            }
            ym('reachGoal',`${answer.ym}`);
            if (answer.to === '/age') {
                router.push('/age');
            } else {
                setActiveQuestion(answer.to);
            }
        }
    };
    return (
        <StyledSection>
            {filteredArray.map((object, index) => {
                return (
                    <Fragment key={index}>
                        <h1>{object.question}</h1>
                        {object.question === 'do you find this meme funny?' && (
                            <FlexCCC>
                                <img src='/lol1.webp' width={300} alt='' />
                            </FlexCCC>
                        )}
                        {object.question === 'what about this one? did you laugh?' && (
                            <FlexCCC>
                                <img src='/lol2.webp' width={300} alt='' />
                            </FlexCCC>
                        )}
                        <OptionsContainer>
                            {object.answers.map((answer, index) => {
                                const agree = answer.answer === 'yes' || answer.answer === 'maybe yes' ? true : false;
                                const disagree = answer.answer === 'no' ? true : false;
                                return (
                                    <Fragment key={index}>
                                        {agree ? (
                                            <AgreeButtonContainer onClick={() => handleClick(answer)}>
                                                <p style={{ textTransform: 'capitalize' }}>{answer.answer}</p>
                                                <StyledEmoji>{answer.emoji}</StyledEmoji>
                                            </AgreeButtonContainer>
                                        ) : disagree ? (
                                            <DisagreeButtonContainer onClick={() => handleClick(answer)}>
                                                <p style={{ textTransform: 'capitalize' }}>{answer.answer}</p>
                                                <StyledEmoji>{answer.emoji}</StyledEmoji>
                                            </DisagreeButtonContainer>
                                        ) : (
                                            <DonnoButtonContainer onClick={() => handleClick(answer)}>
                                                <p style={{ textTransform: 'capitalize' }}>{answer.answer}</p>
                                                <StyledEmoji>{answer.emoji}</StyledEmoji>
                                            </DonnoButtonContainer>
                                        )}
                                    </Fragment>
                                );
                            })}
                        </OptionsContainer>
                    </Fragment>
                );
            })}
        </StyledSection>
    );
}
