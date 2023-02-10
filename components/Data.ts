export type TData = {
    question: string;
    answers: {
        answer: string;
        img: string;
        emoji: string;
        to: string;
        ym: string;
        exit: string;
    }[];
}[];


export const data: TData = [
    {
        question: 'are you happy?',
        answers: [
            {
                answer: 'yes',
                img: '',
                emoji: '🥰',
                to: 'what part of life do you think is the most important?',
                ym: 'happy',
                exit: '',
            },
            {
                answer: "i don't know",
                img: '',
                emoji: '🤔',
                to: 'what part of life do you think is the most important?',
                ym: 'happy/idk',
                exit: '',
            },
            {
                answer: 'no',
                img: '',
                emoji: '😭',
                to: 'what part of life do you think is the most important?',
                ym: 'unhappy',
                exit: '',
            },
        ],
    },
    {
        question: 'what part of life do you think is the most important?',
        answers: [
            {
                answer: 'connections with others',
                img: '',
                emoji: '❤️',
                to: 'what do you like to watch?',
                ym: 'lifePart/connections',
                exit: 'other',
            },
            {
                answer: "self-improvement",
                img: '',
                emoji: '😎',
                to: 'what do you like to watch?',
                ym: 'lifePart/selfImprovement',
                exit: 'other',
            },
            {
                answer: 'financial stability',
                img: '',
                emoji: '💰',
                to: 'what do you like to watch?',
                ym: 'lifePart/finance',
                exit: 'betting',
            },
            {
                answer: 'life convenience',
                img: '',
                emoji: '🏝️',
                to: 'what do you like to watch?',
                ym: 'lifePart/convenience',
                exit: 'utilities',
            },
        ],
    },
    {
        question: 'what do you like to watch?',
        answers: [
            {
                answer: 'sports',
                img: '',
                emoji: '🏅',
                to: 'what would you rather do?',
                ym: 'watch/sports',
                exit: 'betting',
            },
            {
                answer: "quiz shows",
                img: '',
                emoji: '🤔',
                to: 'what would you rather do?',
                ym: 'watch/quiz',
                exit: 'betting',
            },
            {
                answer: 'movies',
                img: '',
                emoji: '🎬',
                to: 'what would you rather do?',
                ym: 'watch/movies',
                exit: 'other',
            },
            {
                answer: 'technologies news',
                img: '',
                emoji: '🧑‍💻',
                to: 'what would you rather do?',
                ym: 'watch/techNews',
                exit: 'utilities',
            },
        ],
    },
    {
        question: 'what would you rather do?',
        answers: [
            {
                answer: 'invest money',
                img: '',
                emoji: '📈',
                to: 'which app would you most likely download?',
                ym: 'investMoney',
                exit: 'utilities',
            },
            {
                answer: 'spend money',
                img: '',
                emoji: '😜',
                to: 'which app would you most likely download?',
                ym: 'spendMoney',
                exit: 'other',
            },
            {
                answer: 'win money',
                img: '',
                emoji: '🍀',
                to: 'which app would you most likely download?',
                ym: 'winMoney',
                exit: 'betting',
            },
        ],
    },
    {
        question: 'which app would you most likely download?',
        answers: [
            {
                answer: 'finance',
                img: '/finance.svg',
                emoji: '📈',
                to: 'what brings a smile to your face?',
                ym: 'app/finance',
                exit: 'betting',
            },
            {
                answer: "films & series",
                img: '/tv.svg',
                emoji: '🍿',
                to: 'what brings a smile to your face?',
                ym: 'app/tv',
                exit: 'other',
            },
            {
                answer: 'vpn',
                img: '/vpn.svg',
                emoji: '🎬',
                to: 'what brings a smile to your face?',
                ym: 'app/vpn',
                exit: 'utilities',
            },
            {
                answer: 'phone cleaner',
                img: '/appCleaner.svg',
                emoji: '🧹',
                to: 'what brings a smile to your face?',
                ym: 'app/cleaner',
                exit: 'utilities',
            },
        ],
    },
    {
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
