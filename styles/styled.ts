import { FlexCCC, FlexRCC } from '@/styles/core';
import { m } from 'framer-motion';
import styled from 'styled-components';


export const StyledHeading = styled(m.h1)(props => ({
    color: props.theme.colors.title
}));
export const StyledStrong = styled.strong(props => ({
    color: props.theme.colors.primary
}));
export const StyledP = styled.p(props => ({
    color: props.theme.colors.primary,
    fontSize: 'clamp(1.2rem, 1.0000rem + 1.0667vw, 2rem)',
    textAlign: 'center',
    textShadow: '-1px 1px 1px rgba(0, 0, 0, 0.1)',
    letterSpacing: '0.08em',
}));

export const ImageContainer = styled(FlexCCC)((props) => ({
    padding: '0.5rem',
    flexFlow: 'column nowrap',
    border: `1px solid grey`,
}));

export const StyledEmoji = styled.span((props) => ({
    fontSize: props.theme.fontSize.emoji,
}));

export const OptionsContainer = styled(FlexRCC)((props) => ({
    gap: '2rem',
    flexFlow: 'row wrap',
    width: '100%',
    maxWidth: '600px',
    '@media only screen and (max-width: 500px)': {
        gap: '1rem',
        width: '98%',
    },
}));



