import { useAppSelector } from '@/services/hook';
import { m } from 'framer-motion';
import { data } from './Data';
import styled from 'styled-components';

const StyledProgressBar = styled(m.div)({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: 'red',
    transformOrigin: '0%',
});

const ProgressBar = () => {
    const { questionNumber } = useAppSelector((state) => state.globalState);

    // we add here question about age
    const allQuestions = data.length + 1;

    const progress = questionNumber / allQuestions;

    return(
        <StyledProgressBar initial={{ scaleX: 0 }} animate={{ scaleX: progress }} transition={{ duration: 2 }} />
    )
    
};

export default ProgressBar;
