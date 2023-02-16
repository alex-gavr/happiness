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

export const comments: Array<ICommentsData> = [
    {
        id: 1,
        name: "Emma Swanson",
        img: "/woman1.webp",
        comment: "It was a fun and engaging experience. We need more of such things on the web 👍",
        time: "7 hours ago",
        emojis: [
            {
                emoji: '👍',
                count: 5,
            },
            {
                emoji: '😁',
                count: 3,
            },
            {
                emoji: '👎',
                count: 2,
            },
        ],
    },
    {
        id: 2,
        name: "Olivia Smith",
        img: "/woman2.webp",
        comment: "I laughed my ass off 😂",
        time: "4 hours ago",
        emojis: [
            {
                emoji: '👍',
                count: 2,
            },
            {
                emoji: '😁',
                count: 8,
            },
            {
                emoji: '👎',
                count: 3,
            },
        ],
    },
    {
        id: 3,
        name: "Martina Rodriguez",
        img: "/woman4.webp",
        comment: "This survey definitely boosts the mood. Give it 1 minute of your life, and you won't regret it.",
        time: "12 hours ago",
        emojis: [
            {
                emoji: '👍',
                count: 4,
            },
            {
                emoji: '😁',
                count: 2,
            },
            {
                emoji: '👎',
                count: 1,
            },
        ],
    },
    {
        id: 4,
        name: "James Linwood",
        img: "/man1.webp",
        comment: "LOL, this is some top content. Guys, try it out now!",
        time: "12 hours ago",
        emojis: [
            {
                emoji: '👍',
                count: 3,
            },
            {
                emoji: '😁',
                count: 5,
            },
            {
                emoji: '👎',
                count: 3,
            },
        ],
    },
    {
        id: 5,
        name: "Sophia Johnson",
        img: "/woman3.webp",
        comment: "The questions are really unique and unexpected. I had much fun answering them!",
        time: "12 hours ago",
        emojis: [
            {
                emoji: '👍',
                count: 8,
            },
            {
                emoji: '😁',
                count: 1,
            },
            {
                emoji: '👎',
                count: 1,
            },
        ],
    },
];
