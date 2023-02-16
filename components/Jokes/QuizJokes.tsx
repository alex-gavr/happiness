import { incrementExit, incrementQuestionNumber } from '@/services/globalStateSlice';
import { useAppDispatch } from '@/services/hook';
import { AgreeContainer, DisagreeContainer, IDKContainer } from '@/styles/buttons';
import { FlexCCC } from '@/styles/core';
import { ImageContainer, OptionsContainer, StyledEmoji } from '@/styles/styled';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import ym from 'react-yandex-metrika';
import { data } from './Data';

interface IAnswer {
    answer: string;
    img: string;
    emoji: string;
    to: string;
    ym: string;
    exit?: string | null;
}

const Quiz = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    // const { questionNumber } = useAppSelector((state) => state.globalState);
    const pathname = router.pathname;
    const slice = pathname === '/' ? '1' : pathname.slice(1);
    const path = parseInt(slice);

    const filteredArray = data.filter((i) => i.id === path);

    const handleClick = (answer: IAnswer) => {
        dispatch(incrementQuestionNumber());
        ym('reachGoal', `${answer.ym}`);
        if (answer.exit !== null) {
            dispatch(incrementExit(answer.exit));
        }
        router.push(answer.to);
    };
    return (
        <>
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
                                            <AgreeContainer onClick={() => handleClick(answer)}>
                                                <p style={{ textTransform: 'capitalize', textAlign: 'center' }}>{answer.answer}</p>
                                                <StyledEmoji>{answer.emoji}</StyledEmoji>
                                            </AgreeContainer>
                                        ) : disagree ? (
                                            <DisagreeContainer onClick={() => handleClick(answer)}>
                                                <p style={{ textTransform: 'capitalize', textAlign: 'center' }}>{answer.answer}</p>
                                                <StyledEmoji>{answer.emoji}</StyledEmoji>
                                            </DisagreeContainer>
                                        ) : hasImg ? (
                                            <FlexCCC gap='0.3rem'>
                                                <ImageContainer onClick={() => handleClick(answer)}>
                                                    <Image src={answer.img} alt='' width={65} height={50} />
                                                </ImageContainer>
                                                <p
                                                    style={
                                                        pathname === '/2'
                                                            ? { textTransform: 'capitalize', textAlign: 'center', fontSize: 'clamp(0.7rem, 0.6250rem + 0.4000vw, 1rem)' }
                                                            : { textTransform: 'capitalize', textAlign: 'center' }
                                                    }>
                                                    {answer.answer}
                                                </p>
                                            </FlexCCC>
                                        ) : (
                                            <IDKContainer onClick={() => handleClick(answer)}>
                                                <p
                                                    style={
                                                        pathname === '/6'
                                                            ? {
                                                                textTransform: 'capitalize',
                                                                textAlign: 'center',
                                                                fontSize: 'clamp(0.8rem, 0.7000rem + 0.5333vw, 1.2rem)',
                                                            }
                                                            : { textTransform: 'capitalize', textAlign: 'center' }
                                                    }>
                                                    {answer.answer}
                                                </p>
                                                <StyledEmoji>{answer.emoji}</StyledEmoji>
                                            </IDKContainer>
                                        )}
                                    </Fragment>
                                );
                            })}
                        </OptionsContainer>
                    </Fragment>
                );
            })}
        </>
    );
};

export default Quiz;
