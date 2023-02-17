import { CareerData } from "./Career/Data";

export interface IAnswer {
    answer: string;
    img: string;
    emoji: string;
    to: string;
    ym: string;
    exit?: string | null;
}

export interface IData {
    id: number;
    question: string;
    answers: Array<IAnswer>;
}


export const data = CareerData;