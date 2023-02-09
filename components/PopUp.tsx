import { FlexCCC } from '@/styles/styled';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(FlexCCC)((props) => ({
    width: '98%',
    height: 'auto',
    position: 'absolute',
    bottom: 0,
    backgroundColor: props.theme.colors.accentBG,
    borderRadius: '40px 40px 0 0',
    padding: '1rem 1rem',
    gap: '1rem',
    textAlign: 'center',
    boxShadow: `0px 5px 25px rgba(0, 0, 0, 1)`,
    borderTop: '1px solid blue',
    '& > p: first-child': {
        width: '98%',
        fontSize: '1rem',
        color: props.theme.colors.white,
    },
    '& > p: last-child': {
        width: '95%',
        fontSize: '0.7rem',
        color: '#ffefba',
    }
}));

const PopUp = () => {
    const [show, setShow] = useState(true);
    return (
        <Wrapper initial={{ y: 100, opacity: 0 }} animate={ show ? { y: 2, opacity: 1 }: { display: 'none' }} transition={{ duration: 1 }} onClick={() => setShow(false)}>
            <p>Estimate your level of happiness by answering simple questions.</p>
            <p>Then, get a free recommendation on what you should work on to be happier.</p>
        </Wrapper>
    );
};

export default PopUp;
