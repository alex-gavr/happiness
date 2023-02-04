import { setIsHappy } from '@/services/globalStateSlice';
import { useAppDispatch } from '@/services/hook';
import {
    AgreeButtonContainer,
    DisagreeButtonContainer,
    DonnoButtonContainer,
    OptionsContainer,
    StyledEmoji,
    StyledSection,
} from '@/styles/styled';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { TData } from './_app';

interface IProps {
    data: TData;
}
interface IAnswer {
    answer: string;
    emoji: string;
    to: string;
}
export default function Home(data: IProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [activeQuestion, setActiveQuestion] = useState('are you happy?');
    const [isHappy, setIsHappy] = useState<boolean>(true);
    const filteredArray = data.data.filter((i) => i.question === activeQuestion);

    const handleClick = (answer: IAnswer) => {
        if (activeQuestion === 'are you happy?') {
            console.log(answer.answer);
            if (answer.answer === 'yes') {
                setIsHappy(true);
            } else if (answer.answer === 'no') {
                setIsHappy(false);
            }
        }
        if (activeQuestion === 'do you think that genetics 🧬 can impact happiness?') {
            if (isHappy) {
                setActiveQuestion('what makes you feel the happiest?');
            } else {
                setActiveQuestion('what will make you feel happier?');
            }
        } else {
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
                const isFirstQuestion = object.question === 'are you happy?' ? true : false;
                return (
                    <Fragment key={index}>
                        {isFirstQuestion ? (
                            <h1>{object.question}</h1>
                        ) : (
                            <h2>{object.question}</h2>
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
