import { FlexCCC, FlexRCC } from '@/styles/core';
import { companiesData } from './CompaniesData';
import styled from 'styled-components';

const CardContainer = styled(FlexCCC)((props) => ({
    gap: '1rem',
    background: props.theme.colors.gradientBW,
    padding: '1rem',
    borderRadius: '1rem',
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.1)',
    border: `1px solid ${props.theme.colors.border}`,
}));

const Name = styled.h2((props) => ({
    color: props.theme.colors.title,
    textTransform: 'capitalize',
}));
const Industry = styled.p((props) => ({
    fontSize: 'clamp(0.7rem, 0.6250rem + 0.4000vw, 1rem)',
    fontStyle: 'italic',
}));

const SalaryContainer = styled(FlexRCC)((props) => ({
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '0.5rem',
    '& > p: first-of-type': {
        fontSize: 'clamp(0.7rem, 0.6250rem + 0.4000vw, 1rem)',
    },
    '& > p: last-of-type': {
        color: props.theme.colors.green,
        fontSize: 'clamp(0.7rem, 0.6250rem + 0.4000vw, 1rem)',
    },
}));

const Company = () => {
    const randomInt = Math.floor(Math.random() * 12) + 1;
    const filteredArray = companiesData.filter((i) => i.id === randomInt);

    console.log(filteredArray);
    return (
        <>
            {filteredArray.map((i) => {
                return (
                    <CardContainer key={i.id}>
                        <FlexCCC gap='0.2rem'>
                            <Name>{i.name}</Name>
                            <Industry>{i.industry}</Industry>
                        </FlexCCC>
                        <FlexCCC gap='0.5rem'>
                            <SalaryContainer>
                                <p>Average Salary:</p>
                                <p>{i.averageSalary}</p>
                            </SalaryContainer>
                            <SalaryContainer>
                                <p>Top Salary:</p>
                                <p>{i.topSalary}</p>
                            </SalaryContainer>
                        </FlexCCC>
                    </CardContainer>
                );
            })}
        </>
    );
};

export default Company;
