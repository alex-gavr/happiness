import Link from "next/link";
import styled from "styled-components";
import { FlexRCC } from "./core";

const StyledContainer = styled(FlexRCC)((props) => ({
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    gap: '0.5rem',
    cursor: 'pointer',
    backgroundColor: props.theme.colors.componentBackground,
    '& > p': {
        color: props.theme.colors.title,
        letterSpacing: '0.09rem',
        fontSize: 'clamp(0.8rem, 0.7500rem + 0.2667vw, 1rem)',
    }
}));

export const AgreeContainer = styled(StyledContainer)((props) => ({
    border: `1px solid ${props.theme.colors.green}`,
}));
export const DisagreeContainer = styled(StyledContainer)((props) => ({
    border: `1px solid ${props.theme.colors.red}`,
}));
export const IDKContainer = styled(StyledContainer)((props) => ({
    border: `1px solid grey`,
}));

export const StartButton = styled(Link)((props) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '0.09rem',
    width: 150,
    height: 'auto',
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    border: `solid 1px ${props.theme.colors.secondary}`,
    backgroundColor: props.theme.colors.componentBackground,
    color: props.theme.colors.title,
    cursor: 'pointer',
    boxShadow: `0px 0px 10px 8px rgba(200, 20, 250, 0.2) `,
}));

export const FinishButton = styled(Link)((props) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '0.09rem',
    fontSize: 'clamp(0.8rem, 0.7500rem + 0.2667vw, 1rem)',
    textTransform: 'uppercase',
    width: 250,
    height: 'auto',
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    border: `solid 1px ${props.theme.colors.secondary}`,
    backgroundColor: props.theme.colors.componentBackground,
    color: props.theme.colors.title,
    cursor: 'pointer',
    boxShadow: `0px 0px 15px 8px rgba(200, 20, 250, 0.2) `,
}));