import { FlexCCC, FlexRCC } from '@/styles/core';
import { ImageConfig } from 'next/dist/shared/lib/image-config';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ym from 'react-yandex-metrika';
import styled from 'styled-components';
import { ICommentsData } from './CommentsData';
import EmojiContainer from './EmojiContainer';

const StyledComment = styled(FlexCCC)((props) => ({
    justifyContent: 'flex-start',
    gap: '0.5rem',
    backgroundColor: props.theme.colors.accentBG,
    padding: '1rem',
    borderRadius: '2rem',
}));

const ImageAndName = styled(FlexRCC)((props) => ({
    gap: '1rem',
    '& > h2': {
        textAlign: 'left',
        textTransform: 'capitalize',
        fontSize: 'clamp(1rem, 0.7500rem + 1.3333vw, 2rem)',
        lineHeight: '1.3'
    },
    
}));

const CommentAndEmoji = styled(FlexCCC)({
    width: '100%',
    gap: '1rem',
    alignItems: 'flex-start',
    '& > p': {
        fontSize: 'clamp(0.7rem, 0.6250rem + 0.4000vw, 1rem)',
    },
});
const ImageContainer = styled(FlexCCC)({
    width: '100%',
    height: 100,
    borderRadius: '2rem',
    overflow: 'hidden',
    placeSelf: 'flex-start',
    '@media only screen and (min-width: 500px)': {
        width: 220,
        height: 120,
    }
});


interface IProps {
    comment: ICommentsData;
}

const Comment = ({ comment }: IProps) => {
    const router = useRouter();

    const handleClick = (comment: ICommentsData) => {
        ym('reachGoal', `image/${comment.id}`);
        router.push('https://meetamate.info/dating-survey.html?offer_id=2061&s=${SUBID}&z={zoneid}&b={bannerid}&geo={geo}&var={request_var}&city={city}&testinapp=4455851')
    }

    return (
        <StyledComment>
            <ImageAndName>
                <ImageContainer onClick={() => handleClick(comment)}>
                    <Image src={`${comment.img}`} alt='' width={640} height={427} />
                </ImageContainer>
                <h2>{comment.name}</h2>
            </ImageAndName>
            <CommentAndEmoji>
                <p>{comment.comment}</p>
                <FlexRCC gap='1rem'>
                    {comment.emojis.map((emoji, index) => (
                        <EmojiContainer key={index} emoji={emoji} />
                    ))}
                </FlexRCC>
            </CommentAndEmoji>
        </StyledComment>
    );
};

export default Comment;
