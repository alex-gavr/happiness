import { m } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledMain = styled.main({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    width: '100%',
    padding: '1.5rem',
    position: 'relative',
    '@media only screen and (max-width: 500px)': {
        padding: '0.5rem',
    },
});

export const StyledSection = styled.section((props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    flex: '1 1 0',
}));
export const FlexCCC = styled(m.div)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});
export const FlexRCC = styled(FlexCCC)({
    flexDirection: 'row',
});
export const StyledHeading = styled(m.h1)(props => ({
    color: props.theme.colors.title
}));
export const StyledStrong = styled.strong(props => ({
    color: props.theme.colors.primary
}));

export const StyledLogoP = styled.p({
    letterSpacing: '0.05em',
    color: '#ff6',
})

const StyledButtonContainer = styled(FlexRCC)((props) => ({
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    gap: '0.5rem',
    cursor: 'pointer',
    backgroundColor: props.theme.colors.componentBackground,
    '& > p': {
        color: props.theme.colors.title,
        letterSpacing: '0.09rem'
    }
}));

export const AgreeButtonContainer = styled(StyledButtonContainer)((props) => ({
    border: `1px solid ${props.theme.colors.green}`,
}));
export const DisagreeButtonContainer = styled(StyledButtonContainer)((props) => ({
    border: `1px solid ${props.theme.colors.red}`,
}));
export const DonnoButtonContainer = styled(StyledButtonContainer)((props) => ({
    border: `1px solid grey`,
}));
export const ImageButtonContainer = styled(StyledButtonContainer)((props) => ({
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
export const StyledAnswer = styled.div((props) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: props.theme.colors.componentBackground,
    border: `2px solid ${props.theme.colors.secondary}`,
    boxShadow: `0px 0px 15px 1px rgba(0, 0, 0, 0.35)`,
    borderRadius: '1rem',
    textTransform: 'lowercase',
    letterSpacing: '0.05rem',
    gap: '0.5rem',
}));

export const FinishButton = styled(Link)((props) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '0.09rem',
    width: 250,
    height: 'auto',
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    border: `solid 1px ${props.theme.colors.green}`,
    backgroundColor: props.theme.colors.componentBackground,
    color: props.theme.colors.primary,
    cursor: 'pointer',
    boxShadow: `0px 0px 20px 5px rgba(0, 0, 0, 0.2) `,
}));
