import { incrementExit, incrementQuestionNumber } from '@/services/globalStateSlice';
import { useAppDispatch, useAppSelector } from '@/services/hook';
import { AgreeButtonContainer, DisagreeButtonContainer, DonnoButtonContainer, FlexCCC, ImageButtonContainer, OptionsContainer, StyledEmoji } from '@/styles/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import ym from 'react-yandex-metrika';
import { TData } from './Data';
import { data } from './Data';


interface IAnswer {
    answer: string;
    img: string;
    emoji: string;
    to: string;
    ym: string;
    exit: string;
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
        if (answer.exit !== '') {
            dispatch(incrementExit(answer.exit));
        }
        ym('reachGoal', `${answer.ym}`);
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
        </>
    );
};

export default Quiz;
