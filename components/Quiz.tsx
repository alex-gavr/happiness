import { incrementExit, incrementQuestionNumber } from '@/services/globalStateSlice';
import { useAppDispatch, useAppSelector } from '@/services/hook';
import { AgreeButtonContainer, DisagreeButtonContainer, DonnoButtonContainer, FlexCCC, ImageButtonContainer, OptionsContainer, StyledEmoji, StyledHeading, StyledStrong } from '@/styles/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import ym from 'react-yandex-metrika';
import { dataPoker } from './DataPoker';
import PopUp from './PopUp';

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

    const filteredArray = dataPoker.filter((i) => i.id === path);

    const handleClick = (answer: IAnswer) => {
        dispatch(incrementQuestionNumber());
        ym('reachGoal', `${answer.ym}`);
        if (answer.exit === 'other') {
            // Other Main Exit
            window.open('https://waufooke.com/4/5708348', '_blank');
            // Other Pops
            router.push('https://mordoops.com/4/5708366');
        }
        router.push(answer.to);
    };
    return (
        <>
            {path === 1 ? <PopUp /> : null}
            {filteredArray.map((object, index) => {
                const h1 = object.question === 'Do you want to make extra money playing poker?' && (
                    <>
                        <StyledHeading>
                            Do you want to make <StyledStrong> extra money </StyledStrong> playing poker?
                        </StyledHeading>
                    </>
                );
                return (
                    <Fragment key={index}>
                        {path === 1 ? h1 : <h1>{object.question}</h1>}
                        {path === 4 && (
                            <div>
                                <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>this is table cards</p>
                                <Image src='/table.svg' alt='' width={400} height={100} />
                            </div>
                        )}
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
                                                    <Image src={answer.img} alt='' width={80} height={80} />
                                                </ImageButtonContainer>
                                                <p style={{ textTransform: 'capitalize' }}>{answer.answer}</p>
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
