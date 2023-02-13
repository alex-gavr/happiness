import { FlexCCC } from '@/styles/core';
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

    return (
        <StyledPopUp>
            <p style={{ textAlign: 'center' }}>Complete the survey and get free tokens from our partners</p>
        </StyledPopUp>
    );
};

export default PopUp;
