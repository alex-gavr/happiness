import { FlexCCC } from '@/styles/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ym from 'react-yandex-metrika';
import styled from 'styled-components';

const Accent = styled.p((props) => ({
    backgroundColor: props.theme.colors.secondary,
    padding: '0.2em 1em',
    borderRadius: '1rem',
    fontSize: 'clamp(0.7rem, 0.6250rem + 0.4000vw, 1rem)',
    color: props.theme.colors.white,
    zIndex: 3
}));

const CountDown = () => {
    const router = useRouter();
    const [time, setTime] = useState(59);
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((currentCount) => currentCount - 1);
        }, 1000);
        if (time < 0 && process.env.NODE_ENV === 'production') {
            ym('reachGoal', 'countDownExit');
            router.push('https://intorterraon.com/4/5708884');
        }

        return () => clearInterval(interval);
    }, [time]);

    return (
        <FlexCCC gap='0.5rem' style={{ position: 'fixed', top: '1%' }}>
            {time > 0 ? (
                <>
                    <p style={{ textAlign: 'center' }}>free access ends in</p>
                    <Accent>{seconds} seconds</Accent>
                </>
            ) : (
                <p>offer expired</p>
            )}
        </FlexCCC>
    );
};

export default CountDown;
