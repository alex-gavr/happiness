interface IAnswer {
    answer: string;
    img: string;
    emoji: string;
    to: string;
    ym: string;
    exit?: string | null;
}

interface IData {
    id: number;
    question: string;
    answers: Array<IAnswer>;
}

export const CareerData: Array<IData> = [
    {
        id: 1,
        question: 'How satisfied are you with your current job overall?',
        answers: [
            {
                answer: 'Satisfied',
                img: '',
                emoji: '👍',
                to: '/2',
                ym: 'satisfied/Yes',
                exit: null,
            },
            {
                answer: 'Neutral',
                img: '',
                emoji: '😐',
                to: '/2',
                ym: 'satisfied/Neutral',
                exit: null,
            },
            {
                answer: 'Dissatisfied',
                img: '',
                emoji: '👎',
                to: '/2',
                ym: 'satisfied/No',
                exit: null,
            },
        ],
    },
    {
        id: 2,
        question: 'In which industry do you currently work?',
        answers: [
            {
                answer: 'Healthcare',
                img: '',
                emoji: '🏥',
                to: '/3',
                ym: 'industry/Healthcare',
                exit: null,
            },
            {
                answer: 'Finance',
                img: '',
                emoji: '🏦',
                to: '/3',
                ym: 'industry/Finance',
                exit: null,
            },
            {
                answer: 'Education',
                img: '',
                emoji: '📚',
                to: '/3',
                ym: 'industry/Education',
                exit: null,
            },
            {
                answer: 'Retail',
                img: '',
                emoji: '🛍️',
                to: '/3',
                ym: 'industry/Retail',
                exit: null,
            },
            {
                answer: 'Technology',
                img: '',
                emoji: '🧑‍💻',
                to: '/3',
                ym: 'industry/Technology',
                exit: null,
            },
            {
                answer: 'Other',
                img: '',
                emoji: '',
                to: '/3',
                ym: 'industry/Other',
                exit: null,
            },
        ],
    },
    {
        id: 3,
        question: 'Which factor is the most important to you in a career?',
        answers: [
            {
                answer: 'Salary',
                img: '',
                emoji: '💰',
                to: '/4',
                ym: 'factors/Salary',
                exit: null,
            },
            {
                answer: 'Work-life balance',
                img: '',
                emoji: '⚖️',
                to: '/4',
                ym: 'factors/Balance',
                exit: null,
            },
            {
                answer: 'Job security',
                img: '',
                emoji: '🔓',
                to: '/4',
                ym: 'factors/Security',
                exit: null,
            },
            {
                answer: 'Career growth',
                img: '',
                emoji: '📈',
                to: '/4',
                ym: 'factors/Growth',
                exit: null,
            },
        ],
    },
    {
        id: 4,
        question: 'Which skill do you think is the most important for success?',
        answers: [
            {
                answer: 'Technical skills',
                img: '',
                emoji: '🧑‍💻',
                to: '/5',
                ym: 'skills/Technical',
                exit: null,
            },
            {
                answer: 'Communication',
                img: '',
                emoji: '🗣️',
                to: '/5',
                ym: 'skills/Communication',
                exit: null,
            },
            {
                answer: 'Critical thinking',
                img: '',
                emoji: '🤔',
                to: '/5',
                ym: 'skills/Thinking',
                exit: null,
            },
            {
                answer: 'Flexibility',
                img: '',
                emoji: '🤗',
                to: '/5',
                ym: 'skills/Flexibility',
                exit: null,
            },
            {
                answer: 'Leadership',
                img: '',
                emoji: '💪',
                to: '/5',
                ym: 'skills/Leadership',
                exit: null,
            },
            {
                answer: 'Other',
                img: '',
                emoji: '',
                to: '/5',
                ym: 'skills/Other',
                exit: null,
            },
        ],
    },
    {
        id: 5,
        question: 'How do you stay current with developments and trends?',
        answers: [
            {
                answer: 'Workshops',
                img: '',
                emoji: '💼',
                to: '/6',
                ym: 'trends/Workshops',
                exit: null,
            },
            {
                answer: 'Reading',
                img: '',
                emoji: '📚',
                to: '/6',
                ym: 'trends/Reading',
                exit: null,
            },
            {
                answer: 'Webinars',
                img: '',
                emoji: '🧑‍💻',
                to: '/6',
                ym: 'trends/Webinars',
                exit: null,
            },
            {
                answer: 'Networking',
                img: '',
                emoji: '🗣️',
                to: '/6',
                ym: 'trends/Networking',
                exit: null,
            },
            {
                answer: 'Other',
                img: '',
                emoji: '',
                to: '/6',
                ym: 'trends/Other',
                exit: null,
            },
        ],
    },
    {
        id: 6,
        question: 'How important is work-life balance to you?',
        answers: [
            {
                answer: 'Important',
                img: '',
                emoji: '👍',
                to: '/7',
                ym: 'balance/Important',
                exit: null,
            },
            {
                answer: 'I don\'t care',
                img: '',
                emoji: '😐',
                to: '/7',
                ym: 'balance/IDC',
                exit: null,
            },
            {
                answer: "Not important",
                img: '',
                emoji: '👎',
                to: '/7',
                ym: 'balance/NotImportant',
                exit: null,
            }
        ],
    },
    {
        id: 7,
        question: 'Are you ready for a career change right now?',
        answers: [
            {
                answer: 'Yes',
                img: '',
                emoji: '👍',
                to: '/age',
                ym: 'ready/Yes',
                exit: null,
            },
            {
                answer: 'I don\'t know',
                img: '',
                emoji: '😕',
                to: '/age',
                ym: 'ready/IDK',
                exit: null,
            },
            {
                answer: "No",
                img: '',
                emoji: '👎',
                to: '/age',
                ym: 'ready/No',
                exit: null,
            }
        ],
    },
];
