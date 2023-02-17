import { CareerComments } from "../Career/CommentsData";

export interface IEmoji {
    emoji: string;
    count: number;
}

export interface ICommentsData {
    id: number;
    name: string;
    img: string;
    comment: string;
    time: string;
    emojis: Array<IEmoji>;
}

export const comments: Array<ICommentsData> = CareerComments