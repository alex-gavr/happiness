import { m } from "framer-motion";
import styled from "styled-components";

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
    flex: '1 1 0'
}))
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
}))

const StyledButtonContainer = styled(FlexRCC)((props) => ({
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    gap: '0.5rem',
    boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`,
}))

export const AgreeButtonContainer = styled(StyledButtonContainer)((props) => ({
    color: props.theme.colors.paragraph,
    border: `1px solid ${props.theme.colors.green}`
}))
export const DisagreeButtonContainer = styled(StyledButtonContainer)((props) => ({
    color: props.theme.colors.paragraph,
    border: `1px solid ${props.theme.colors.red}`
}))

export const AgreeButton = styled(StyledButton)((props) => ({
    border: `1px solid ${props.theme.colors.green}`
}))
export const DisagreeButton = styled(StyledButton)((props) => ({
    border: `1px solid ${props.theme.colors.red}`
}))
export const Answer = styled(StyledButton)((props) => ({
    border: `1px solid ${props.theme.colors.primary}`
}))
