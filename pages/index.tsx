import { TData } from '@/components/Data';
import { incrementExit, incrementQuestionNumber } from '@/services/globalStateSlice';
import { useAppDispatch, useAppSelector } from '@/services/hook';
import {
    AgreeButtonContainer,
    DisagreeButtonContainer,
    DonnoButtonContainer,
    FlexCCC,
    ImageButtonContainer,
    OptionsContainer,
    StyledEmoji,
    StyledSection,
} from '@/styles/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import ym from 'react-yandex-metrika';

interface IProps {
    data: TData;
}
interface IAnswer {
    answer: string;
    img: string;
    emoji: string;
    to: string;
    ym: string;
    exit: string;
}
export default function Home(data: IProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { questionNumber } = useAppSelector((state) => state.globalState);

    const [activeQuestion, setActiveQuestion] = useState('are you happy?');
    // const [isHappy, setIsHappy] = useState<boolean>(true);
    const filteredArray = data.data.filter((i) => i.question === activeQuestion);

    const handleClick = (answer: IAnswer) => {
        dispatch(incrementQuestionNumber());
        if (answer.exit !== '') {
            dispatch(incrementExit(answer.exit));
        }
        ym('reachGoal', `${answer.ym}`);
        if (answer.to === '/age') {
            router.push('/age');
        } else {
            setActiveQuestion(answer.to);
        }
    };

    return (
        <StyledSection>
            {filteredArray.map((object, index) => {
                return (
                    <Fragment key={index}>
                        <h1>{object.question}</h1>
                        <OptionsContainer>
                            {object.answers.map((answer, index) => {
                                const agree = answer.answer === 'yes' ? true : false;
                                const disagree = answer.answer === 'no' ? true : false;
                                const hasImg = answer.img !== '' ? true : false;
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
                                        ) : hasImg ? (
                                            <FlexCCC style={{ gap: '0.3rem' }}>
                                                <ImageButtonContainer onClick={() => handleClick(answer)}>
                                                    <Image src={answer.img} alt='' width={50} height={50} />
                                                </ImageButtonContainer>
                                                <p style={answer.answer === 'vpn' ? { textTransform: 'uppercase' } : { textTransform: 'capitalize' }}>{answer.answer}</p>
                                            </FlexCCC>
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
            {questionNumber === 0 && <p style={{textAlign: 'center', marginTop: '1rem', width: '90%'}}>Get Free Recommendation and Offer at the End</p>}
        </StyledSection>
    );
}
