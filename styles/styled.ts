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


