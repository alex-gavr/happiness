import styled from 'styled-components';
import { m } from 'framer-motion';

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
    minHeight: '80vh',
    maxWidth: '1000px',
}));
export const FlexCCC = styled(m.div)<{ gap?: string }>((props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: props.gap && props.gap,
}));
export const FlexRCC = styled(FlexCCC)({
    flexDirection: 'row',
});
