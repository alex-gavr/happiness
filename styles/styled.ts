import { m } from 'framer-motion';
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
export const FlexCCC = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});
export const FlexRCC = styled(FlexCCC)({
    flexDirection: 'row',
});

export const StyledButton = styled(m.button)((props) => ({
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    padding: '1rem',
    color: props.theme.colors.paragraph,
    boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`,
}));

const StyledButtonContainer = styled(FlexRCC)((props) => ({
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    gap: '0.5rem',
    boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`,
}));

export const AgreeButtonContainer = styled(StyledButtonContainer)((props) => ({
    color: props.theme.colors.paragraph,
    border: `1px solid ${props.theme.colors.green}`,
}));
export const DisagreeButtonContainer = styled(StyledButtonContainer)((props) => ({
    color: props.theme.colors.paragraph,
    border: `1px solid ${props.theme.colors.red}`,
}));

export const AgreeButton = styled(StyledButton)((props) => ({
    border: `1px solid ${props.theme.colors.green}`,
}));
export const DisagreeButton = styled(StyledButton)((props) => ({
    border: `1px solid ${props.theme.colors.red}`,
}));
export const Answer = styled(StyledButton)((props) => ({
    border: `1px solid ${props.theme.colors.primary}`,
}));

export const OptionsContainer = styled(FlexRCC)((props) => ({
    gap: '2rem',
    flexFlow: 'row wrap',
    width: '95%',
    maxWidth: '600px',
    '@media only screen and (max-width: 500px)': {
        gap: '1rem',
    }
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
