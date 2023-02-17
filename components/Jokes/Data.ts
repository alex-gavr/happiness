import { IData } from "../Data";

export const JokesData: Array<IData> = [
    {
        id: 1,
        question: 'Can a kangaroo 🦘 jump higher than a house 🏠?',
        answers: [
            {
                answer: 'yes',
                img: '',
                emoji: '👍',
                to: '/2',
                ym: 'kangaroo/Yes',
                exit: null,
            },
            {
                answer: "no",
                img: '',
                emoji: '👎',
                to: '/2',
                ym: 'kangaroo/No',
                exit: null,
            },
            {
                answer: 'what?',
                img: '',
                emoji: '😁',
                to: '/2',
                ym: 'kangaroo/What',
                exit: null,
            },
            {
                answer: 'i don\'t know',
                img: '',
                emoji: '🤔',
                to: '/2',
                ym: 'kangaroo/Idk',
                exit: null,
            },
        ],
    },
    {
        id: 2,
        question: 'What is the most useless superpower?',
        answers: [
            {
                answer: 'Bullet Attraction',
                img: '/1.webp',
                emoji: '😵‍💫',
                to: '/3',
                ym: 'superpower/Bullet',
                exit: null,
            },
            {
                answer: "Read your own mind",
                img: '/2.webp',
                emoji: '✨',
                to: '/3',
                ym: 'superpower/Mind',
                exit: null,
            },
            {
                answer: 'Absorb Bad Luck',
                img: '/4.webp',
                emoji: '🍀',
                to: '/3',
                ym: 'superpower/Luck',
                exit: null,
            },
            {
                answer: 'Invisible Handwriting',
                img: '/3.webp',
                emoji: '⏸️',
                to: '/3',
                ym: 'superpower/Handwriting',
                exit: null,
            },
        ],
    },
    {
        id: 3,
        question: 'what brings a smile to your face?',
        answers: [
            {
                answer: 'Infinite Free Trial',
                img: '',
                emoji: '😏',
                to: '/4',
                ym: 'smile/trial',
                exit: 'utilities'
            },
            {
                answer: 'Friday night',
                img: '',
                emoji: '🍷',
                to: '/4',
                ym: 'smile/friday',
                exit: 'other'
            },
            {
                answer: "Lucky money win",
                img: '',
                emoji: '🤑',
                to: '/4',
                ym: 'smile/money',
                exit: 'betting'
            },
            {
                answer: 'Cat videos',
                img: '',
                emoji: '😁',
                to: '/4',
                ym: 'smile/kids',
                exit: 'other'
            },
        ],
    },
    {
        id: 4,
        question: 'What do you call an alligator 🐊 in a vest?',
        answers: [
            {
                answer: 'Military alligator',
                img: '',
                emoji: '🎖️',
                to: '/5',
                ym: 'alligator/Military',
                exit: null,
            },
            {
                answer: "Fancy alligator",
                img: '',
                emoji: '🎩',
                to: '/5',
                ym: 'alligator/Fancy',
                exit: null,
            },
            {
                answer: 'An investigator',
                img: '',
                emoji: '😂',
                to: '/5',
                ym: 'alligator/Investigator',
                exit: null,
            },
            {
                answer: 'WTF?',
                img: '',
                emoji: '🤔',
                to: '/5',
                ym: 'alligator/Wtf',
                exit: null,
            },
        ],
    },
    {
        id: 5,
        question: 'what would you rather do?',
        answers: [
            {
                answer: 'invest money',
                img: '',
                emoji: '📈',
                to: '/6',
                ym: 'investMoney',
                exit: 'utilities'
            },
            {
                answer: 'spend money',
                img: '',
                emoji: '😜',
                to: '/6',
                ym: 'spendMoney',
                exit: 'betting'
            },
            {
                answer: 'win money',
                img: '',
                emoji: '🍀',
                to: '/6',
                ym: 'winMoney',
                exit: 'betting'
            },
        ],
    },
    {
        id: 6,
        question: 'How do you help a claustrophobic astronaut?',
        answers: [
            {
                answer: 'Breathing exercises',
                img: '',
                emoji: '🧘',
                to: '/age',
                ym: 'astronaut/Breathing',
                exit: null,
            },
            {
                answer: 'Medication',
                img: '',
                emoji: '💊',
                to: '/age',
                ym: 'astronaut/Medication',
                exit: null,
            },
            {
                answer: 'You can\'t',
                img: '',
                emoji: '😭',
                to: '/age',
                ym: 'astronaut/Cannot',
                exit: null,
            },
            {
                answer: 'Give them a little space',
                img: '',
                emoji: '😁',
                to: '/age',
                ym: 'astronaut/space',
                exit: null,
            },
        ],
    },
    
];
