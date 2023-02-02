import { setIsHappy } from '@/services/globalStateSlice';
import { useAppDispatch } from '@/services/hook';
import { AgreeButton, AgreeButtonContainer, DisagreeButton, DisagreeButtonContainer, FlexCCC, FlexRCC, StyledSection } from '@/styles/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleClick = (happy: string) => {
        if (happy === 'happy') {
            dispatch(setIsHappy(true));
            router.push('/happy');
        } else if (happy === 'unhappy') {
            dispatch(setIsHappy(false));
            router.push('/unhappy');
        }
    };
    return (
        <StyledSection>
            <h1>Are You Happy?</h1>
            <FlexRCC style={{ gap: '1rem' }}>
                <AgreeButtonContainer onClick={() => handleClick('happy')}>
                    <p >Yes</p>
                    <Image src='/happy.svg' alt='' width={30} height={30} />
                </AgreeButtonContainer>
                <DisagreeButtonContainer onClick={() => handleClick('unhappy')}>
                    <p>No</p>
                    <Image src='/unhappy.svg' alt='' width={30} height={30} />
                </DisagreeButtonContainer>
                
            </FlexRCC>
        </StyledSection>
    );
}
