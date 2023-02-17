import { incrementExit, incrementQuestionNumber } from '@/services/globalStateSlice';
import { useAppDispatch, useAppSelector } from '@/services/hook';
import { AgreeContainer, DisagreeContainer, IDKContainer } from '@/styles/buttons';
import { FlexCCC } from '@/styles/core';
import { ImageContainer, OptionsContainer, Paragraph, StyledEmoji } from '@/styles/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import ym from 'react-yandex-metrika';
import { data, IAnswer } from './Data';

const MainContent = () => {
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
                                const agree = answer.answer === 'Yes' || answer.answer === 'Satisfied' || answer.answer === 'Important' ? true : false;
                                const disagree = answer.answer === 'No' || answer.answer === 'Dissatisfied' || answer.answer === 'Not important' ? true : false;
                                const hasImg = answer.img !== '' ? true : false;
                                return (
                                    <Fragment key={index}>
                                        {agree ? (
                                            <AgreeContainer onClick={() => handleClick(answer)}>
                                                <Paragraph>{answer.answer}</Paragraph>
                                                <StyledEmoji>{answer.emoji}</StyledEmoji>
                                            </AgreeContainer>
                                        ) : disagree ? (
                                            <DisagreeContainer onClick={() => handleClick(answer)}>
                                                <Paragraph>{answer.answer}</Paragraph>
                                                <StyledEmoji>{answer.emoji}</StyledEmoji>
                                            </DisagreeContainer>
                                        ) : hasImg ? (
                                            <FlexCCC gap='0.3rem'>
                                                <ImageContainer onClick={() => handleClick(answer)}>
                                                    <Image src={answer.img} alt='' width={65} height={50} />
                                                </ImageContainer>
                                                <Paragraph>{answer.answer}</Paragraph>
                                            </FlexCCC>
                                        ) : (
                                            <IDKContainer onClick={() => handleClick(answer)}>
                                                <Paragraph  $fontSize={ pathname === '/2' || pathname === '/4' || pathname === '/5' ? 'clamp(0.7rem, 0.6250rem + 0.4000vw, 1rem)' : undefined}>{answer.answer}</Paragraph>
                                                {answer.emoji !== '' && <StyledEmoji>{answer.emoji}</StyledEmoji>}
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

export default MainContent;
