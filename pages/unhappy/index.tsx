import AnswerOption from '@/components/Answer';
import { OptionsContainer, StyledSection } from '@/styles/styled';

const answers = [
    {
        answer: 'Loved Family',
        emoji: '❤️',
    },
    {
        answer: 'Real Friends',
        emoji: '🤗',
    },
    {
        answer: 'Better Sex',
        emoji: '🍓',
    },
    {
        answer: 'More Money',
        emoji: '💰',
    },
    {
        answer: 'Less Work',
        emoji: '💼',
    },
    {
        answer: 'Funny memes',
        emoji: '😂',
    },
    {
        answer: 'New Mobile App',
        emoji: '📱',
    },
    {
        answer: 'Other',
        emoji: '😏',
    },
];

const Unhappy = () => {
    return (
        <StyledSection>
            <h1>What will make you feel more happier?</h1>
            <OptionsContainer>
                {answers.map((answer, index) => (
                    <AnswerOption key={index} answer={answer.answer} emoji={answer.emoji} />
                ))}
            </OptionsContainer>
        </StyledSection>
    );
};

export default Unhappy;
