export interface IData {
    id: number;
    question: string;
    answers: {
        answer: string;
        img: string;
        emoji: string;
        to: string;
        ym: string;
        exit: string;
    }[];
};


export const data: Array<IData> = [
    {
        id: 1,
        question: 'are you happy?',
        answers: [
            {
                answer: 'yes',
                img: '',
                emoji: '🥰',
                to: '/2',
                ym: 'happy',
                exit: '',
            },
            {
                answer: "i don't know",
                img: '',
                emoji: '🤔',
                to: '/2',
                ym: 'happy/idk',
                exit: '',
            },
            {
                answer: 'no',
                img: '',
                emoji: '😭',
                to: '/2',
                ym: 'unhappy',
                exit: '',
            },
        ],
    },
    {
        id: 2,
        question: 'what part of life do you think is the most important?',
        answers: [
            {
                answer: "self-improvement",
                img: '',
                emoji: '😎',
                to: '/3',
                ym: 'lifePart/selfImprovement',
                exit: 'other',
            },
            {
                answer: 'financial stability',
                img: '',
                emoji: '💰',
                to: '/3',
                ym: 'lifePart/finance',
                exit: 'betting',
            },
            {
                answer: 'life convenience',
                img: '',
                emoji: '🏝️',
                to: '/3',
                ym: 'lifePart/convenience',
                exit: 'utilities',
            },
            {
                answer: 'connections with others',
                img: '',
                emoji: '❤️',
                to: '/3',
                ym: 'lifePart/connections',
                exit: 'other',
            },
        ],
    },
    {
        id: 3,
        question: 'what do you like to watch?',
        answers: [
            {
                answer: 'sports',
                img: '',
                emoji: '🏅',
                to: '/4',
                ym: 'watch/sports',
                exit: 'betting',
            },
            {
                answer: "quiz shows",
                img: '',
                emoji: '🤔',
                to: '/4',
                ym: 'watch/quiz',
                exit: 'betting',
            },
            {
                answer: 'movies',
                img: '',
                emoji: '🎬',
                to: '/4',
                ym: 'watch/movies',
                exit: 'other',
            },
            {
                answer: 'technologies news',
                img: '',
                emoji: '🧑‍💻',
                to: '/4',
                ym: 'watch/techNews',
                exit: 'utilities',
            },
        ],
    },
    {
        id: 4,
        question: 'what would you rather do?',
        answers: [
            {
                answer: 'invest money',
                img: '',
                emoji: '📈',
                to: '/5',
                ym: 'investMoney',
                exit: 'utilities',
            },
            {
                answer: 'spend money',
                img: '',
                emoji: '😜',
                to: '/5',
                ym: 'spendMoney',
                exit: 'other',
            },
            {
                answer: 'win money',
                img: '',
                emoji: '🍀',
                to: '/5',
                ym: 'winMoney',
                exit: 'betting',
            },
        ],
    },
    {
        id: 5,
        question: 'which app would you most likely download?',
        answers: [
            {
                answer: 'finance',
                img: '/finance.svg',
                emoji: '📈',
                to: '/6',
                ym: 'app/finance',
                exit: 'betting',
            },
            {
                answer: "films & series",
                img: '/tv.svg',
                emoji: '🍿',
                to: '/6',
                ym: 'app/tv',
                exit: 'other',
            },
            {
                answer: 'vpn',
                img: '/vpn.svg',
                emoji: '🎬',
                to: '/6',
                ym: 'app/vpn',
                exit: 'utilities',
            },
            {
                answer: 'phone cleaner',
                img: '/appCleaner.svg',
                emoji: '🧹',
                to: '/6',
                ym: 'app/cleaner',
                exit: 'utilities',
            },
        ],
    },
    {
        id: 6,
        question: 'what brings a smile to your face?',
        answers: [
            {
                answer: 'Infinite Free Trial',
                img: '',
                emoji: '😎',
                to: '/age',
                ym: 'smile/trial',
                exit: 'utilities',
            },
            {
                answer: "Lucky money win",
                img: '',
                emoji: '🤑',
                to: '/age',
                ym: 'smile/money',
                exit: 'betting',
            },
            {
                answer: 'friday night',
                img: '',
                emoji: '🍷',
                to: '/age',
                ym: 'smile/friday',
                exit: 'other',
            },
            {
                answer: 'funny kids',
                img: '',
                emoji: '😂',
                to: '/age',
                ym: 'smile/kids',
                exit: 'other',
            },
        ],
    },
    
];
