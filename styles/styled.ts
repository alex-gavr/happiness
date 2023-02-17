import { FlexCCC, FlexRCC } from '@/styles/core';
import { m } from 'framer-motion';
import styled from 'styled-components';

export const StyledHeading = styled(m.h1)((props) => ({
    color: props.theme.colors.title,
}));
export const StyledStrong = styled.strong((props) => ({
    color: props.theme.colors.primary,
}));
export const StyledIndexHeading = styled.p((props) => ({
    width: '90%',
    color: props.theme.colors.primary,
    fontSize: 'clamp(1.2rem, 1.0000rem + 1.0667vw, 2rem)',
    textAlign: 'left',
    textShadow: '-1px 1px 1px rgba(0, 0, 0, 0.1)',
    letterSpacing: '0.09em',
    
}));
export const Paragraph = styled.p<{$fontSize?: string}>((props) => ({
    fontSize: props.$fontSize && props.$fontSize,
    textTransform: 'capitalize',
    textAlign: 'center',
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
