import { FlexCCC } from '@/styles/styled';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledPopUp = styled(FlexCCC)( props => ({
    width: '98%',
    position: 'absolute',
    top: '0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '0 0 2rem 2rem',
    backgroundColor: props.theme.colors.accentBG,
    padding: '1rem',
    gap: '1rem',
}))

const PopUp = () => {
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        const interval = setInterval(() => {
            // update the state after 1000ms
            setSeconds((currentCount) => currentCount - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds, setSeconds]);

    return (
        <StyledPopUp>
            <p style={{ textAlign: 'center' }}>Complete the survey and get free tokens from our partners</p>
            <p style={{ textAlign: 'center', fontSize: '0.8rem' }}>valid for 4 minutes and {seconds} seconds</p>
        </StyledPopUp>
    );
};

export default PopUp;
